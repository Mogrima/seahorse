class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.player = new Player(this);

        this.keys = [];
        this.input = new InputHandler(this);

        this.ammo = 20;

        this.ammoInterval = 300;
        this.maxAmmo = 20;
        this.ammoTimer = 0;

        this.ui = new UI(this);

        this.enemies = [];
        this.enemyTimer = 0;
        this.enemyInterval = 2000;
        this.gameOver = false;
        this.score = 0;
        this.winningScore = 80;

        this.gameTime = 0;
        this.timeLimit = 30000;

        this.speed = 1;
        this.background = new Background(this);

        this.particles = [];

        this.explosions = [];

        this.debug = false;

        this.intervalFpsDisplay = 3000;
        this.timerFpsDisplay = 0;
        this.fpsCount = 0;

    }

    update(deltaTime) {
        if (!this.gameOver) this.gameTime += deltaTime;
        if (this.gameTime > this.timeLimit) this.gameOver = true;

        // FPS
        if (this.fpsCount === 0 && deltaTime !== 0) {
            this.fpsCount = Math.floor(1000 / deltaTime);
        }
        if (this.timerFpsDisplay > this.intervalFpsDisplay) {
            this.fpsCount = Math.floor(1000 / deltaTime);
            this.timerFpsDisplay = 0;
        } else {
            this.timerFpsDisplay += deltaTime;
        }

        this.player.update(deltaTime);
        this.background.update();
        this.background.layer4.update();

        if (this.ammoTimer > this.ammoInterval) {
            if (this.ammo < this.maxAmmo) this.ammo++;
            this.ammoTimer = 0;
        } else {
            this.ammoTimer += deltaTime;
        }

        this.particles.forEach(particle => particle.update());
        this.particles = this.particles.filter(particle => !particle.markedForDeletion);

        this.explosions.forEach(explosion => explosion.update(deltaTime));
        this.explosions = this.explosions.filter(explosion => !explosion.markedForDeletion);


        this.enemies.forEach(enemy => {
            enemy.update();
            // Проверим, не столкнолся ли враг с главным игроком (player)
            if (this.checkCollision(this.player, enemy)) {
                // если столкновение произошло, помечаем врага как удаленного
                enemy.markedForDeletion = true;
                this.addExplosion(enemy);
                for (let i = 0; i < enemy.score; i++) {
                    this.particles.push(new Particle(this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5));
                }
                if (enemy.type === 'lucky') this.player.enterPowerUp();
                else if (!this.gameOver) this.score--;
            }
            // для всех активных пуль (projectiles) также проверим условие столкновения
            // пули с врагом.
            this.player.projectiles.forEach(projectile => {
                if (this.checkCollision(projectile, enemy)) {
                    enemy.lives--; // уменьшаем жизни врага на единицу
                    // если столкновение произошло, помечаем снаряд как удаленный
                    this.particles.push(new Particle(this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5));
                    projectile.markedForDeletion = true;
                    if (enemy.lives <= 0) {
                        enemy.markedForDeletion = true; // удаляем врага
                        this.addExplosion(enemy);
                        if (enemy.type === 'hive') {
                            for (let i = 0; i < 5; i++) {
                                this.enemies.push(new Drone(this,
                                    enemy.x + Math.random() * enemy.width,
                                    enemy.y + Math.random() * enemy.height * 0.5));
                            }
                        }
                        for (let i = 0; i < enemy.score; i++) {
                            this.particles.push(new Particle(this, enemy.x + enemy.width * 0.5,
                                enemy.y + enemy.height * 0.5));
                        }
                        if (!this.gameOver) this.score += enemy.score; // увеличиваем количество очков главного игрока
                        // if (this.isWin()) this.gameOver = true;  // проверяем условие победы
                    }
                }
            });
        });

        this.enemies = this.enemies.filter(enemy => !enemy.markedForDeletion);

        if (this.enemyTimer > this.enemyInterval && !this.gameOver) {
            this.addEnemy();
            this.enemyTimer = 0;
        } else {
            this.enemyTimer += deltaTime;
        }
    }

    addEnemy() {
        const randomize = Math.random();
        if (randomize < 0.3) this.enemies.push(new Angler1(this));
        else if (randomize < 0.6) this.enemies.push(new Angler2(this));
        else if (randomize < 0.7) this.enemies.push(new HiveWhale(this));
        else this.enemies.push(new LuckyFish(this));

    }

    addExplosion(enemy) {
        const randomize = Math.random();
        if (randomize < 0.5) this.explosions.push(new
        SmokeExplosion(this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5));
        else this.explosions.push(new
        FireExplosion(this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5));
    }

    checkCollision(rect1, rect2) {
        return (
            rect1.x < rect2.x + rect2.width &&
            rect2.x < rect1.x + rect1.width &&
            rect1.y < rect2.y + rect2.height &&
            rect2.y < rect1.y + rect1.height);
    }

    isWin() {
        return this.score >= this.winningScore;
    }

    draw(context) {
        this.background.draw(context);
        this.ui.draw(context);
        this.player.draw(context);
        this.particles.forEach(particle => particle.draw(context));
        context.fillStyle = 'black';
        this.enemies.forEach(enemy => enemy.draw(context));
        this.explosions.forEach(explosion => explosion.draw(context));
        this.background.layer4.draw(context);

    }
}
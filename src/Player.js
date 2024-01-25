import { Projectile } from './Projectile.js';

export class Player {
    constructor(game) {
        this.game = game;
        this.width = 120;
        this.height = 190;
        this.x = 20;
        this.y = 150;
        this.speedY = 0;
        this.maxSpeed = 8;

        this.projectiles = [];
        // image and animation player
        this.image = document.getElementById('player');
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 37;
        this.powerUp = false;
        this.powerUpTimer = 0;
        this.powerUpLimit = 10000;

    }

    update(deltaTime) {
        this.y += this.speedY;

        if (this.game.keys.includes('ArrowUp')) this.speedY = -this.maxSpeed;
        else if (this.game.keys.includes('ArrowDown')) this.speedY = this.maxSpeed;
        else this.speedY = 0;
        // vertical boundaries
        if (this.y > this.game.height - this.height * 0.5) this.y = this.game.
            height - this.height * 0.5;
        else if (this.y < -this.height * 0.5) this.y = -this.height * 0.5;

        // handle projectiles
        this.projectiles.forEach(pr => {
            pr.update();
        });
        this.projectiles = this.projectiles.filter(pr => !pr.markedForDeletion);

        // sprite animation
        if (this.frameX < this.maxFrame) {
            this.frameX++;
        } else {
            this.frameX = 0;
        }
        // power up
        if (this.powerUp) {
            if (this.powerUpTimer > this.powerUpLimit) {
                this.powerUpTimer = 0;
                this.powerUp = false;
                this.frameY = 0;
            } else {
                this.powerUpTimer += deltaTime;
                this.frameY = 1;
                this.game.ammo += 0.1;
            }
        }
    }

    draw(context) {
        // hitbox player
        if (this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height);

        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height,
            this.width, this.height, this.x, this.y, this.width, this.height);
        this.projectiles.forEach(pr => {
            pr.draw(context);
        });
    }

    shootTop() {
        if (this.game.ammo > 0) {
            this.projectiles.push(new Projectile(this.game, this.x + 60, this.y - 30));
            this.game.ammo--;
        }
        if (this.powerUp) this.shootBottom();
    }

    shootBottom() {
        if (this.game.ammo > 0) {
            this.projectiles.push(new Projectile(this.game, this.x + 80, this.y + 120));
        }
    }

    enterPowerUp() {
        this.powerUpTimer = 0;
        this.powerUp = true;
        this.game.ammo = this.game.maxAmmo;
    }
}
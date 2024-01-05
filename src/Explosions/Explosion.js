class Explosion {
    constructor(game, x, y) {
        this.game = game;
        this.frameX = 0;
        this.spriteWidth = 200;
        this.spriteHeight = 200;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.x = x - this.width * 0.5;
        this.y = y - this.height * 0.5;
        // увеличим время анимации каждого кадра, так как количество фреймов достаточно маленькое
        // фактически сами задаем количество кадров анимации, например, уменьшая его, если кол-во
        // фреймов недостаточно, а общее число кадров игры, заданное в deltatime больше
        this.fps = 30;
        this.timer = 0;
        this.interval = 1000/this.fps;
        this.markedForDeletion = false;
        this.maxFrame = 8;
    }
    update(deltaTime) {
        // анимация будет прокручиваться вместе с движением игрового мира
        this.x -= this.game.speed;
        if (this.timer > this.interval) {
            this.frameX++;
            this.timer = 0;
        } else {
            this.timer += deltaTime;
        }

        if (this.frameX > this.maxFrame) this.markedForDeletion = true;
    }
    draw(context) {
        context.drawImage(this.image, this.frameX * this.spriteWidth, 0,
            this.spriteWidth, this.spriteHeight, this.x, this.y,
            this.width, this.height);
    }
}
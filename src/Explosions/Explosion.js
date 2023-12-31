class Explosion {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.frameX = 0;
        // у всех фреймов анимации одинаковая высота, но будет разная ширина
        this.spriteHeight = 200;
        // увеличим время анимации каждого кадра, так как количество фреймов достаточно маленькое
        this.fps = 15;
        this.timer = 0;
        this.interval = 1000/this.fps;
        this.markedForDeletion = false;
    }
    update(deltaTime) {
        this.frameX++;
    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y);
    }
}
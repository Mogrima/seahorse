class Explosion {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.frameX = 0;
        // у всех фреймов анимации одинаковая высота, но будет разная ширина
        this.spriteHeight = 200;
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
        if(this.timer > this.interval) {
            this.frameX++;
            this.timer = 0;
        } else {
            this.timer += deltaTime;
        }
        
        if(this.frameX > this.maxFrame) this.markedForDeletion = true;
    }
    draw(context) {
        context.drawImage(this.image, this.frameX * this.spriteWidth, 0,
                        this.spriteWidth, this.spriteHeight, this.x, this.y,
                        this.width, this.height);
    }
}
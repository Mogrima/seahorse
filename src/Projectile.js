class Projectile {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.spriteWidth = 200;
        this.spriteHeight = 200;
        this.width = 100;
        this.height = 100;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 14;
        this.speed = 10;
        this.markedForDeletion = false;
        this.image = document.getElementById('projectile');
    }
  
    update() {
        this.x += this.speed;
        if (this.x > this.game.width * 0.8) this.markedForDeletion = true;

        if(this.frameX < this.maxFrame) {
            this.frameX++;
        } else {
            this.frameX = 0;
        }
    }
  
    draw(context) {
        context.drawImage(this.image, 
            this.frameX * this.spriteWidth, this.frameY * this.spriteHeight,
            this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    } 
}
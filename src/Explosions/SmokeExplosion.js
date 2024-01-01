class SmokeExplosion extends Explosion {
    constructor(game, x, y) {
        super(game, x, y);
        this.image = document.getElementById('smokeExplosion');
        this.spriteWidth = 200;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.x = x - this.width * 0.5;
        this.y = y - this.height * 0.5;
    }
}
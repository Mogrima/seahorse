export class Enemy {
    constructor(game) {
        this.game = game;
        this.x = this.game.width;
        this.speedX = Math.random() * -1.5 - 2.5;
        this.markedForDeletion = false;

        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 37;
    }

    update() {
        // Обновляем x-координату врага (уменьшаем ее на величину speedX)
        this.x += this.speedX - this.game.speed;
        // Помечаем врага как удаленного, если он полностью пересечет левую границу игрового поля
        if (this.x + this.width < 0) this.markedForDeletion = true;

        if (this.frameX < this.maxFrame) {
            this.frameX++;
        } else {
            this.frameX = 0;
        }
    }

    draw(context) {
        if (this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height,
            this.width, this.height, this.x, this.y, this.width, this.height);

        // отобразим у каждого врага его жизни
        if (this.game.debug) {
            context.font = '20px Helvetica';
            context.fillText(this.lives, this.x, this.y - 5);
        }
    }
}
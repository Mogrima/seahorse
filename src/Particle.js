export class Particle {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.image = document.getElementById('gears');
        this.frameX = Math.floor(Math.random() * 3);
        this.frameY = Math.floor(Math.random() * 3);
        this.spriteSize = 50;
        this.sizeModifer = (Math.random() * 0.5 + 0.5).toFixed(1);
        this.size = this.spriteSize * this.sizeModifer;
        // разбор деталей от игрока по горизонтали
        this.speedX = Math.random() * 6 - 3;
        // движение частиц по вертикали случайное число от 0 до - 15, поэтому частицы всегда будут двигаться вверх
        this.speedY = Math.random() * - 15;
        // сила тяжести, чтобы частицы подали вниз
        this.gravity = 0.5;
        this.markedForDeletion = false;
        // вращение
        this.angle = 0;
        // скорсть вращения от - 0.2 до 0.1
        this.va = Math.random() * 0.2 - 0.1;
        // кол-во отскоков
        this.bounced = 0;
        this.bottomBounceBoundary = Math.random() * 80 + 60;
    }

    update() {
        // угол изменяется под вращением
        this.angle += this.va;
        // вертикальная скорость уменьшается под гравитацией
        this.speedY += this.gravity;
        this.x -= this.speedX + this.game.speed;
        this.y += this.speedY;
        if (this.y > this.game.height + this.size || this.x < 0 - this.size) {
            this.markedForDeletion = true;
        }
        // подпрыгивание частиц
        if (this.y > this.game.height - this.bottomBounceBoundary && this.bounced < 2) {
            this.bounced++;
            this.speedY *= -0.5;
        }
    }
    draw(context) {
        context.save();
        // чтобы повернуть что-нибудь на холсте нам нужно сначала переместить
        // центральную точку вращения, которая обычно считается (0, 0) верхний левый угол
        // переносим ее поверх текущей частицы
        context.translate(this.x, this.y);
        context.rotate(this.angle);
        // меняем this.x, this.y на 0 и 0, потому что положение это частицы уже определено в translate
        context.drawImage(this.image, this.frameX * this.spriteSize, this.frameY * this.spriteSize,
            this.spriteSize, this.spriteSize, this.size * -0.5, this.size * -0.5, this.size, this.size);
        context.restore();
    }
}
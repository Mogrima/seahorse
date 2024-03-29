import { Enemy } from './Enemy.js';

export class Drone extends Enemy {
    constructor(game, x, y) {
        super(game);
        this.width = 115;
        this.height = 95;
        this.y = y;
        this.x = x;
        this.image = document.getElementById('drone');
        this.frameY = Math.floor(Math.random() * 2);

        this.lives = 3;
        this.score = this.lives;
        this.type = 'drone';
        this.speedX = Math.random() * -4.2 - 0.5;
    }
}
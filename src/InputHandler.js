export class InputHandler {
    constructor(game) {
        this.game = game;
        this.restartKeys = ['r', 'R', 'к', 'К'];
        this.debagKeys = ['d', 'D', 'в', 'В'];
        window.addEventListener('keydown', e => {
            if (((e.key === 'ArrowUp') || (e.key === 'ArrowDown')) && this.game.keys.indexOf(e.key) === -1) {
                this.game.keys.push(e.key);
            } else if (e.key === ' ') {
                this.game.player.shootTop();
            } else if (this.debagKeys.includes(e.key)) {
                this.game.debug = !this.game.debug;
            } else if (this.restartKeys.includes(e.key)) {
                this.game.restart();
            }
        });
        window.addEventListener('keyup', e => {
            if (this.game.keys.indexOf(e.key) > -1) {
                this.game.keys.splice(this.game.keys.indexOf(e.key), 1);
            }
        });

    }
}
window.addEventListener('load', function () {
    // canvas setup
    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1500;
    canvas.height = 500;     
    
    const game = new Game(canvas.width, canvas.height);
    let lastTime = 0;

    // animation loop
    function animate(currentTime) {
        const deltaTime = currentTime - lastTime;
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем игровое поле перед следующей анимацией
        game.draw(ctx);
        game.update(deltaTime);
        lastTime = currentTime;
        requestAnimationFrame(animate);
        // console.log(deltaTime);
    }

    animate(0);
});
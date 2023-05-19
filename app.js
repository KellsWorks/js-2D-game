import { InputHandler } from "./input.js";
import { Spacecraft } from "./spacecraft/index.js";

window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.spaceCraft = new Spacecraft(this);
            this.input = new InputHandler();
        }
        update() {
            this.spaceCraft.update(this.input.keys);
        }
        draw(context) {
            this.spaceCraft.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }

    animate();
});

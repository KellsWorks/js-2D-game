export class Spacecraft {
    constructor(game) {
        this.game = game;

        this.width = 100;
        this.height = 91.3;

        this.x = 0;
        this.y = this.game.height - this.height;

        this.yy = 0;

        this.weight = 1;

        this.image = document.getElementById('spacecraft');
        this.image.classList.add('spacecraft');

        this.speed = 0;
        this.maxSpeed = 10;
    }

    update(input) {

        this.x += this.speed;

        if (input.includes('ArrowRight')) {
            this.speed = this.maxSpeed;
        } else if (input.includes('ArrowLeft')) {
            this.speed = -this.maxSpeed;
        } else {
            this.speed = 0;
        }

        if (this.x < 0) {
            this.x = 0;
        }
        if (this.x > this.game.width - this.width) {
            this.x = this.game.width - this.width;
        }

        this.y += this.yy;

        if (input.includes('ArrowUp') && this.onGround()) {
            this.yy -= 10;
        }

        this.y += this.yy;

        if(!this.onGround()){
            this.yy += this.weight;
        }else{
            this.yy = 0;
        }
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y, 100, 100);
    }

    onGround(){
        return this.y > this.game.height - this.height;
    }
}

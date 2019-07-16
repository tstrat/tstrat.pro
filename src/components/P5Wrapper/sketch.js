import bg from "./../../media/bg.jpg";

export default function sketch(p) {
    let speed = 0.5;
    let Stars = [];
    let size = 200;
    let bg2;
    p.setup = function() {
        p.createCanvas(window.innerWidth, window.innerHeight);
        for (let i = 0; i < size; i++) {
            Stars.push(new p.Star());
        }
        bg2 = p.loadImage(bg);
    };

    p.move = function() {
        for (let element of Stars) {
            element.move();
        }

        Stars.forEach(e => e.move());
    };

    p.windowResized = function() {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
        p.pop();
    };

    p.draw = function() {
        p.background(bg2);
        p.push();
        p.translate(p.width / 2, p.height / 2);
        p.fill(255);
        p.move();
        for (let star of Stars) {
            star.show();
        }
        p.pop();
    };

    p.Star = function() {
        this.x = p.random(-p.width / 2, p.width / 2);
        this.y = p.random(-p.height / 2, p.height / 2);
        this.z = p.random(p.width);

        this.move = () => {
            this.z = this.z - speed;
            if (this.z < 1) {
                this.z = p.width;
                this.x = p.random(-p.width / 2, p.width / 2);
                this.y = p.random(-p.height / 2, p.height / 2);
            }
        };
        this.show = () => {
            p.fill(255);
            p.noStroke();

            var sx = p.map(this.x / this.z, 0, 1, 0, p.width);
            var sy = p.map(this.y / this.z, 0, 1, 0, p.height);

            var r = p.map(this.z, 0, p.width, 5, 0);
            p.ellipse(sx, sy, r, r);
        };
    };
}

import global from './globalVariables';
import {lineLength} from "./helpers";

export default class Creature {
    position = {
        x: 0,
        y: 0
    };
    step = 1;
    speed = 10;
    height = 20;
    width = 20;
    limitCome = this.width + 20;
    center = {
        x: this.position.x + this.width / 2,
        y: this.position.y - this.height / 2,
    };
    name = {
        text: 'being',
        position: {x: 0, y: 0},
        font: '12px serif',
        offsetTop: 20,
    };

    up = () => {
        this.movementTimer('y', -1);
    };
    down = () => {
        this.movementTimer('y', 1);
    };
    left = () => {
        this.movementTimer('x', -1);
    };
    right = () => {
        this.movementTimer('x', 1);
    };
    setCenter = (position) => {
        this.center.x = position.x + this.width / 2;
        this.center.y = position.y + this.width / 2;
    };

    moveTo = (target, speedModifier = 1) => {
        const lengthLine = lineLength(target, this.center);

        if (lengthLine > this.limitCome) {
            for (let i = 0; i< speedModifier; i++){
                console.log("position: " + this.center.x, "target: " + target.x);
                // if (this.center.x === target.x) console.log( -(this.center.x - target.x));
                const vectorX = -(this.center.x - target.x);
                const vectorY = -(this.center.y - target.y);
                console.log("vectorX: " + vectorX)
                if (vectorX > this.step || vectorX < -this.step) Math.sign(vectorX) === 1 ? this.right() : this.left();
                if (vectorY > this.step || vectorY < -this.step) Math.sign(vectorY) === 1 ? this.down() : this.up();
            }
            //
            // const vectorXStep = -vectorX / (Math.abs(-vectorX / this.step) | 0);
            // const vectorYStep = -vectorY / (Math.abs(-vectorY / this.step) | 0);
            //
            // console.log(Math.sign(vectorY));
            //
            // if (vectorXStep && vectorXStep !== Infinity && vectorXStep !== -Infinity) this.position.x += vectorXStep;
            // if (vectorYStep && vectorYStep !== Infinity && vectorYStep !== -Infinity) this.position.y += vectorYStep;
        }
    };

    movementTimer = (axis, side, n = 0) => {
        if (n <= this.speed && this.checkFieldRange(axis, side)) {
            this.position[axis] += side * this.step;
            this.setCenter(this.position);
            setTimeout(this.movementTimer, 0, axis, side, ++n);
        }
    };

    checkFieldRange = (axis, side) => {
        const futureDistance = this.position[axis] + side * this.step;
        if (axis === 'x') {
            return futureDistance >= 0 && futureDistance <= global.width - this.width;
        } else if (axis === 'y') {
            return futureDistance >= 0 && futureDistance <= global.height -
                this.height;
        }
    };

    showName = () => {
        const nameWidth = global.ctx.measureText(this.name.text).width;

        this.name.position.x = this.center.x - nameWidth / 2;
        this.name.position.y = this.center.y - this.name.offsetTop;

        global.ctx.font = this.name.font;
        global.ctx.fillText(this.name.text, this.name.position.x,
            this.name.position.y);
    };
}

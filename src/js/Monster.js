import Creature from './Creature';
import global from './globalVariables';
import {insideCircle} from './helpers';

export default class Monster extends Creature {
    agroRange = 300;
    agro = false;
    startPosition = {
        x: this.position.x,
        y: this.position.y
    };
    pursuitTimer = null;
    insideAgro = false;
    agroTime = 4000; // ms

    constructor(x, y, name) {
        super();
        this.position.x = x;
        this.position.y = y;
        this.startPosition.x = x;
        this.startPosition.y = y;
        this.name.text = name;
        this.step = 0.1;
        this.setCenter(x, y);
    }

    create = () => {
        global.ctx.fillStyle = '#ff000c';
        global.ctx.fillRect(this.position.x, this.position.y, 20, 20);
        this.setCenter(this.position.x, this.position.y);
    };

    showAgroRange = () => {
        global.ctx.beginPath();
        global.ctx.strokeStyle = '#ff000c';
        global.ctx.arc(this.center.x, this.center.y, this.agroRange, 0, Math.PI * 2,
            true);
        global.ctx.stroke();
    };

    checkAgroRange = (pers) => {
        if (insideCircle(this.center, this.agroRange, pers)) {
            this.agro = true;
            this.insideAgro = true;
        } else {
            this.insideAgro = false;
        }
    };

    agroAction = (pers) => {
        this.checkAgroRange(pers);

        if (this.agro) {
            this.moveTo(pers.center);
            this.setCenter(this.position.x, this.position.y);

            this.checkAgroTimer();

        } else if (!this.agro) {
            this.moveTo(this.startPosition);
            this.setCenter(this.position.x, this.position.y);
        }
    };

    checkAgroTimer = () => {
        if (this.insideAgro && this.pursuitTimer !== null) {
            clearTimeout(this.pursuitTimer);
            this.pursuitTimer = null;
        } else if (!this.insideAgro && this.pursuitTimer === null) {
            this.pursuitTimer = setTimeout(() => this.agro = false, this.agroTime);
        }
    }
}

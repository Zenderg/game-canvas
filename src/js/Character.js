import global from './globalVariables'
import Creature from "./Creature";

export default class Character extends Creature{
    constructor(x, y, name) {
        super();
        this.position.x = x;
        this.position.y = y;
        this.name.text = name;
    }

    create = () => {
        global.ctx.fillStyle = '#000000';
        global.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        this.setCenter(this.position);
    };
}



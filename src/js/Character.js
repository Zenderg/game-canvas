import global from './globalVariables'
import Being from "./Being";

export default class Character extends Being{
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
    }

    create = () => {
        global.ctx.fillStyle = '#000000';
        global.ctx.fillRect(this.x, this.y, 20, 20);
    };
}



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

  constructor(x, y, name) {
    super();
    this.position.x = x;
    this.position.y = y;
    this.startPosition.x = x;
    this.startPosition.y = y;
    this.name.text = name;
    // this.step = 2;
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

  agro = (pers) => {
    if (insideCircle(this.center, this.agroRange, pers)){
      this.moveTo(pers);
      this.setCenter(this.position.x, this.position.y);
    }
  };
}

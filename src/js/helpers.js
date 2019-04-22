import global from './globalVariables';

export const activeKeys = () => Object.keys(global.keys).filter(item => global.keys[item]);

export const markKey = (key, flag) => {
    if (global.keys[key] !== undefined) global.keys[key] = flag;
};
export const insideCircle = (center, radius, pers) => {
  return (center.x - pers.position.x) ** 2 + (center.y - pers.position.y) ** 2 <= radius ** 2;
};

export const resetControls = () => {
  for (let key in global.keys){
      global.keys[key] = false;
  }
};

export const lineLength = (target, position) => {
    return Math.sqrt((target.x - position.x) ** 2 + (target.y - position.y) ** 2)
};

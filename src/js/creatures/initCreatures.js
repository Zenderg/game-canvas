import global from '../globalVariables';
import Character from '../Character';
import NPC from '../NPC';
import Monster from '../Monster';

const initCreatures = () => {
  global.characters.push(new Character(10, 10, 'Hero 1'));
  global.characters.push(new Character(10, 10, 'Hero 2'));
    global.npcs.push(new NPC(600,600, "Служанка Мери"));
    global.npcs.push(new NPC(400,600, "Служанка Мери"));
    global.monsters.push(new Monster(300, 300, "Волк"));
};
export default initCreatures;
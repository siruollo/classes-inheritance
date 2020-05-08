import Character from './Character';

class Archer extends Character {
  constructor(name, type) {
    if (type !== 'Bowman' && type !== 'Undead') {
      throw new Error('Ошибка. Допускаются только персонажи типа: Bowman, Undead');
    }
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

export default Archer;

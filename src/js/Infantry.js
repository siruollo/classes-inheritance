import Character from './Character';

class Infantry extends Character {
  constructor(name, type) {
    if (type !== 'Swordsman' && type !== 'Zombie') {
      throw new Error('Ошибка. Допускаются только персонажи типа: Swordsman, Zombie');
    }
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

export default Infantry;

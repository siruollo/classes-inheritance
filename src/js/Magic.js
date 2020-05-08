import Character from './Character';

class Magic extends Character {
  constructor(name, type) {
    if (type !== 'Magician' && type !== 'Daemon') {
      throw new Error('Ошибка. Допускаются только персонажи типа: Magician, Daemon');
    }
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

export default Magic;

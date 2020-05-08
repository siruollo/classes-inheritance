class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Ошибка. Допускаются только имена длиной от 2 символов и не более 10');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}

export default Character;

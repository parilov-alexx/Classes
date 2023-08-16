export default class Character {
  constructor(name, type, health, level, attack, defence) {
    if (name.length > 1 && name.length < 11) {
      this.name = name;
    } else {
      throw new Error('Неверно введено имя');
    }
    this.health = 100;
    this.level = 1;
    this.type = this.constructor.name;
    this.attack = attack;
    this.defence = defence;
  }
}

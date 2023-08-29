export default class Character {
  constructor(name, type) {
    const players = [
      'Bowman',
      'Daemon',
      'Magician',
      'Swordsman',
      'Undead',
      'Zombie',
    ];
    if (name.length > 1 && name.length < 11) {
      this.name = name;
    } else {
      throw new Error('Неверно введено имя');
    }
    if (!players.includes(type)) {
      throw new Error('Ошибка! такой игрок не существует!');
    } else {
      this.type = type;
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.health = 100;
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
    } else {
      throw new Error('Ошибка! Нельзя повысить уровень умершего!');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

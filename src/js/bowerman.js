import Character from './hero';

export default class Bowerman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
    this.attack = 25;
    this.defence = 25;
  }
}

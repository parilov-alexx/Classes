import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../Swordsman';
import Undead from '../undead';
import Zombie from '../zombie';
import Character from '../hero';

test('Заданный персонаж не существует', () => {
  expect(() => {
    const result = new Character('xxx', 'Monster');
    return result;
  }).toThrow();
});

test('should create Bowman', () => {
  expect(new Bowman('John')).toEqual({
    name: 'John',
    health: 100,
    level: 1,
    type: 'Bowman',
    attack: 25,
    defence: 25,
  });
});

test('should create Daemon', () => {
  expect(new Daemon('John')).toEqual({
    name: 'John',
    health: 100,
    level: 1,
    type: 'Daemon',
    attack: 10,
    defence: 40,
  });
});

test('should create Magician', () => {
  expect(new Magician('John')).toEqual({
    name: 'John',
    health: 100,
    level: 1,
    type: 'Magician',
    attack: 10,
    defence: 40,
  });
});

test('should create Swordsman', () => {
  expect(new Swordsman('John')).toEqual({
    name: 'John',
    health: 100,
    level: 1,
    type: 'Swordsman',
    attack: 40,
    defence: 10,
  });
});

test('should create Undead', () => {
  expect(new Undead('John')).toEqual({
    name: 'John',
    health: 100,
    level: 1,
    type: 'Undead',
    attack: 25,
    defence: 25,
  });
});

test('should create Zombie', () => {
  expect(new Zombie('John')).toEqual({
    name: 'John',
    health: 100,
    level: 1,
    type: 'Zombie',
    attack: 40,
    defence: 10,
  });
});

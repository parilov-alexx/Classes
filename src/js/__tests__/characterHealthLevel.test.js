import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../Swordsman';

import Zombie from '../zombie';

test('Метод levelUp повышает уровень на 1 и изменяет показатели health, attack, defence', () => {
  const recieved = new Magician('Ivan', 'Magician');
  recieved.levelUp();
  expect(recieved).toEqual({
    name: 'Ivan',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  });
});

test('Метод levelUp выбрасывает ошибку, если health = 0', () => {
  const recieved = new Zombie('Ivan', 'Zombie');
  recieved.health = 0;
  expect(() => recieved.levelUp()).toThrow('Нельзя повысить уровень умершего!');
});

test('Метод damage(points) не должен изменять значения, если health = 0', () => {
  const recieved = new Swordsman('Ivan', 'Swordsman');
  recieved.health = 0;
  const result = {
    name: 'Ivan',
    type: 'Swordsman',
    health: 0,
    level: 1,
    attack: 40,
    defence: 10,
  };
  recieved.damage(10);
  expect(recieved).toEqual(result);
});

test('при health < 0 метод damage(points) должен уствновить health = 0', () => {
  const recieved = new Daemon('Ivan', 'Daemon');
  const expectedHealth = 0;
  recieved.damage(500);
  recieved.health = 0;

  expect(recieved.health).toEqual(expectedHealth);
});

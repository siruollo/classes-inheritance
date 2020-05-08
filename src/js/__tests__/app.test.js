import Character from '../Character';
import Magic from '../Magic';
import Infantry from '../Infantry';
import Archer from '../Archer';

test('Верный ввод лучник', () => {
  const received = new Archer('Ron', 'Bowman');
  const expected = {
    name: 'Ron',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Верный ввод маг', () => {
  const received = new Magic('Ron', 'Magician');
  const expected = {
    name: 'Ron',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('Верный ввод пехота', () => {
  const received = new Infantry('Ron', 'Swordsman');
  const expected = {
    name: 'Ron',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

test('Не верное имя', () => {
  expect(() => new Character('R', 'Undead')).toThrow();
});

test('Не верный тип лучник', () => {
  expect(() => new Archer('Ron', 'Soldier')).toThrow();
});

test('Не верный тип маг', () => {
  expect(() => new Magic('Ron', 'Soldier')).toThrow();
});

test('Не верный тип пехота', () => {
  expect(() => new Infantry('Ron', 'Soldier')).toThrow();
});

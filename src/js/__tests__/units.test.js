import Character
  from '../Character';

import Bowerman
  from '../Bowerman';

import Swordsman
  from '../Swordsman';

import Magician
  from '../Magician';

import Deamon
  from '../Deamon';

import Undead
  from '../Undead';

import Zombie
  from '../Zombie';

test('Character', () => {
  const result = new Character('Edgar', 'bowerman');
  const expectation = {
    name: 'Edgar',
    type: 'bowerman',
    health: 100,
    level: 1,
  };

  expect(result).toEqual(expectation);
});

test('Bowerman', () => {
  const result = new Bowerman('Edgar', 'bowerman');
  const expectation = {
    name: 'Edgar',
    type: 'bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(result).toEqual(expectation);
});

test('Swordsman', () => {
  const result = new Swordsman('Arthur', 'swordsman');
  const expectation = {
    name: 'Arthur',
    type: 'swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(result).toEqual(expectation);
});

test('Magician', () => {
  const result = new Magician('Gendalf', 'magician');
  const expectation = {
    name: 'Gendalf',
    type: 'magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(result).toEqual(expectation);
});

test('Deamon', () => {
  const result = new Deamon('Max', 'deamon');
  const expectation = {
    name: 'Max',
    type: 'deamon',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(result).toEqual(expectation);
});

test('Undead', () => {
  const result = new Undead('Victor', 'undead');
  const expectation = {
    name: 'Victor',
    type: 'undead',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(result).toEqual(expectation);
});

test('Zombie', () => {
  const result = new Zombie('Valentin', 'zombie');
  const expectation = {
    name: 'Valentin',
    type: 'zombie',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(result).toEqual(expectation);
});

test('lengthOfName', () => {
  expect(() => new Bowerman('E', 'bowerman')).toThrowError(
    '???????????????????????? ?????????? ??????????',
  );
});

test('typeOfUnit', () => {
  expect(() => new Bowerman('Edgar', 'archer')).toThrowError(
    '???????????????????????? ?????? ??????????',
  );
});

import {
  Bowerman,
} from '../units';

test('lengthOfName', () => {
  function result() {
    new Bowerman('E', 'bowerman');
  }
  const expectation = new Error('Некорректная длина имени');
  expect(result).toThrowError(expectation);
});

test('typeOfUnit', () => {
  function result() {
    new Bowerman('Edgar', 'archer');
  }
  const expectation = new Error('Некорректный тип юнита');
  expect(result).toThrowError(expectation);
});

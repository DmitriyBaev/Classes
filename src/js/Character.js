export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Некорректная длина имени');
    }

    const typesOfUnits = ['bowerman', 'swordsman', 'magician', 'deamon', 'undead', 'zombie'];
    if (!typesOfUnits.includes(type.toLowerCase())) {
      throw new Error('Некорректный тип юнита');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}

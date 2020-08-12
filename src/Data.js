class Character {
  constructor(name, hp, attack, defense, speed) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
  }
}

const character1 = new Character("Jeff", 20, 100, 25, 500);
const character2 = new Character("Jane", 10, 50, 50, 250);
const character3 = new Character("John", 100, 20, 75, 30);
const character4 = new Character("Mike", 50, 300, 10, 150);
const character5 = new Character("George", 5, 8, 100, 10);
const character6 = new Character("Fluffy", 25, 300, 20, 100);
const character7 = new Character("Brian", 20, 100, 25, 500);
const character8 = new Character("Dude", 10, 50, 50, 250);
const character9 = new Character("Kyle", 100, 20, 75, 30);
const character10 = new Character("Stephanie", 50, 300, 10, 150);
const character11 = new Character("Pikachu", 5, 8, 100, 10);
const character12 = new Character("Dino", 25, 300, 20, 100);

export const characterArray = [
  character1,
  character2,
  character3,
  character4,
  character5,
  character6,
  character7,
  character8,
  character9,
  character10,
  character11,
  character12,
];

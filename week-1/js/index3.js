function character(name, hp, atk, defence, speed, counterRate) {
  this.name = name;
  this.hp = hp;
  this.atk = atk;
  this.defence = defence;
  this.speed = speed;
  this.counterRate = counterRate;
  this.attack = (target) => {
    const damage = Math.max(this.atk - target.defence, 0);
    target.hp -= Math.max(damage, 0);
    console.log(
      `${this.name} phang ${target.name} , gay ${damage} , mau ${target.name} con lai: ${target.hp}`
    );
    // xu ly target phan cong lai
    if (target.isAlive() && Math.random() < target.counterRate) {
      const counterDamge = Math.max(target.atk - this.defence, 0);
      this.hp -= Math.max(counterDamge, 0);
      console.log(
        `${target.name} phang lai ${this.name}, gay ${counterDamge}, mau của ${this.name} con lại ${this.hp}`
      );
    }
  };
  this.isAlive = () => {
    return this.hp > 0;
  };
}

const tom = new character("tom", 1000, 50, 25, 30, 0.5);
const jerry = new character("jerry", 500, 40, 25, 30, 0.2);

function battleGround(attacker, defender) {
  attacker.attack(defender);
  if (defender.isAlive() && attacker.isAlive()) {
    defender.attack(attacker);
  }
}

function battle(char1, char2) {
  let round = 1;
  while (char1.isAlive() && char2.isAlive()) {
    console.log(`Round thu: ${round}`);
    if (char1.speed > char2.speed) {
      battleGround(char1, char2);
    } else if (char2.speed > char1.speed) {
      battleGround(char2, char1);
    } else {
      if (Math.random() > 0.5) {
        battleGround(char1, char2);
      } else {
        battleGround(char2, char1);
      }
    }
    round++;
  }
  const winner = char1.isAlive() ? char1 : char2;
  console.log(`${winner.name} is wins !`);
  return winner;
}

battle(tom, jerry);

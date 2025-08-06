const tom = {
  name: "tom",
  hp: 1000,
  atk: 50,
  defense: 5,
  attack: function (target) {
    const damge = Math.max(this.atk - target.defense, 0);
    target.hp -= damge;
    console.log(
      `${this.name} tấn công ${target.name} , gây sát thương ${damge} máu còn lại ${target.hp}`
    );
  },
  isAlive() {
    return this.hp > 0;
  },
};

const jerry = {
  name: "jerry",
  hp: 500,
  atk: 30,
  defense: 20,
  attack: function (target) {
    const damge = Math.max(this.atk - target.defense, 0);
    target.hp -= damge;
    console.log(
      `${this.name} tấn công ${target.name} , gây sát thương ${damge} máu còn lại ${target.hp}`
    );
  },
  isAlive() {
    return this.hp > 0;
  },
};
let round = 1;
while (tom.isAlive() && jerry.isAlive()) {
  console.log(`Round thứ: ${round}`);
  if (round % 2 == 0) {
    jerry.attack(tom);
  } else {
    tom.attack(jerry);
  }
  round++;
}
if(tom.isAlive()){
  console.log('Tom win !');
}else{
  console.log("jerry win");
}

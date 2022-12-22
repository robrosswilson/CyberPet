class Pet {
    constructor(hunger, fatigue, happiness) {
      this.name = "";
      this.hunger = hunger;
      this.fatigue = fatigue;
      this.happiness = happiness;
      this.isAlive = true;
    }
  
    chooseName(name) {
      this.name = name;
    }
  
    eat() {
      this.hunger -= 10;
      if (this.hunger < 0) {
        this.hunger = 0;
      }
    }
  
    sleep() {
      this.fatigue -= 10;
      if (this.fatigue < 0) {
        this.fatigue = 0;
      }
    }
  
    play() {
      this.happiness += 10;
      if (this.happiness > 100) {
        this.happiness = 100;
      }
    }
  
    checkHealth() {
      if (this.hunger < 20 || this.fatigue > 80 || this.happiness < 20) {
        this.isAlive = false;
      }
    }
  }
  
  class Sheep extends Pet {
    constructor(hunger, fatigue, happiness, wool) {
      super(hunger, fatigue, happiness);
      this.wool = wool;
    }
  
    shear() {
      this.wool -= 10;
      if (this.wool < 0) {
        this.wool = 0;
      }
    }
  }
  
  class Horse extends Pet {
    constructor(hunger, fatigue, happiness, speed) {
      super(hunger, fatigue, happiness);
      this.speed = speed;
    }
  
    race() {
      this.speed += 10;
      if (this.speed > 100) {
        this.speed = 100;
      }
    }
  }
  
  const mySheep = new Sheep(50, 50, 50, 100);
  const myHorse = new Horse(50, 50, 50, 50);
  
  // Choose the name of the pets
  mySheep.chooseName("Baa-Baa");
  myHorse.chooseName("Thunder");
  
  console.log(mySheep.name + " is a sheep with " + mySheep.wool + " units of wool.");
  console.log(myHorse.name + " is a horse with a speed of " + myHorse.speed + ".");
  
  mySheep.eat();
  myHorse.sleep();
  
  console.log(mySheep.name + "'s hunger is now at " + mySheep.hunger + ".");
  console.log(myHorse.name + "'s fatigue is now at " + myHorse.fatigue + ".");
  
  // Check the health of the pets
  mySheep.checkHealth();
  myHorse.checkHealth();
  
  console.log(mySheep.name + " is alive: " + mySheep.isAlive);
  console.log(myHorse.name + " is alive: " + myHorse.isAlive);

  setInterval(gameLoop, 1000*10)
  clearInterval()

  function gameLoop() {
    let time = 0;
    while (mySheep.isAlive && myHorse.isAlive) {
      console.log("Time: " + time);
      console.log(mySheep.name + "'s hunger: " + mySheep.hunger);
      console.log(myHorse.name + "'s fatigue: " + myHorse.fatigue);
      console.log(mySheep.name + "'s happiness: " + mySheep.happiness);
      console.log(myHorse.name + "'s speed: " + myHorse.speed);
  
      mySheep.hunger += 5;
      myHorse.fatigue += 5;
      mySheep.happiness -= 5;
      myHorse.speed -= 5;
  
      time++;
  
      mySheep.checkHealth();
      myHorse.checkHealth();
    }
  
    console.log("Game over!");
  }
  
  gameLoop();


  const gameLoop = () => {
    if (petSheep.stillAlive){
        replenishStock(productCode)
    }
    else if (quantity > 100) {
        reducePrice(productCode, originalPrice)
    }
    else {
        console.log("Don't order stock")
    }
}
checkStock(345678, 200, 100)


// // Create a game loop
// // Doesn't work if petSheep not selected (commented out)

// const gameLoop = () => {
//   if (petSheep.stillAlive){
//     console.log(`${petSheep.name}'s hunger level is: ${petSheep.hunger}`);
//     console.log(`${petSheep.name}'s fatigue level is: ${petSheep.fatigue}`);
//     console.log(`${petSheep.name}'s happiness level is: ${petSheep.happiness}`);
//     console.log(`${petSheep.name}'s wool length is: ${petSheep.woolLength} units`);

//     petSheep.hunger += 5
//     petSheep.fatigue += 5
//     petSheep.happiness -= 5
//     petSheep.woolLength +=5

//     petSheep.checkIfAlive()
//   }
//   else if (petHorse.stillAlive){
//       console.log(`${petHorse.name}'s hunger level is: ${petHorse.hunger}`);
//       console.log(`${petHorse.name}'s fatigue level is: ${petHorse.fatigue}`);
//       console.log(`${petHorse.name}'s happiness level is: ${petHorse.happiness}`);
//       console.log(`${petHorse.name}'s horse shoe health level is: ${petHorse.horseShoeHealth}`);
  
//       petHorse.hunger += 5
//       petHorse.fatigue += 5
//       petHorse.happiness -= 5
//       petHorse.horseShoeHealth -=5
  
//       petHorse.checkIfAlive()
//   }
//   else {
//     console.log("GAME OVER!")
//     // alert("GAME OVER! Your pet is dead!")
//     clearInterval(intervalTimer)
//   }
// }

// intervalTimer = setInterval(gameLoop, 1000)
// Base Pet/Generic Class 

class basePet {
    constructor(hunger, fatigue, happiness) {
      this.name = "";
      this.hunger = hunger;
      this.fatigue = fatigue;
      this.happiness = happiness;
      this.stillAlive = true;
    }


// Lets player choose name (may need some tweaking)

    chooseName(name) {
      this.name = name;
    }


// Basics functions for eating/sleeping/playing (subject to change)

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



// Basic function to see whether the pet is still alive (can add in quirks here maybe?)
// Need a statment to end the game! (if dead => end game)

    checkIfAlive() {
      if (this.hunger >= 100 || this.fatigue >= 100 || this.happiness <= 0) {
        this.stillAlive = false;
      }
    }
  }





// // Extended class for sheep, Quirk = Wool length
// // ask jenny how we can combine a user input for pet name into the class

  class Sheep extends basePet {
    constructor(hunger, fatigue, happiness, woolLength) {
      super(hunger, fatigue, happiness);
      this.woolLength = woolLength;
    }
  
    sheerWool() {
      this.woolLength -= 20;
      if (this.woolLength < 0) {
        this.woolLength = 0;
      }
    }

    checkIfAliveSheep () {
      if (this.woolLength >= 100){
        this.stillAlive = false;
      }
    }
  }

const petSheep = new Sheep(50, 50, 50, 60);

petSheep.chooseName("sheep-name");


// // // Extended class for Horse, Quirk = Horse shoe health

  class Horse extends basePet {
    constructor(hunger, fatigue, happiness, horseShoeHealth) {
      super(hunger, fatigue, happiness);
      this.horseShoeHealth = horseShoeHealth;
    }
  
    changeHorseShoe() {
      this.horseShoeHealth += 20;
      if (this.horseShoeHealth > 100) {
        this.horseShoeHealth = 100;
      }
    }

    checkIfAliveHorse () {
      if (this.horseShoeHealth <= 0){
        this.stillAlive = false;
      }
    }
  }

const petHorse = new Horse(50, 50, 50, 50);

petHorse.chooseName("horse-name");




// // first game loop for just the sheep

const gameLoopSheep = () => {
  if (petSheep.stillAlive){
    console.log(`${petSheep.name}'s hunger level is: ${petSheep.hunger}`);
    // console.log(`${petSheep.name}'s fatigue level is: ${petSheep.fatigue}`);
    // console.log(`${petSheep.name}'s happiness level is: ${petSheep.happiness}`);
    // console.log(`${petSheep.name}'s wool length is: ${petSheep.woolLength} units`);

    petSheep.hunger += 1
    // petSheep.fatigue += Math.floor(Math.random()*10)+1
    // petSheep.happiness -= Math.floor(Math.random()*10)+1
    // petSheep.woolLength += Math.floor(Math.random()*10)+1

    petSheep.checkIfAlive()
    petSheep.checkIfAliveSheep()
  }
  else {
    // console.log("GAME OVER! Pet sheep is dead!")
    // window.alert("GAME OVER! Your pet is dead!")
    clearInterval(intervalTimerIndividual)
  }
}


// // Then game loop for just the horse

const gameLoopHorse = () => {
  if (petHorse.stillAlive){
      console.log(`${petHorse.name}'s hunger level is: ${petHorse.hunger}`);
      console.log(`${petHorse.name}'s fatigue level is: ${petHorse.fatigue}`);
      console.log(`${petHorse.name}'s happiness level is: ${petHorse.happiness}`);
      console.log(`${petHorse.name}'s horse shoe health level is: ${petHorse.horseShoeHealth}`);
  
      petHorse.hunger += Math.floor(Math.random()*10)+1
      petHorse.fatigue += Math.floor(Math.random()*10)+1
      petHorse.happiness -= Math.floor(Math.random()*10)+1
      petHorse.horseShoeHealth -= Math.floor(Math.random()*10)+1
  
      petHorse.checkIfAlive()
      petHorse.checkIfAliveHorse()
  }
  else {
    console.log("GAME OVER! Pet Horse is dead!")
    // window.alert("GAME OVER! Your pet is dead!")
    clearInterval(intervalTimerIndividual)
  }
}


// // This is where the user input would affect, for setInterval(x,1000):
// // Whether x = gameLoopSheep or x = gameLoopHorse

intervalTimerIndividual = setInterval(gameLoopSheep, 1000*5)



// Playing about with player selection 
// Do we need an else to catch a wrong input

// const playerSelection = "sheep/horse";

// let IntervalTimerIndividual;

// if (playerSelection == "sheep") {
//   IntervalTimerIndividual = setInterval(gameLoopSheep, 1000);
// } else {
//   IntervalTimerIndividual = setInterval(gameLoopHorse, 1000);
// }

// if (basePet.animal == "sheep"){
//   IntervalTimerIndividual = setInterval(gameLoopSheep, 1000);
// }
// else (basePet.animal == "horse") {
//   IntervalTimerIndividual = setInterval(gameLoopHorse, 1000);
// }



// // Playing about with name selection 
// // Combine with Nash

// const nameSelection = "name-chosen-by player";

// petSheep.chooseName(nameSelection);
// petHorse.chooseName(nameSelection);



// // playing about with buttons in game loop

// const playerAction = "player-chooses-action-they-want"

// // in game loop:

// if (playerAction == "eat") {
//   petSheep.eat();
// } 
// else if (playerAction == "sleep") {
//   petSheep.sleep();
// } 
// else if (playerAction == "play") {
//   petSheep.play();
// } 
// else if (playerAction == "sheer wool") {
//   petSheep.sheerWool();
// }


// // What if player wants to pick multiple actions?

// const playerActions = ["eat", "play"];

// playerActions.forEach(action => {
//   if (action == "eat") {
//     petSheep.eat();
//   } 
//   else if (action == "sleep") {
//     petSheep.sleep();
//   } 
//   else if (action == "play") {
//     petSheep.play();
//   } 
//   else if (action == "sheer wool") {
//     petSheep.sheerWool();
//   }
// });


// // Could modify the game loop function to accept a parameter for the player's actions?

// const gameLoopSheep = (playerActions) => {
//   playerActions.forEach(action => {
//     if (action === "eat") {
//       petSheep.eat();
//     } 
//     else if (action === "sleep") {
//       petSheep.sleep();
//     } 
//     else if (action === "play") {
//       petSheep.play();
//     } 
//     else if (action === "sheer wool") {
//       petSheep.sheerWool();
//     }
//   });
// }

// const IntervalTimerIndividual = setInterval(() => {
//   gameLoopSheep(["eat", "play"]);
// }, 1000);

// // or

// const runGameLoopSheep = (playerActions) => {
//   gameLoopSheep(playerActions);
// };

// const IntervalTimerIndividual = setInterval(runGameLoopSheep, 1000, ["eat", "play"]);
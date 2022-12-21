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


// Extended class for sheep, need to consider the quirk
// ask jenny how we can combine a user input for pet name into the class

  class Sheep extends Pet {
    constructor(hunger, fatigue, happiness, woolLength) {
      super(hunger, fatigue, happiness);
      this.woolLength = woolLength;
    }
  
    sheerWool() {
      this.woolLength -= 20;
      if (this.xxx < 0) {
        this.xxx = 0;
      }
    }
  }

const petSheep = new Sheep(50, 50, 50, 50);

petSheep.chooseName("sheep-name");


// Extended class for Horse, need to consider the quirk
// code in "horse shoe health", apply new horse shoe to reset

  class Horse extends Pet {
    constructor(hunger, fatigue, happiness, horseShoeHealth) {
      super(hunger, fatigue, happiness);
      this.horseShoeHealth = horseShoeHealth;
    }
  
    changeHorseShoe() {
      this.yyy += 20;
      if (this.yyy > 100) {
        this.yyy = 100;
      }
    }
  }

const petHorse = new Horse(50, 50, 50, 100);

petHorse.chooseName("horse-name");
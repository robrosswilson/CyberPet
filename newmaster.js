class BasePet {
    constructor(name, animal, hunger, fatigue, happiness) {
      this.name = name;
      this.animal = animal
      this.hunger = hunger;
      this.fatigue = fatigue;
      this.happiness = happiness;
      this.stillAlive = true;
    }
};


// Choose name input

    submit.addEventListener("click", () =>{
        window.petName = input.value;
        placeholder.textContent = `Your pet's name is ${petName}! What a fantastic name! Is it a sheep or a horse? Those are your options`;
        submit.style.display = "none";
        input.style.display = "none";
        sheep.style.visibility = "visible";
        horse.style.visibility = "visible";
        window.pet = new BasePet(petName, "", 50, 50, 50);
    });


// If you choose sheep:

    sheep.addEventListener("click", () =>{
        placeholder.textContent = `${petName} the sheep!? Baaa-utiful!`;
        feed.style.visibility = "visible";
        sleep.style.visibility = "visible";
        play.style.visibility = "visible";
        shear.style.visibility = "visible";
        sheep.style.visibility = "hidden";
        horse.style.visibility = "hidden";
        window.BasePet(petName, "Sheep", 50, 50, 50);
        window.blahblah = "Sheep";

        class Sheep extends BasePet {
            constructor(name, animal, hunger, fatigue, happiness, woolLength) {
              super(name, animal, hunger, fatigue, happiness);
              this.woolLength = woolLength;
            }
        
            checkIfAliveSheep () {
              if (this.woolLength >= 100 || this.hunger >= 100 || this.fatigue >= 100 || this.happiness <= 0){
                this.stillAlive = false;
              }
            }
          }
        
        const petSheep = new Sheep(petName, "Sheep", 50, 50, 50, 50);
    });


// If you choose horse:

    horse.addEventListener("click", () =>{
        placeholder.textContent = `Is ${petName} a sheep? Neigh, it's a horse!!!`;
        feed.style.visibility = "visible";
        sleep.style.visibility = "visible";
        play.style.visibility = "visible";
        change.style.visibility = "visible";
        sheep.style.visibility = "hidden";
        horse.style.visibility = "hidden";
        window.BasePet(petName, "Horse", 0, 0, 100);
        window.blahblah = "Horse"

        class Horse extends BasePet {
            constructor(name, animal, hunger, fatigue, happiness, horseShoeHealth) {
              super(name, animal, hunger, fatigue, happiness);
              this.horseShoeHealth = horseShoeHealth;
            }
        
            checkIfAliveHorse () {
              if (this.horseShoeHealth <= 0 || this.hunger >= 100 || this.fatigue >= 100 || this.happiness <= 0){
                this.stillAlive = false;
              }
            }
          }
        
        const petHorse = new Horse(petName, "Horse", 50, 50, 50, 50);
    });







// Game loop for sheep

const gameLoopSheep = () => {
  if (petSheep.stillAlive){
    console.log(`${petSheep.name}'s hunger level is: ${petSheep.hunger}`);
    console.log(`${petSheep.name}'s fatigue level is: ${petSheep.fatigue}`);
    console.log(`${petSheep.name}'s happiness level is: ${petSheep.happiness}`);
    console.log(`${petSheep.name}'s wool length is: ${petSheep.woolLength} units`);

    petSheep.hunger += Math.floor(Math.random()*10)+1
    petSheep.fatigue += Math.floor(Math.random()*10)+1
    petSheep.happiness -= Math.floor(Math.random()*10)+1
    petSheep.woolLength += Math.floor(Math.random()*10)+1

    petSheep.checkIfAliveSheep()
  }
  else {
    console.log("GAME OVER! Pet sheep is dead!")
    // window.alert("GAME OVER! Your pet is dead!")
    clearInterval(intervalTimerIndividual)
  }
}


// Game Loop for Horse

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

      petHorse.checkIfAliveHorse()
  }
  else {
    console.log("GAME OVER! Pet Horse is dead!")
    // window.alert("GAME OVER! Your pet is dead!")
    clearInterval(intervalTimerIndividual)
  }
}


// Running the gameloop for you chosen pet
if (blahblah == "Sheep"){
    IntervalTimerIndividual = setInterval(gameLoopSheep, 1000);
  }
else {
    IntervalTimerIndividual = setInterval(gameLoopHorse, 1000);
  }



const feed = document.getElementById("feed")
const play = document.getElementById("play")
const sleep = document.getElementById("sleep")
const shear = document.getElementById("shear")
const change = document.getElementById("change")

feed.addEventListener('click', () => {
  if (blahblah = "Sheep"){
    petSheep.hunger -= Math.floor(Math.random()*10)+5;
  }
  else {
    petHorse.hunger -= Math.floor(Math.random()*10)+5;
  };


  const reloadTime = Math.floor(Math.random() * 5) + 1;

  feed.disabled = true;

  setTimeout(() => {
    feed.disabled = false;
  }, reloadTime * 1000);
});


play.addEventListener('click', () => {
    if (blahblah = "Sheep"){
      petSheep.happiness += Math.floor(Math.random()*10)+5;
    }
    else {
      petHorse.happiness += Math.floor(Math.random()*10)+5;
    };
  
  
    const reloadTime = Math.floor(Math.random() * 5) + 1;
  
    play.disabled = true;
  
    setTimeout(() => {
      play.disabled = false;
    }, reloadTime * 1000);
  });


sleep.addEventListener('click', () => {
    if (blahblah = "Sheep"){
      petSheep.fatigue -= Math.floor(Math.random()*10)+5;
    }
    else {
      petHorse.fatigue -= Math.floor(Math.random()*10)+5;
    };
  
  
    const reloadTime = Math.floor(Math.random() * 5) + 1;
  
    sleep.disabled = true;
  
    setTimeout(() => {
      sleep.disabled = false;
    }, reloadTime * 1000);
  });


shear.addEventListener('click', () => {
    petSheep.woolLength -= Math.floor(Math.random() * 10) + 5
  
    const reloadTime = Math.floor(Math.random() * 5) + 1;
  
    shear.disabled = true;
  
    setTimeout(() => {
      shear.disabled = false;
    }, reloadTime * 1000);
});


  change.addEventListener('click', () => {
    
    petHorse.horseShoeHealth += Math.floor(Math.random()*10)+5;

    const reloadTime = Math.floor(Math.random() * 5) + 1;
  
    change.disabled = true;
  
    setTimeout(() => {
      change.disabled = false;
    }, reloadTime * 1000);
  });
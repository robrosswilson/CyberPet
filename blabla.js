// let value = 0;

// setInterval(() => {
//   value += 1;
//   console.log(value);

//   if (value >= 10) {
//     // End the game here
//   }
// }, 1000);

// const button = document.querySelector('#button');

// eatHorse.addEventListener('click', () => {
//   petHorse.hunger -= 1;
//   petSheep.hunger -= 1;

//   // Generate a random number between 1 and 5
//   const reloadTime = Math.floor(Math.random() * 5) + 1;

//   // Disable the button and set a timeout to enable it again after the random interval
//   button.disabled = true;
//   setTimeout(() => {
//     button.disabled = false;
//   }, reloadTime * 1000);
// });

// eatSheep



const feed = document.getElementById("feed")
const play = document.getElementById("play")
const sleep = document.getElementById("sleep")
const shear = document.getElementById("shear")
const change = document.getElementById("change")

feed.addEventListener('click', () => {
  if (this.animal = "Sheep"){
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

const cars = ["BMW", "Audi", "Peugeot", "Mercedes", "Ford", "Honda", "Opel"];
const color = ["blue", "grey", "orange", "black", "white", "red", "green"];
const speed = ["-2", 1, 2, 3, 4, 5];

let randCar = cars[Math.floor(Math.random() * cars.length)];
let randColor = color[Math.floor(Math.random() * color.length)];
let randSpeed = speed[Math.floor(Math.random() * speed.length)];

const fastOrSlow = () => {
  if (randSpeed <= 3 && randSpeed >= 0) {
    return "fast";
  } else if (randSpeed > 3) {
    return "slow";
  } else {
    return "reversing";
  }
};

console.log(
  `You have a ${randColor} ${randCar} and does 0 to 60mph in ${randSpeed} seconds ! Your car is ` +
    fastOrSlow()
);

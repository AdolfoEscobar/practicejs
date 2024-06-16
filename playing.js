//Variables var, let, const

var myName = 'Adolfo';
console.log(myName);


let changeMe = true;
changeMe = false;
console.log(changeMe);

const entree = 'Enchiladas';
console.log(entree);

//Mathematical Assignment Operators

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11
quarterMe /= 4;


// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

//The Increment and Decrement Operator

let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++;
lostDollar--;


//String concatenation

let favoriteAnimal = 'Cat';
console.log('My favorite animal: ' + favoriteAnimal);

//String interpolation

const myPName = 'Adolfo';
const myCity = 'Delicias'
console.log(`My name is ${myPName}. My favorite city is ${myCity}`)

//typeof operator

let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);


const kelvin = 333;
//constant Kelvin is 293
const celsius = kelvin - 273;
//constant celsius is 273 degress less than Kelvin
const fahrenheit = celsius * (9/5) + 32
//formula to fahrenheit
const roundedFahrenheit = Math.floor(fahrenheit);
//fahrenheit is round down
const newton = celsius * (33/100);
const roundedNewton = Math.floor(newton);
console.log(`The temperature is ${roundedFahrenheit} degrees Fahrenheit`);
console.log(`The temperature is ${roundedNewton} degrees Newton`);


const myAge = 20;
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears *= 4;

console.log(earlyYears, laterYears);

const MyAgeInDogYears = earlyYears + laterYears;
const myNamed = 'Adolfo';
const myLowername = myNamed.toLowerCase();

console.log(myLowername);
console.log(`My name is ${myNamed}. I am ${myAge} years old in human years which is ${MyAgeInDogYears} years old in dog years.`)

// CONDITIONAL STATEMENTS

//If Statement

let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
}else{
  console.log('Time to wait for a sale.');
}

/*
When writing conditional statements, sometimes we need to use different types of operators to compare values. These operators are called comparison operators.

Here is a list of some handy comparison operators and their syntax:

Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
Is equal to: ===
Is not equal to: !==

*/
let hungerLevel = 7;

if(hungerLevel > 7){
  console.log('Time to eat!');
}else{
  console.log('We can eat later!');
}

/*
Working with conditionals means that we will be using booleans, true or false values. In JavaScript, there are operators that work with boolean values known as logical operators. We can use logical operators to add more sophisticated logic to our conditionals. There are three logical operators:

the and operator (&&)
the or operator (||)
the not operator, otherwise known as the bang operator (!)
*/

//Logical Operators

let mood = 'sleepy';
let tirednessLevel = 6;
if(mood === 'sleepy' && tirednessLevel > 8){
   console.log('time to sleep');
}else{
  console.log('not bed time yet');
}
//CONDITIONAL STATEMENTS
//Truthy and Falsy

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

//CONDITIONAL STATEMENTS
//Truthy and Falsy Assignment

let tool = '';
tool = 'marker';
// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

//CONDITIONAL STATEMENTS
//Ternary Operator

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.')
: console.log('You will not need a key to open the door.');


let isCorrect = true;

isCorrect ? console.log('Correct!')
: console.log('Incorrect!');

let favoritePhrases = 'Love That!';

favoritePhrases === 'Love That!' ? console.log('I love that!')
: console.log("I don't love that!");

//Else If Statements

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
}else if (season === 'winter'){
  console.log('It\'s winter! Everything is covered in snow.');
}else if (season === 'fall'){
  console.log('It\'s fall! Leaves are falling!');
}else if (season === 'summer'){
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}

//The switch keyword

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}


//Magic Eight Ball

var userName = '';

userName === '' ? console.log('Hello!.')
: console.log(`Hello ${userName}!`);

userName = 'Adolfo';
var userQuestion = 'How is my future?';
console.log(`${userQuestion} ${userName} Ask`);

var randomNumber = Math.floor(Math.random() * 8);

var eightBall = '';

switch(randomNumber){
  case 0 :
    eightBall = 'Bad';
    break;
  case 1 :
    eightBall = 'It is certain';
    break;
  case 2 :
    eightBall = 'It is decidedly so';
    break;
  case 3 :
    eightBall = 'Reply hazy try again';
    break;
  case 4 :
    eightBall = 'Cannot predict now';
    break;
  case 5 :
    eightBall = 'Do not count on it';
    break;
  case 6 :
    eightBall = 'My sources say no';
    break;
  case 7 :
    eightBall = 'Outlook not so good';
    break;
  case 8 :
    eightBall = 'Signs point to yes';
    break;
  default:
    break;
}

console.log(eightBall);

//Race Day

let raceNumber = Math.floor(Math.random() * 1000);
var runnerEarly = Boolean;
var runnerAge = Number;

runnerAge = 20;
runnerEarly = false;

if(runnerAge >= 18 && runnerEarly === true ){
  raceNumber += 1000;
}

if(runnerAge > 18 && runnerEarly === true ){
  console.log(`Your race start at 9:30 am ${raceNumber}`);
}else if(runnerAge > 18 && runnerEarly === false){
  console.log(`Your race start at 11:00 am ${raceNumber}`);
}else if(runnerAge < 18){
  console.log(`Your race start at 12:30 am ${raceNumber}`);
}else{
  console.log('See the registration desk');
}

//Function Declarations

function getReminder(){
  console.log('Water the plants');
}
function greetInSpanish(){
  console.log('Buenas tardes');
}

//Calling a function

function sayThanks(){
  console.log('Thank you for your purchase! We appreciate your business.');
}
sayThanks();
sayThanks();
sayThanks();

//Parameters

function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}

sayThanks('Cole');

//Default Parameters

function makeShoppingList(item1 ='milk', item2='bread', item3='eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

makeShoppingList();

//Return

function monitorCount(rows, columns){
  return rows * columns;
}
const numOfMonitors = monitorCount(5,4);

console.log(numOfMonitors);

//Helper functions

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns){
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5,4);

console.log(totalCost);

//Function Expressions

const plantNeedsWater = function(day){
  if(day === 'Wednesday'){
    return true;
  }else{
    return false;
  }
}

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));

//Arrow functions

/*
Arrow functions remove the need to type out the keyword function 
every time you need to create a function. 
Instead, you first include the parameters inside the ( ) 
and then add an arrow => that points to the function body 
surrounded in { } like this:
*/

const plantsNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};


//Concise Body Arrow Functions

const plantsNeedWater = day => day === 'Wednesday' ? true : false;

console.log(plantsNeedWater('Wednesday'));

//Blocks and Scope

const city = 'New York City';
function logCitySkyline(){
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in '
  + city;
}
console.log(logCitySkyline());

//Global Scope

var satellite = 'The Moon';
var galaxy = 'The Milky Way';
var stars = 'North Star';

const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky());

//Block Scope

/*
const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // Prints "blue"
};

logSkyColor(); // Prints "blue"
console.log(color); // throws a ReferenceError
*/

//Scope Pollution (Bad practice)

const satellitel = 'The Moon';
const galaxys = 'The Milky Way';
let starsx = 'North Star';

const callsMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellitel + ', ' + starsx + ', ' + galaxys;
};
console.log(callsMyNightSky());
console.log(starsx);

//Practice Good Scoping (Modular)

const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if(region === 'The Arctic'){
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves();

//ARRAYS
//Create an Array

const hobbies = ['Soccer', 'C++', 'Software'];
console.log(hobbies);

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

//Accessing Elements
var listItem = (famousSayings[0]);
console.log(listItem);

console.log(famousSayings[2]);
console.log(famousSayings[3]);

//Update Elements

let grocerysList = ['bread', 'tomatoes', 'milk'];

grocerysList[1] =  'avocados';

//Arrays with let and const

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';

console.log(condiments);

condiments = ['Mayo'];

console.log(condiments);

utensils[3] = 'Spoon';

console.log(utensils);

//The .length property

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);

//The .push() Method

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('new1', 'new2');

console.log(chores);

//The .pop() Method

const removed = chores.pop();

console.log(chores);

//More Array Methods

/*

Some arrays methods that are available to JavaScript 
developers include: .join(), .slice(), .splice(), .shift(), 
.unshift(), and .concat() amongst many others. 
Using these built-in methods makes 
it easier to do some common tasks when working with arrays.

*/

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);

groceryList.unshift('popcorn');

console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);

//Arrays and Functions

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

function removeElement(newArr){
  newArr.pop();
}

removeElement(concept);

console.log(concept);

//Nested Arrays

const numberClusters = [[1, 2], [3, 4], [5, 6]];

const target0 = numberClusters[0];
const target1 = numberClusters[1];
const target2 = numberClusters[2];
const targetnumber5 = numberClusters[2][0];

console.log(target0);
console.log(target1);
console.log(target2);
console.log(targetnumber5);

//Loops

var vacationSpots = ['Colombia','Alemania','España'];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

//The For Loop

for(let i = 5; i <= 10; i++){
  console.log(i);
}

//Looping in Reverse

// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}

//Looping through Arrays

for(let i = 0; i < vacationSpots.length; i++){
  console.log(`I would love to visit ${vacationSpots[i]}`);
}

//Nested Loops

var bobsFollowers = ['Elisa','Pedro','Juan','Ashley'];
var tinasFollowers = ['Pedro','Elisa','David'];
var mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++){
  for(let j = 0; j < tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

console.log(mutualFollowers)

//The While Loop

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard = 'diamond'
console.log(currentCard);
while(currentCard!='spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

//Do...While Statements

var cupsOfSugarNeeded = 2;
var cupsAdded = 0;

do{
  cupsAdded++
}while(cupsAdded < cupsOfSugarNeeded);

console.log(cupsAdded);

//The break Keyword

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for(let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.");

//ITERATORS

//HIGHER-ORDER FUNCTIONS


// Functions as Data
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

isTwoPlusTwo();
console.log(isTwoPlusTwo.name);

// Functions as Parameters

const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  var checkA = val + 2;
  var checkB = func(val);
  if(checkA === checkB){
    return func(val)
  }else{
    return 'inconsistent results';
  }
}

console.log(checkConsistentOutput(addTwo, 2));

//Introduction to Iterators

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

//The .forEach() Method

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruit =>{
  console.log(`I want to eat a ${fruit}`);
})


//The .map() Method

//.map() works in a similar manner to .forEach()
//the major difference is that .map() returns a new array.

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below

const smallNumbers = bigNumbers.map(bigNumber => bigNumber/100);

console.log(smallNumbers)

//The .filter() Method

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

const smallsNumbers = randomNumbers.filter(num => {
  return num < 250
});

console.log(smallsNumbers);


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})

console.log(longFavoriteWords);


//The .findIndex() Method

const animales = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animales.findIndex(animal => {
  return animal === 'elephant';
});

console.log(foundAnimal);

const startsWithS = animales.findIndex(animal => {
  return animal[0] === 's';
})

console.log(startsWithS);


//The .reduce() Method

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) =>{
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
},10);
console.log(newSum);

//Iterator Documentation

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some((word) => {
  return word.length < 6;
}));

const interestingWords = words.filter((word) =>{
  return word.length > 5
});


console.log(interestingWords.every((word) => {
  return word.length > 5;
}));


//Choose the Right Iterator

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);

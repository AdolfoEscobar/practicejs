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
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
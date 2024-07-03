let myAge = 20;
//myAge stores a value representing a human's age
var earlyYears = 2;
//earlyYears stores a value that can be changed representing the early years of a dog's life
earlyYears *= 10.5;
var laterYears = myAge - 2;
//laterYears will be used to calculate the remaining years of the dog's life, minus the first 2 years (which were already acccounted for)
laterYears *= 4;
//Multiply laterYears by 4 and reassign it to the same variable
console.log(earlyYears + " " + laterYears);
let myAgeInDogYears = earlyYears + laterYears;
//This value is the dog years equivalent of a person's age
var myName = "Thushar".toLowerCase();
//myName contains the person's name converted to lowercase using the String method .toLowerCase()
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
//Final print statement
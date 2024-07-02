//kelvin is a constant variable that contains the value 293
const kelvin = 0;
var celsius = kelvin - 273;
//celsius contains the celsius equivalent temperature of the value in kelvin
var fahrenheit = celsius * (9 / 5) + 32;
//fahrenheit will calculate the fahrenheit temperature from the value in celsius and applying it in the formula
fahrenheit = Math.floor(fahrenheit);
//Round down the fahrenheit value and store it in the same  variable
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

var newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);

const math = require("./math");

const x = 20;
const y = 5;

console.log("--- Демонстрація роботи калькулятора ---");
console.log(`Числа для обчислень: x = ${x}, y = ${y}\n`);

console.log("Додавання (x + y) =", math.add(x, y));
console.log("Віднімання (x - y) =", math.subtract(x, y));
console.log("Множення (x * y) =", math.multiply(x, y));
console.log("Ділення (x / y) =", math.divide(x, y));
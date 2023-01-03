const factorialOfNumber = require("../factorial/index");
const ratioOfTwoNumbers = require("../ratio/index");

function ratioAndFactorial(num1, num2, num3) {
  const factorial = factorialOfNumber(num3);
  const ratio = ratioOfTwoNumbers(num1, num2);
  //   return {
  //     ratio: ratio,
  //     factorial: fact,
  //   };
  return { ratio, factorial };
}

console.log(ratioAndFactorial(5, 10, 5));
module.exports = ratioAndFactorial;

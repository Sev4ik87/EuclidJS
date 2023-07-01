'use strict'

function euclideAlgorithm(a, b) {
  if (b === 0) {
    return a;
  } else {
    return euclideAlgorithm(b, a % b);
  }
}

let num1 = 48;
let num2 = 36;
let result = euclideAlgorithm(num1, num2);
console.log("Наибольший общий делитель:", result);
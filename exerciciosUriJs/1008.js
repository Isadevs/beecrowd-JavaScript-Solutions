
var input = require("fs").readFileSync("stdin", "utf-8");

var valores = input.split("\n")

var numFuncionario = parseInt(valores.shift())
var numHorasMes = parseInt(valores.shift())
var salHoraTrabalhada = parseFloat(valores.shift())

var salario = parseFloat(numHorasMes*salHoraTrabalhada)

console.log("NUMBER = " + numFuncionario)
console.log("SALARY = U$ " + salario.toFixed(2))
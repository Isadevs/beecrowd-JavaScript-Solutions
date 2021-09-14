var input = require("fs").readFileSync("stdin", "utf-8");


let valorEntrada = input.split("\n")

let horaTotal = valorEntrada[0]
let distanciaKM =  valorEntrada[1]

let totalCombustivel = horaTotal*distanciaKM/12

console.log(totalCombustivel.toFixed(3))




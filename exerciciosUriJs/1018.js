let input = require("fs").readFileSync("stdin", "utf-8");

let valor = parseInt(input)

console.log(valor)

const qtdNotas100 = parseInt(valor / 100);
console.log(`${qtdNotas100} nota(s) de R$ ${100},00`)
valor = valor % 100

const qtdNotas50 = parseInt (valor / 50);
console.log(`${qtdNotas50} nota(s) de R$ ${50},00`)
valor = valor % 50

const qtdNotas20 = parseInt(valor / 20);
console.log(`${qtdNotas20} nota(s) de R$ ${20},00`)
valor = valor % 20

const qtdNotas10 = parseInt(valor / 10);
console.log(`${qtdNotas10} nota(s) de R$ ${10},00`)
valor = valor % 10

const qtdNotas = parseInt(valor / 5);
console.log(`${qtdNotas} nota(s) de R$ ${5},00`)
valor = valor % 5

const qtdNotas2 = parseInt(valor / 2);
console.log(`${qtdNotas2} nota(s) de R$ ${2},00`)
valor = valor % 2

const qtdNotas1 = parseInt(valor / 1);
console.log(`${qtdNotas1} nota(s) de R$ ${1},00`)
valor = valor % 1
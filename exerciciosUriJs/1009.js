var input = require("fs").readFileSync("stdin", "utf-8");
//separando as string em substrings retornando-as como matris
var valores = input.split("\n")

// como os valores estao em string é preciso transformalos em number
// O método shift()remove o primeiro elemento de um array e retorna 
//esse elemento para fora do array.

var nomeVendedor  = (valores.shift())
var salarioFixo = parseFloat(valores.shift())
var valorVendaFeita = parseFloat(valores.shift())

var salarioTotal = (valorVendaFeita * 0.15) + salarioFixo

var salarioTotal = console.log(`TOTAL = R$ ${salarioTotal.toFixed(2)}`)

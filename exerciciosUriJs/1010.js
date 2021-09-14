var input = require("fs").readFileSync("stdin", "utf-8");

//separando as string em substrings retornando-as como matriz

var valores = input.split("\n")

// como os valores estao em string é preciso transformalos em number
// O método shift()remove o primeiro elemento de um array e retorna 
//esse elemento para fora do array.

var A = [codigoPa, quantidadePa, valorPa] = valores.shift().split(" ")
var B = [codigoPb, quantidadePb, valorPb] = valores.shift().split(" ")

var valoraPagar = ((quantidadePa*valorPa)+(quantidadePb*valorPb))

console.log(`VALOR A PAGAR: R$ ${valoraPagar.toFixed(2)}`)


/*var valoraPagar = parseFloat(quantidadePa*valorPa)+(quantidadePb*valorPb)
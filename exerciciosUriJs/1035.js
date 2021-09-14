var input = require("fs").readFileSync("stdin", "utf-8");


var valores = input.split(" ")

var A = parseInt(valores[0])
var B = parseInt(valores[1])
var C = parseInt(valores[2])
var D = parseInt(valores[3])

let soma1 = A + B
let soma2 = C + D

const condition1 = B > C && D > A ? true : false
const condition2 = soma2 > soma1 ? true : false
const condition3 = soma2 >= 0 ? true : false
const condition4 = (A % 2 == 0) ? true : false

if (condition1 && condition2 && condition3 & condition4){
    console.log('Valores aceitos')
} else{
    console.log('Valores nao aceitos')
}
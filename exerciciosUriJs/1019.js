var input = require("fs").readFileSync("stdin", "utf-8");

/*Leia um valor inteiro, que é a duração em segundos de um determinado evento em uma fábrica, e informe-o expresso em horas: minutos: segundos.

Entrada
O ficheiro de entrada contém um número inteiro N .

Resultado
Imprime o tempo de leitura no arquivo de entrada (segundos) convertido em horas: minutos: segundos como no exemplo a seguir.*/

var separar = input.split("\n")
var div = parseInt(separar.shift())

let hr = Math.ceil(div / 3600)
let totalsec = Math.ceil(div % 3600)

console.log(totalsec)

let min = Math.ceil(div / 60)
let totamin = Math.ceil(div % 60)

console.log(min)






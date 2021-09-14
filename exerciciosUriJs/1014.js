var input = require("fs").readFileSync("stdin", "utf-8");

/*Calcule o consumo médio de um carro levando em consideração a distância total percorrida (em Km) e o total de combustível gasto (em litros).

Entrada
O arquivo de entrada contém dois valores: um valor inteiro X representando a distância total (em Km) e o segundo é um número de ponto flutuante Y  representando o total de combustível irradiado, com um dígito após o ponto decimal.

Resultado
Apresente um valor que represente o consumo médio de um carro com 3 dígitos após a vírgula, seguido da mensagem “km / l*/
var entrada = input.split('\n')

var x = parseInt(entrada[0])
var y = parseFloat(entrada[1])

var consumoMedio = x/y

console.log(`${consumoMedio.toFixed(3)} km/l`)
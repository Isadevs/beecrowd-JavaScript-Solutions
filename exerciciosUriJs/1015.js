var input = require("fs").readFileSync("stdin", "utf-8");

/*
Leia os quatro valores correspondentes aos eixos xey de dois pontos do plano, p1 (x1, y1) e p2 (x2, y2) e calcule a distância entre eles, mostrando quatro casas decimais após a vírgula, de acordo com a fórmula :

Distância = 

Entrada
O arquivo de entrada contém duas linhas de dados. O primeiro contém dois valores duplos:  x1 y1 e o segundo também contém dois valores duplos com um dígito após a vírgula decimal: x2 y2 .

Resultado
Calcule e imprima o valor da distância usando a fórmula fornecida, com 4 dígitos após o ponto decimal.

*/

var entrada = input.split("\n")

var [x1, y1] = entrada[0].split(" ")
var [x2, y2] = entrada[1].split(" ")

var distancia = (Math.pow(x2 - x1,2)) + (Math.pow(y2 - y1,2))
var distanciaTotal = Math.sqrt(distancia)

console.log(distanciaTotal.toFixed(4))




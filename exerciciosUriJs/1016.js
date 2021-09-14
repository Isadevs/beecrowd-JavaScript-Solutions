var input = require("fs").readFileSync("stdin", "utf-8");


/*Dois carros (X e Y) partem na mesma direção. O carro X sai com uma velocidade constante de 60 km / he o carro Y sai com uma velocidade constante de 90 km / h.

Em uma hora (60 minutos) o carro Y pode distanciar-se 30 quilômetros do carro X, ou seja, pode se afastar um quilômetro a cada 2 minutos.

Leia a distância (em km) e calcule quanto tempo leva (em minutos) para o carro Y percorrer essa distância em relação ao outro carro.

Entrada
O arquivo de entrada contém 1 valor inteiro.

Resultado
Imprima o tempo necessário seguido da mensagem "minutos" que significa minutos em português.*/

var entrada = input.split()

var carroxKm = 60  
var carroxKmh= 30


var distancia = parseInt(carroxKm*entrada/carroxKmh)

console.log(distancia + " minutos")






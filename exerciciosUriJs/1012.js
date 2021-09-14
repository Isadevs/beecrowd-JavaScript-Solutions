

var [A,B,C] = input.split(" ").map(item => parseFloat(item))
var pi = 3.14159

var areaTrianguloRetangulo = ((A*C)/2)
var areaCirculo = (pi* Math.pow(C, 2))
var areaTrapezio = (((A+B)*C)/2)
var areaQuadrado = B * B
var areaRetangulo = A*B

console.log("TRIANGULO: " + areaTrianguloRetangulo.toFixed(3))
console.log("CIRCULO: " + areaCirculo.toFixed(3))
console.log("TRAPEZIO: " + areaTrapezio.toFixed(3))
console.log("QUADRADO: " + areaQuadrado.toFixed(3))
console.log("RETANGULO: " + areaRetangulo.toFixed(3))



/*
a) a área do triângulo retângulo que tem base A e altura C.
b) a área do círculo do raio C. (pi = 3,14159)
c) a área do trapézio que tem A e B por base e C por altura.
d) a área do quadrado que tem o lado B.
e) a área do retângulo que tem os lados A e B
*/
var input = require("fs").readFileSync("stdin", "utf-8");

//separando as string em substrings retornando-as como matriz

var raio = parseFloat(input)
var pi = 3.14159
var volume = ((4/3) * pi * Math.pow(raio,3))

console.log(`VOLUME = ${volume.toFixed(3)}`)
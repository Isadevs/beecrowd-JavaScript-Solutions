let input = require("fs").readFileSync("stdin", "utf-8");
let [a,b,c] = input.split(" ").map(item => parseInt(item));


let maiorAB = (a + b + Math.abs (a - b))/2
let maiorXC = (c + maiorAB + Math.abs (c - maiorAB))/2

console.log(`${maiorXC} eh o maior`)





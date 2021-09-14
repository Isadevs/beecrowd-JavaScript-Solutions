var input = require("fs").readFileSync("stdin", "utf-8");


var valor = input.split()

var anos = parseInt(valor/365)
var mesEmDias = parseInt(valor % 365)
var quantidadeMes = parseInt(mesEmDias / 30)
var quantidadeTotalDias = parseInt(mesEmDias % 30)


console.log(anos + " ano(s)" + "\n" + quantidadeMes + " mes(es)" + "\n"+ quantidadeTotalDias + " dia(s)")


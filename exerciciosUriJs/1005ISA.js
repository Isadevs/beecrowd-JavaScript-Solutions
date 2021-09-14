var notaA = parseFloat(prompt('Qual O valor da Sua Nota A?'))
var notaB = parseFloat(prompt('Qual o valor da sua nota B?'))


notaA *= 3.5
notaB *= 7.5

var media = ((notaA+notaB)/11)

document.write(`O valor da Média é: ${media.toFixed(5)}`)

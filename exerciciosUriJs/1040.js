let input = require("fs").readFileSync("stdin", "utf-8");

const lines = input.split("\n");

const linha1 = lines[0].split(' ').map(n => parseFloat(n));
const linha2 = lines[1];

let [n1,n2,n3,n4] = linha1
let mediaExame = parseFloat(linha2)

let media = ((n1*2)+(n2*3)+(n3*4)+(n4*1))/10
console.log('Media:',media.toFixed(1))

if  (media >= 7){
    console.log('Aluno aprovado.')
}else if(media < 5){
    console.log('Aluno reprovado.')
}else{
    console.log('Aluno em exame.');
    let mediaFinalExame = (media+mediaExame)/(2);
    if (mediaFinalExame >= 5){
        console.log(`Nota do exame: ${mediaExame.toFixed(1)}`)
        console.log('Aluno aprovado.')
        console.log(`Media final: ${mediaFinalExame.toFixed(1)}`)
    }else{
        console.log('Aluno reprovado.')
        console.log(`Media final: ${mediaFinalExame.toFixed(1)}`)
    }
}







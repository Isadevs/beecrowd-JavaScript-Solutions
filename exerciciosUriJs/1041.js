let input = require("fs").readFileSync("stdin", "utf-8");
let separador = input.split(' ').map(n => parseFloat(n));

let [x,y] = separador

if (x == 0 && y == 0){
    console.log('Origem')
}else if (x== 0.0){
    console.log('Eixo Y')
}else if (y==0.0){
    console.log('Eixo X')
}else if (x<0 && y <0){
    console.log('Q3')
}else if (x <0 && y>0){
    console.log ('Q2')
}else if(x>0 && y<0){
    console.log('Q4')
}else{
    console.log('Q1')
}
let input = require("fs").readFileSync("stdin", "utf-8");

let [x,y] = input.split(' ')
let mult;

switch (x){
    case '1':
    mult = parseFloat(y * 4.00)
    console.log(`Total: R$ ${mult.toFixed(2)}`)
    break;

    case '2':
    mult = parseFloat(y * 4.50)
    console.log(`Total: R$ ${mult.toFixed(2)}`)
    break;

    case '3':
    mult = parseFloat(y*5.00)
    console.log(`Total: R$ ${mult.toFixed(2)}`)
    break;
    
    case '4': 
    mult = parseFloat(y*2.00)
    console.log(`Total: R$ ${mult.toFixed(2)}`)
    break;

    default:
    mult = parseFloat(y*1.50)
    console.log(`Total: R$ ${mult.toFixed(2)}`)
}



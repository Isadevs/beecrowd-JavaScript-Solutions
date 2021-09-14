let input = require("fs").readFileSync("stdin", "utf-8");
let entrada = input.split(' ').map(n => parseInt(n))

let [a, b, c] = entrada 

if(a<c && a<c && c<b) {
    console.log(`${a}\n${c}\n${b}`)
    console.log('\n')
    console.log(`${a}\n${b}\n${c}`)
}else if(b<a && a<c && b<c){
    console.log(`${b}\n${a}\n${c}`)
    console.log('\n')
    console.log(`${a}\n${b}\n${c}`)
}else{
    console.log(`${c}\n${b}\n${a}`)
    console.log('\n')
    console.log(`${a}\n${b}\n${c}`)
}

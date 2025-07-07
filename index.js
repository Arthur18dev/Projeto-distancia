var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

 
let distancia = parseInt(lines[0]);

function calculo(distancia) {
    return distancia * 2;
}

let tempo = calculo(distancia);

console.log(tempo + " minutos");
const prompt = require("prompt-sync")();
//Peça 5 números ao usuário e informe qual foi o maior número digitado//

let i;
let numero;
let maior = 0;

for(i = 0; i < 5; i++){
    numero = Number(prompt("Informe... : "))
    if(i === 0){
        maior = numero;
    }
    else if(numero > maior){
        maior = numero;
    }
}
console.log(maior);
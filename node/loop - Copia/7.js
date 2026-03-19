const prompt = require("prompt-sync")();

let i = 0;
let par = 0;
let impar = 0;
let numero;
let quantidade = 8;

for(i = 0; i < quantidade; i++){
    numero = Number(prompt("Enter a number here, please: "))
    if(numero % 2 == 0){
        par++;
        console.log("É par!")
    }
    else if(numero % 2 === 1){
        impar++;
        console.log("É ímpar!")
    }
}
console.log("Quantidade de números pares digitados: " + par);
console.log("Quantidade de números ímpares digitados: " + impar);
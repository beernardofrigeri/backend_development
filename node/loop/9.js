const prompt = require("prompt-sync")();

do {
    console.log("Deseja receber um 'olá'? Digite 1 para receber.")
    console.log("Deseja receber a data atual? Digite 2 para receber.")
    console.log("Deseja sair? Digite 3 para sair.")

    if(1 == (let = say = Number(prompt("Digite aqui: ")))){
        console.log("Olá meu caro ou minha cara!")
    }
    else if(2 == (let = data = Number(prompt("Digite aqui: ")))){
        console.log("A data atual é: " + new Date())
    }
    else if(3 == (let = exit = Number(prompt("Digite aqui: ")))){
        console.log("Até mais!")
        break;
    }
    else{
        console.log("Opção inválida, tente novamente.")
    }

} while (true);
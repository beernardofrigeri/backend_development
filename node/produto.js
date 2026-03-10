const prompt = require("prompt-sync")();

let preco = Number(prompt("Informe o preço da sua última compra na Positivo: "))

if(preco >= 200) {
    console.log("Produto com alto preço, qualidade: Alta.")
}
else if(preco <= 200 && preco >= 51) {
    console.log("Produto com bom preço, qualidade: Média.")
}
else if(preco <= 51) {
    console.log("Produto com baixo custo, qualidade: Baixa.")
}
else {
    console.log("Dado inserido não é o valor requisitado!")
}
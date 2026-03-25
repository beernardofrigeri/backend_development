const prompt = require('prompt-sync')();

let nome = prompt("Informe o nome do cliente: ")
let nomeAtendente = prompt("Informe o nome do atendente: ")
let subtotal = 0;
let valorTotal = 0;
let cupom = 0;      
let desconto = 0;   
let taxa = 0;       
let pagamento = 0;
let tamanhoEscolhido = 0;
let bebidaEscolhida = 0;
let sobremesaEscolhida = 0;

lanches = ("1 - Xis; \n2 - Hamburguer; \n3 - Cachorro Quente;")
tamanhos = ("1 - G [grande](30 reais - Xis)(27 reais - Hamburguer;)(20 reais - Cachorro-Quente) \n2 - M [médio](24 reais - Xis)(21 reais - Hamburguer)(16 reais - Cachorro-Quente) \n3 - P [pequeno](18 reais - Xis)(16 reais - Hamburguer)(12 reais - Cachorro-Quente)")
bebidas = ("1 - Agua (5 reais); \n2 - Suco (10 reais); \n3 - Refrigerante (8 reais);")
sobremesas = ("1 - Nenhuma \n2 - Sorvete (9 reais); \n3 - Pudim (11 reais);")
forma_de_pagamento = ("1 - Pix; \n2 - Dinheiro \n3 - Cartao (taxa de 3%)")
cupons = ("1 - Nenhum \n2 - Aluno10 \n3 - FreteGratis")

/* lanches: */
let precoLanche = 0;
let xisGrande = 30;
let xisMedio = 24;
let xisPequeno = 18;
let hamburguerGrande = 27;
let hamburguerMedio = 21;
let hamburguerPequeno = 16;
let cachorroGrande = 20;
let cachorroMedio = 16;
let cachorroPequeno = 12;

/* bebidas: */
precoBebidas = 0;
let agua = 5;
let suco = 10;
let refrigerante = 8;

/* sobremesas: */
precoSobremesas = 0;
let nenhuma = 0;
let sorvete = 9;
let pudim = 11;

console.log("Bem-vindo(a)! Veja o cardápio de lanches: ")
let pedido;
while (true) {
    console.log(lanches)
    console.log("Escolha o seu lanche: ")
    pedido = Number(prompt(""))
if (pedido === 1) {
    let tamanho;
    while (true) {
    console.log(tamanhos)
    console.log("Escolha o tamanho: ")
    tamanho = Number(prompt(""))
    if (tamanho === 1) {
        console.log("Certo, 1 Xis grande;")
        precoLanche = xisGrande;
        tamanhoEscolhido = tamanho
        break;
    }
    else if (tamanho === 2) {
        console.log("Certo, 1 Xis médio;")
        precoLanche = xisMedio;
        tamanhoEscolhido = tamanho
        break;
    }
    else if (tamanho === 3) {
        console.log("Certo, 1 Xis pequeno;")
        precoLanche = xisPequeno;
        tamanhoEscolhido = tamanho
        break;
    }
    else {
        console.log("Tamanho inválido!")
    }
}
break;
}
else if (pedido === 2) {
    let tamanho;
    while (true) {
    console.log(tamanhos)
    console.log("Escolha o tamanho: ")
    tamanho = Number(prompt(""))
    if (tamanho === 1) {
        console.log("Certo, 1 Hamburguer grande;")
        precoLanche = hamburguerGrande;
        tamanhoEscolhido = tamanho
        break;
    }
    else if (tamanho === 2) {
        console.log("Certo, 1 Hamburguer médio;")
        precoLanche = hamburguerMedio;
        tamanhoEscolhido = tamanho
        break;
    }
    else if (tamanho === 3) {
        console.log("Certo, 1 Hamburguer pequeno;")
        precoLanche = hamburguerPequeno;
        tamanhoEscolhido = tamanho
        break;
    }
    else {
        console.log("Tamanho inválido!")
    }
}
break;
}
else if (pedido === 3) {
    let tamanho;
    while (true) {
    console.log(tamanhos)
    console.log("Escolha o tamanho: ")
    tamanho = Number(prompt(""))
    if (tamanho === 1) {
        console.log("Certo, 1 Cachorro-Quente grande;")
        precoLanche = cachorroGrande;
        tamanhoEscolhido = tamanho
        break;
    }
    else if (tamanho === 2) {
        console.log("Certo, 1 Cachorro-Quente médio;")
        precoLanche = cachorroMedio;
        tamanhoEscolhido = tamanho
        break;
    }
    else if (tamanho === 3) {
        console.log("Certo, 1 Cachorro-Quente pequeno;")
        precoLanche = cachorroPequeno;
        tamanhoEscolhido = tamanho
        break;
    }
    else {
        console.log("Tamanho inválido!")
    }
}
break;
}
else {
    console.log("Opção inválida.")
}
}
console.log("Agora, veja as bebidas: ")
while (true) {
console.log(bebidas)
console.log("Qual será o número? Digite a sua escolha: ")
let bebida = Number(prompt(""))
if (bebida === 1 ) {
    console.log("Perfeito! Água, registrado.")
    precoBebidas = agua;
    bebidaEscolhida = bebida
    break;
}
else if (bebida === 2 ) {
    console.log("Perfeito! Suco, registrado.")
    precoBebidas = suco;
    bebidaEscolhida = bebida
    break;
}
else if (bebida === 3 ) {
    console.log("Perfeito! Refrigerante, registrado.")
    precoBebidas = refrigerante;
    bebidaEscolhida = bebida
    break;
}
else {
    console.log("Opção inválida.")
}
}
console.log("Vamos para as sobremesas: ")
while (true) {
    console.log(sobremesas)
    console.log("Digite a sua escolha especial: ")
    let sobremesa = Number(prompt(""))
    if (sobremesa === 1 ) {
    console.log("Certo... nenhuma então.")
    precoSobremesas = nenhuma;
    sobremesaEscolhida = sobremesa
    break;
}
else if (sobremesa === 2 ) {
    console.log("Certo! Sorvete anotado!")
    precoSobremesas = sorvete;
    sobremesaEscolhida = sobremesa
    break;
}
else if (sobremesa === 3 ) {
    console.log("Anotado! Pudim.")
    precoSobremesas = pudim;
    sobremesaEscolhida = sobremesa
    break;
}
else {
    console.log("Opção inválida.")
}
}
subtotal = precoLanche + precoBebidas + precoSobremesas;
while (true) {
    console.log("Desejar usar um dos nossos cupons de desconto?")
    console.log(cupons)
    console.log("Insira o número correspondente: ")
    cupom = Number(prompt(""))
    if (cupom === 1) {
        desconto = 0;
        valorTotal = subtotal;
        console.log("Sem cupom então: " + valorTotal)
        break;
    }
    else if (cupom === 2) {
        desconto = subtotal * 0.10
        valorTotal = subtotal - desconto
        console.log("Cupom aplicado! Novo valor: " + valorTotal)
        break;
    }
    else if (cupom === 3) {
        desconto = 5;
        valorTotal = subtotal - desconto;
        console.log("Cupom aplicado! Novo valor: " + valorTotal)
        break;
    }
    else {
        console.log("Opção inválida;")
    }
}
console.log("Com isso, veja as formas de pagamento para finalizar seu pedido: ")
while (true) {
    console.log(forma_de_pagamento)
    console.log("Insira o número da forma de pagamento: ")
    pagamento = Number(prompt(""))
    if (pagamento === 1) {
        taxa = valorTotal;
        console.log("Preço normal. Total a pagar: " + valorTotal + " reais; Você está sendo transferido para a seção de pagamento...")
        break;
    }
    else if (pagamento === 2) {
        taxa = valorTotal;
        console.log("Preço normal. Total a pagar: " + valorTotal + " reais; Você está sendo transferido para a seção de pagamento...")
        break;
    }
    else if (pagamento === 3) {
        taxa = valorTotal * 1.03
        console.log("Preço com taxa de 3% encima do valor total. Total a pagar: " + taxa + " reais; Você está sendo transferido para a seção de pagamento...")
        break;
    }
    else {
        console.log("Opção inválida.")
    }
}
console.log("============ PEDIDO FEITO ============")
console.log("Nome do cliente: " + nome)
console.log("Nome do atendente: " + nomeAtendente)
console.log("Lanche pedido (opção): " + pedido)
console.log("Tamanho do lanche (opção): " + tamanhoEscolhido)
console.log("Bebida pedida (opção): " + bebidaEscolhida)
console.log("Sobremesa pedida (opção): " + sobremesaEscolhida)
console.log("Subtotal do pedido: " + subtotal)
console.log("Cupom aplicado (opção): " + cupom)
console.log("Valor do desconto dado: " + desconto)
console.log("Taxa aplicada pela forma de pagamento: " + taxa)
console.log("Forma de pagamento (opção): " + pagamento)
console.log("Valor final a ser pago: " + valorTotal)
console.log("============= Obrigado por contar conosco! =============")
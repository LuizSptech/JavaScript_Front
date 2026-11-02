//Exercicio1
const valores = [10, 20, 30, 40, 50];



const total = valores.reduce((acumulador, preco) => {
    return acumulador + preco;
}, 0)

console.log(total)


//Exercicio2

const produtos = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 80 },
    { nome: "Monitor", preco: 900 },
    { nome: "Headset", preco: 120 }
];

const tudo = produtos.reduce((soma, preco) => {
    return soma + preco.preco;

}, 0)


console.log(tudo)




//Exercicio 3

const eita = [10, 20, 30, 40]

const everthing = eita.reduce((soma, numero) => {
    return soma + numero
}, 0)

console.log(everthing)


//Exercicio 4



const carrinho = [
    { produto: "Notebook", preco: 3500.00, qtd: 1 },
    { produto: "Mouse", preco: 89.90, qtd: 2 },
    { produto: "Teclado", preco: 250.00, qtd: 1 },
    { produto: "Monitor", preco: 1200.00, qtd: 2 },
    { produto: "Headset", preco: 180.00, qtd: 3 },
    { produto: "Webcam", preco: 150.00, qtd: 1 },
    { produto: "Mousepad", preco: 45.00, qtd: 2 },
    { produto: "Microfone", preco: 320.00, qtd: 1 },
    { produto: "SSD", preco: 450.00, qtd: 2 },
    { produto: "Cadeira Gamer", preco: 1100.00, qtd: 1 }
];


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
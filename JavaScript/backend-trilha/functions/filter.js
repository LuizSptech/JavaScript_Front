//Exercicio 1 
const produtos = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 80 },
    { nome: "Mousepad", preco: 40 },
    { nome: "Monitor", preco: 900 }
];

const menorQue100 = produtos.filter(produto => produto.preco <100)


console.log(menorQue100)


//Exercicio 2 

const usuarios = [
    { nome: "Ana", idade: 17 },
    { nome: "Carlos", idade: 25 },
    { nome: "João", idade: 15 },
    { nome: "Mariana", idade: 32 },
    { nome: "Pedro", idade: 19 }
];

const maioresDeIdade = usuarios.filter(usuario => usuario.idade >= 18)


//Exercicio 3

const produtos2 = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 80 },
    { nome: "Mousepad", preco: 40 },
    { nome: "Monitor", preco: 900 },
    { nome: "Headset", preco: 120 }
];

const menorQue200 = produtos2.filter(produto => produto.preco < 200)

const nomes = menorQue200.map(menor => menor.nome)

console.log(nomes)
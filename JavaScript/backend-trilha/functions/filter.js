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


//Exercicio 4

const numeros = [1, 2, 3, 4, 5, 6];


const par = numeros.filter(numero => numero % 2 == 0)

console.log(par)

//Exercicio 5 

const palavras = [
    "casa",
    "computador",
    "livro",
    "javascript",
    "sol",
    "programacao",
    "mesa",
    "desenvolvedor",
    "gato",
    "teclado"
];

const maiorQue4 = palavras.filter(palavra => palavra.length > 4)

console.log(maiorQue4)



//Exercicio 6

const usuarios2 = [
    { id: 1, nome: "Ana", ativo: true },
    { id: 2, nome: "Carlos", ativo: false },
    { id: 3, nome: "Mariana", ativo: true },
    { id: 4, nome: "Pedro", ativo: false },
    { id: 5, nome: "Julia", ativo: true },
    { id: 6, nome: "Lucas", ativo: true },
    { id: 7, nome: "Beatriz", ativo: false },
    { id: 8, nome: "Gabriel", ativo: true },
    { id: 9, nome: "Fernanda", ativo: false },
    { id: 10, nome: "Rafael", ativo: true }
];



const verdade = usuarios2.filter( usuario => usuario.ativo == true)

console.log(verdade)


//Exercicio 7

const produtos3 = [
    { id: 1, nome: "Mousepad", preco: 35.00 },
    { id: 2, nome: "Notebook", preco: 3500.00 },
    { id: 3, nome: "Caderno", preco: 25.00 },
    { id: 4, nome: "Headset", preco: 150.00 },
    { id: 5, nome: "Caneta", preco: 5.00 },
    { id: 6, nome: "Mochila", preco: 89.90 },
    { id: 7, nome: "Garrafa térmica", preco: 75.00 },
    { id: 8, nome: "Teclado", preco: 120.00 },
    { id: 9, nome: "Livro", preco: 45.00 },
    { id: 10, nome: "Borracha", preco: 3.50 }
];



const maiorMenor = produtos3.filter( produto => produto.preco >= 20 && produto.preco <= 100)

console.log(maiorMenor)


//Exercicio 8

const numbers = [1, 2, 2, 3, 3, 3, 4];


const removerDuplicado = numbers.filter((numero, indice) => {
    return indice === numbers.indexOf(numero)
})


console.log(removerDuplicado)
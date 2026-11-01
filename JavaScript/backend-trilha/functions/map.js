//Exercicio 1




const dados = [1, 2, 3, 4, 5];

const retorno = dados.map( dado => dado*2)

console.log(retorno)




//Exercicio 2

const nomes = ["ana", "bruno", "carla"]
const upcase = nomes.map(name => name.toUpperCase())
console.log(upcase)

//Exercicio 3
const usuarios = [
    {
        id: 1,
        nome: "Carlos Silva",
        email: "carlos.silva@email.com"
    },
    {
        id: 2,
        nome: "Mariana Oliveira",
        email: "mariana.oliveira@email.com"
    },
    {
        id: 3,
        nome: "João Santos",
        email: "joao.santos@email.com"
    },
    {
        id: 4,
        nome: "Ana Costa",
        email: "ana.costa@email.com"
    },
    {
        id: 5,
        nome: "Pedro Almeida",
        email: "pedro.almeida@email.com"
    },
    {
        id: 6,
        nome: "Juliana Ferreira",
        email: "juliana.ferreira@email.com"
    },
    {
        id: 7,
        nome: "Lucas Rodrigues",
        email: "lucas.rodrigues@email.com"
    },
    {
        id: 8,
        nome: "Beatriz Martins",
        email: "beatriz.martins@email.com"
    },
    {
        id: 9,
        nome: "Gabriel Lima",
        email: "gabriel.lima@email.com"
    },
    {
        id: 10,
        nome: "Fernanda Souza",
        email: "fernanda.souza@email.com"
    }
];

const email = usuarios.map(usuario => usuario.email)

console.log(email)

//Exercicio 4


const produtos = [
    { nome: "Notebook", preco: 3500.00 },
    { nome: "Mouse Gamer", preco: 150.00 },
    { nome: "Teclado Mecânico", preco: 280.00 },
    { nome: "Monitor 24 polegadas", preco: 950.00 },
    { nome: "Headset", preco: 220.00 },
    { nome: "Webcam", preco: 180.00 },
    { nome: "Cadeira Gamer", preco: 1200.00 },
    { nome: "Mousepad", preco: 65.00 },
    { nome: "Microfone", preco: 450.00 },
    { nome: "SSD 1TB", preco: 520.00 }
];

//const desconto = produtos.map(produto => (produto.preco - (produto.preco * (10/100))) )
const desconto = produtos.map(produto => {
    return {
        nome: produto.nome,
        preco: produto.preco - (produto.preco * (10/100))
    }
})
console.log(desconto)

//Exercicio 5

const pessoas = [
    { nome: "Ana", idade: 20 },
    { nome: "Carlos", idade: 25 },
    { nome: "Mariana", idade: 19 },
    { nome: "Pedro", idade: 32 },
    { nome: "Julia", idade: 22 },
    { nome: "Lucas", idade: 28 },
    { nome: "Beatriz", idade: 21 },
    { nome: "Gabriel", idade: 30 },
    { nome: "Fernanda", idade: 24 },
    { nome: "Rafael", idade: 35 }
];
let indice = 0
const saida = pessoas.map((pessoa, indice)  => {
    indice++
    console.log(`${indice}. ${pessoa.nome} Tem ${pessoa.idade} anos`)
})
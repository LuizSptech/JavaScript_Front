

//Exercicio 2

const numeros = [4, 8, 12, 16];

const maior = numeros.find(numero => numero > 10)

console.log(maior)


//Exercicio 3 

const usuarios2 = [
    { id: 1, nome: "Ana", email: "ana@email.com" },
    { id: 2, nome: "Carlos", email: "carlos@email.com" },
    { id: 3, nome: "Mariana", email: "mariana@email.com" },
    { id: 4, nome: "Pedro", email: "pedro@email.com" },
    { id: 5, nome: "Julia", email: "julia@email.com" },
    { id: 6, nome: "Lucas", email: "lucas@email.com" },
    { id: 7, nome: "Beatriz", email: "beatriz@email.com" },
    { id: 8, nome: "Gabriel", email: "gabriel@email.com" },
    { id: 9, nome: "Fernanda", email: "fernanda@email.com" },
    { id: 10, nome: "Rafael", email: "rafael@email.com" }
];

const especifico = usuarios2.find(usuario => usuario.id == 3)

console.log(especifico)


//Excercicio 4

const produtos = [
    { id: 1, nome: "Notebook", preco: 3500.00 },
    { id: 2, nome: "Mouse", preco: 89.90 },
    { id: 3, nome: "Teclado", preco: 250.00 },
    { id: 4, nome: "Monitor", preco: 1200.00 },
    { id: 5, nome: "Headset", preco: 180.00 },
    { id: 6, nome: "Webcam", preco: 150.00 },
    { id: 7, nome: "Mousepad", preco: 45.00 },
    { id: 8, nome: "Microfone", preco: 320.00 },
    { id: 9, nome: "SSD", preco: 450.00 },
    { id: 10, nome: "Cadeira Gamer", preco: 1100.00 }
];


const achado = produtos.find(produto => produto.nome == "Teclado")
console.log(achado)


//Exercicio 5


const usuarios = [
    { id: 1, nome: "Ana", ativo: false },
    { id: 2, nome: "Carlos", ativo: true },
    { id: 3, nome: "Mariana", ativo: true },
    { id: 4, nome: "Pedro", ativo: true },
    { id: 5, nome: "Julia", ativo: true },
    { id: 6, nome: "Lucas", ativo: true },
    { id: 7, nome: "Beatriz", ativo: true },
    { id: 8, nome: "Gabriel", ativo: true },
    { id: 9, nome: "Fernanda", ativo: true },
    { id: 10, nome: "Rafael", ativo: true }
];


const desativado = usuarios.find(usuario => usuario.ativo == false ? usuario.ativo === false : console.log("Todos ativos"))


console.log(desativado)


//Exercicio 6

const pessoas = [
    { id: 1, nome: "Ana", email: "ana@email.com" },
    { id: 2, nome: "Carlos", email: "carlos@email.com" },
    { id: 3, nome: "Mariana", email: "mariana@email.com" },
    { id: 4, nome: "Pedro", email: "pedro@email.com" },
    { id: 5, nome: "Julia", email: "julia@email.com" },
    { id: 6, nome: "Lucas", email: "lucas@email.com" },
    { id: 7, nome: "Beatriz", email: "beatriz@email.com" },
    { id: 8, nome: "Gabriel", email: "gabriel@email.com" },
    { id: 9, nome: "Fernanda", email: "fernanda@email.com" },
    { id: 10, nome: "Rafael", email: "rafael@email.com" }
];


function buscarPorEmail(lista, email){
   const procurar = lista.find(pessoa => pessoa.email == email ? pessoa : console.log("não encontrado"))
    console.log(procurar)
    

}

buscarPorEmail(pessoas, "ana@email.com")
//Exercicio 1

const usuario = {
    nome: "Mariana",
    idade: 22,
    email: "mariana@email.com",
    cidade: "São Paulo"
};


const {nome, idade} = usuario

const {email: emailUsuario} = usuario

console.log(nome)
console.log(idade)
console.log(emailUsuario)


//Exercicio 2 


const tecnologias = ["JavaScript", "Node.js", "Express", "MySQL"];


const [linguagem,runtime,,bandoDados] = tecnologias
console.log(linguagem)
console.log(runtime)
console.log(bandoDados)

//Exercicio 3


const produto = {
    nome: "Notebook",
    preco: 3500,
    categoria: "Eletrônicos"
};


function exibirProduto(objeto){
    const {nome, preco, categoria} = objeto

    console.log(`O ${nome} custa R$ ${preco} e pertence à categoria ${categoria}`)
}


exibirProduto(produto)


//Exercicio 4 - com map

const produtos = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 80 },
    { nome: "Monitor", preco: 900 }
];


const produtosAtualizados = produtos.map(produto => {
    return{
        ...produto,
        preco: (produto.preco + 10),
        disponivel: true
    }
})



console.log(produtosAtualizados)



//Exercicio 5 


const linguagens = ["Java", "Python"];
const frameworks = ["React", "Express"];

const tecnologia = [...linguagens, ...frameworks, "Unity"]
console.log(tecnologia)
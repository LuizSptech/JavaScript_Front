const usuarios = [
    { nome: "Ana", idade: 17 },
    { nome: "Carlos", idade: 25 },
    { nome: "Mariana", idade: 32 }
];


const usuarioEncontrado = usuarios.find(usuario => usuario.nome == "Mariana");

console.log(usuario);
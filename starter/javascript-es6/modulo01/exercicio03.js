/* Using the conpect "Arrow Functions" */

const arr = [1, 2, 3, 4, 5];

arr.map(item => item + 10);

// - 3.2

const usuario = { nome: 'Gabriel', idade: 24 };

const mostraIdade = ({idade}) => idade;

mostraIdade(usuario);

// - 3.3

const nome = "Gabriel";
const idade = 24;

const mostraUsuario = (...params) => console.log(params);

mostraUsuario(nome, idade);
mostraUsuario(nome);

// - 3.4

const promise = () => new Promise((resolve, reject) => resolve());
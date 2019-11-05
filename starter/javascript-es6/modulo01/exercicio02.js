/* Using the methods of Array (map, reduce, filter e find) */

const usuarios = [  
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// MAP
var idades = usuarios.map(usuario => usuario.idade);

// FILTER
var usuariosRocketseat = usuarios
  .filter(usuario => usuario.idade > 18 && usuario.empresa === "Rocketseat");

// FIND
var usuariosGoogle = usuarios
  .find(usuario => usuario.empresa === "Google");

// REDUCE
const maiorQueCinquenta = usuarios
  .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter(usuario => usuario.idade <= 50);

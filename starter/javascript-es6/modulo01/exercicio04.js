/* Using the conpect of simple unstructuring */

const empresa = {  
  nome: 'Rocketseat',  
  endereco: {    
    cidade: 'Rio do Sul',    
    estado: 'SC',  
  }
};

const {nome, endereco: { cidade, estado } } = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

/* Utilizando conteito de Desestruturação em Parâmetros */

function mostraInfo({nome, idade}) {  
  return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({ nome: 'Gabriel', idade: 24 }));
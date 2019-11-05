/* Using the operator "REST" */

const arr = [1, 2, 3, 4, 5, 6];

const [x , ...y] = arr;
console.log(x);
console.log(y);

const soma = (...params) => params.reduce((total, next) => total + next); 
console.log(soma(1,2,3,4,5,6,7,8,9,10));

/*  Using the operator "SPREAD" */

const usuario = {  
  nome: 'Diego',  
  idade: 23,  
  endereco: {    
    cidade: 'Rio do Sul',    
    uf: 'SC',    
    pais: 'Brasil',  
  }
};

var usuario1 = {...usuario, nome: "Gabriel"};
var usuario2 = {...usuario, endereco: cidade = "Lontras" };

console.log(usuario2);
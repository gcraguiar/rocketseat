var checaIdade = function(idade, timeout) {
  return new Promise((resolve, reject) => {
    if (idade >= 18) {
      setTimeout(() => resolve('Maior que 18'), timeout);
    } else {
      setTimeout(() => reject('Menor que 18'), timeout);
    }
  });
}

var obterRepositorios = function(username) {
  return new Promise((resolve, reject) => {
    axios.get('https://api.github.com/users/' + username + '/repos')
    .then(function(response) {
      setTimeout(() => resolve(response), 2000);
    })
    .catch(function(error) {
      setTimeout(() => reject(error), 2000)
    })
  })
}
// -- Code refactoring using async / await

/* 3.1 */

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
  await delay();
  console.log('1s');

  await delay();
  console.log('2s');

  await delay();
  console.log('3s');
};

umPorSegundo();

/* 3.2 */

import axios from 'axios';

const getUserFromGithub = async (username) => {  
  try {
   var response = await axios.get(`https://api.github.com/users/${username}`);
   console.log(response);
  } catch(err) {      
    console.log('Usuário não existe');    
  }
};

getUserFromGithub('gcraguiar');
getUserFromGithub('gcraguiar1398123');

/* 3.3 */

class Github {  
  static async getRepositories(repo) {    
    try {
    const response = await axios.get(`https://api.github.com/repos/${repo}`)   
    console.log(response.data);
    } catch (err) {
      console.log('Repositório não existe');
    }
  }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

/* 3.4 */

const buscaUsuario = async usuario => {  
  try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log(response.data);    
  } catch (err) {
    console.log('Usuário não existe');    
  }
};
  
buscaUsuario('gcraguiar');
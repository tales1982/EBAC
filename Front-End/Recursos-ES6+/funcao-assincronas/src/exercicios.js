/*
Certifique-se de que você tem a biblioteca axios instalada, você pode instalá-la usando o comando 
npm install axios ou yarn add axios antes de executar o código corrigido.
 */

const axios = require('axios');

const username = 'tales1982';
const endpoint = `https://api.github.com/users/${username}`;

async function buscaGitSeguidores() {
    
    try {
        const response = await axios.get(endpoint);
        console.log(response.data); // Use response.data para acessar os dados da resposta
        const userName = response.data.login
        const userLocation = response.data.location;
        const seguidores = response.data.following;

        if(userName == 'tales1982'){

            console.log(`O Seu login e : ${userName} e sua cidade é ${userLocation} e voce tem ${seguidores} seguidores`)

        }else{
            console.log('Deu merda')
        }
    } catch (erro) {
        console.error('Erro na solicitação da API:', erro);
    }
}

buscaGitSeguidores();

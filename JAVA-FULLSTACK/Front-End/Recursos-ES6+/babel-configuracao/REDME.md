## BABEL
O babel serve para faze a transpilacao do meu codigo para verssao que sao compativeis com todos os navegadores.
Alguns navegadores nao consegue entender os codigos mais recentes, por isso podemos usar o babel 
para traduzirpra versoes ,mais antigas do javascripts.

# ===== Fazendo a instalacao do BABEL ========

# npm init -y

# 2° npm install --save-dev @babel/core @babel/cli

# 3° configure o babel no json adcione o script para compilar o codigo e para criar a pasta dist onde o codigo final ficara.
"build":"babel src -d dist"

# 4° vamos utilzizar junto com o babel o browser-list para isso temos que estalar um pluguin preset-env
# npm install --save-dev @babel/preset-env

# 5° Agora crie um arquivo de configuracao chamado
# babel.config.json

6° No babel.config.json
adicione o codigo
{
    "presets": ["@babel/preset-env"]
}

7° Depois vai em package.json e adcione o comando logo abaixo de script o camando browserlist

"scripts": {
    "build": "babel src -d dist",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "browserslist":">0.25%",

  8° Para compilar rode o comando 
  # npm run build
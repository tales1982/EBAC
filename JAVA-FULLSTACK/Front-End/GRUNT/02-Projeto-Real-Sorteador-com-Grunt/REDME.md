### Configuracao do GRUNT

# 1° npm i -g grunt-cli

# 2° npm init -y

# 3° npm i --save-dev grunt

# 4° .gitignore -> node_modules

# 5° Adciona o script no json

# 6° "grunt":"grunt",

# 7° Crie o arquivo --> Gruntfile.js

### Executando e compilando less com o Grunt

# 8° npm install --save-dev grunt-contrib-less

# 9° adcione o comando dentro do Grunt.js  
grunt.loadNpmTask('grunt-contrib-less'); 

# 10° adcione essa linha de comando tambem 
less: {
            development:{
                files:{
                    'main.css': 'main.less'
                }
            }
        }

# 11° compilando o sass estale o plugin
npm install --save-dev grunt-contrib-sass


# 12° agora estale um pluguin para execuar minhas tarefa em modo paralelo em veis de uma por uma.
npm install --save-dev grunt-concurrent

# 13° adcione um noscript no json
"build":"grunt build",

# 14 ° Para fazer o grunt compilar altomaticamente estale o pluguin
npm install --save-dev grunt-contrib-watch

# 15° presiso estalar um pluguin para poder ter 2 css um para dev outro pra dist
npm install --save-dev grunt-replace

# 16° uma veis estalado e criado a configuracao no Gruntfile adcione no html a linha do css alterando o do css original
@@ENDERECO_DO_CSS

# 17° execute o comando 
npm run grunt replace:dev

# 18° Agora vamos estalar um pluguin para fazer a miminificacao dos arquivos
npm install --save-dev grunt-contrib-htmlmin

# 19° uma veis feitop o buldo dos arquivos temos que apagar as pasta temporaria
npm install --save-dev grunt-contrib-clean

# 20° vamos estalar o pluguin para comprimir todo os arquivos dist
npm install --save-dev grunt-contrib-uglify
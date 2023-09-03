### Configurando o ambiente de trabalho real com GRUNT


# 1° npm i -g grunt-cli

# 2° npm init -y

# 3° npm i --save-dev grunt

# 4° .gitignore -> node_modules

# 5° Adciona o script no json

# 6° "grunt":"grunt",

# 7° Crie o arquivo --> Gruntfile.js

# 8° npm install grunt-contrib-less --save-dev


### agora vamos configura o Grundfile.js

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        #### o codigos vem aqui dentro ####

    })};

## 1° dentro do excopo acima vamos adcionar os pluguins, que vamos utilizar comesando pelo LESS.
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            }
        },
        production:{
            options:{
                compress:true,
            },
            files:{
                'dist/styles/main.min.css':'src/styles/main.less'
            }
        },
    });

     
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less:development']);
    grunt.registerTask('build', ['less:production']);
};

### =============== pluguin para observa e atualizar o codigo ====================== 
## Agora vou estalar o pluguin que vai fazer a atualizacao da alteracao do codigo altomatica.

# npm install --save-dev grunt-contrib-watch
esse pluguin vai ficar observando meu codigo, agora vamos configura ele no Gruntfile.js
adcione em baixo do codigo.
# grunt.loadNpmtasks('grunt-contrib-watch')
abaixo do less adcione o codigo

watch:{
            less:{
                files:['src/styles/**/*.less'],
                tasks:['less:development']
            }
        },

grunt.loadNpmTasks('grunt-contrib-watch');

altere essa linha default para ficar assim
# grunt.registerTask('default', ['watch']);



## ================ Criando uma copia do html que vai aponta para dist ================
# 1° vou criar um html que aponte para p (dist) e o original fica apontando para (dev) baixe o pluguin (replace)

# npm install --save-dev grunt-replace 
o replace e pluguin que vai alterar o caminho digito uma palavra no caminho do css o js e quando ele acontra 
essa palavra ele vai altera para o caminho que eu definir, 

replace:{
            dev:{
                options:{
                    patterns:[
                        {
                            match: 'ADRESS_DO_CSS',
                            replacement: './styles/main.css'
                        }
                    ]
                },files:[
                    {
                        expand:true,
                        flatten:true,
                        src:['src/index.html'],
                        dest:'dev'
                    }
                ]
            }
        }


grunt.loadNpmTasks('grunt-replace');

### ================ Comprimindo (minificar) os Arquivo html com Grunt ================ 
## npm install --save-dev grunt-contrib-htmlmin

adcione o codigo abaixo

htmlmin:{
            dist:{
                options:{
                    removeComments:true,
                    collapseWhitespace:true
                },
                files:{
                    'prebuild/index.html':'src/index.html'
                }
            }
        }

grunt.loadNpmTasks('grunt-contrib-htmlmin');

para executar o codigo
npm run grunt htmlmin:dist


## no replace adcione mais esse codigo abaixo do dev
dist:{
                options:{
                    patterns:[
                        {
                            match: 'ADRESS_DO_CSS',
                            replacement: './styles/main.min.css'
                        }
                    ]
                },files:[
                    {
                        expand:true,
                        flatten:true,
                        src:['prebuild/index.html'],
                        dest:'dist/'
                    }
                ]
            }

## agora altere a linha do build com os novos pluguins
grunt.registerTask('build', ['less:production','htmlmin:dist','replace:dist']);

## execute o 
npm run grunt build

### agora que meu codigo foi compilado posso apagar a pasta presbuild estalando novo pluguin
npm install --save-dev grunt-contrib-clean

adcione depois do dist
clean:['prebuild']
e acresente no 
grunt.registerTask('build', ['less:production','htmlmin:dist','replace:dist','clean]);

execute o npm run grunt build

### no watch adcione logo depois do less
html:{
                files:['src/index.html'],
                tasks:['replace:dev']
            }

## Comprimindo o javascript

# estale o pluguin para comprimir o js
npm install --save-dev grunt-contrib-uglify

adcione a linha depois do clean

uglify:{
            target:{
                files:{
                    'dist/scripts/main.min.js':'src/scripts/main.js'
                }
            }
        }

grunt.registerTask('build', ['less:production','htmlmin:dist','replace:dist','clean','uglify']);

execute o 
# npm run grunt build

# agora vamos fazer com que meu arquivo js aponte pra pasta de dist

copie esse trecho do codigo do replace
{
                            match: 'ADRESS_DO_JS',
                            replacement: '../src/scripts/main.js'
                        }
# cole ele no dist logo depois do (adress do css)
# e altere ele para ficar assin
 dist:{
                options:{
                    patterns:[
                        {
                            match: 'ADRESS_DO_CSS',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'ADRESS_DO_JS',
                            replacement: '../dist/scripts/main.min.js'
                        }
                    ]
                },files:[
                    {
                        expand:true,
                        flatten:true,
                        src:['prebuild/index.html'],
                        dest:'dist/'
                    }
                ]
            }

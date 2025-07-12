// Configuracao inicial padrao do Grunt 

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development:{
                files:{
                    'main.css': 'main.less'
                }
            },
            production:{
                options:{
                    compress:true,
                },
                files:{
                    'main.min.css':'main.less'
                }
            }
        },
        sass: {
            dist: {
                options:{
                    style: 'compressed'
                },
                files:{
                    'main2.css': 'main.scss'
                }
            }
        },
        concurrent:{
            target:['less','sass']
        }
    })

    //pluguin para executar o less
    grunt.loadNpmTasks('grunt-contrib-less');
    //plugin para executar o sass
    grunt.loadNpmTasks('grunt-contrib-sass');
    //para erxecutar o pluguin que vai executar minhas tarefas em simutaneo
    grunt.loadNpmTasks('grunt-concurrent');

    //tarefas async executa quantas teras que eu quizer
    grunt.registerTask('default',['concurrent']);

}
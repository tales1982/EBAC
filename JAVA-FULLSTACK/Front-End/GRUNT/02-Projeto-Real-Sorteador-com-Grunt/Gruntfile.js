module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development:{
                files:{
                    'dev/style/main.css': 'src/style/main.less'
                }
            },
            production:{
                options:{
                    compress:true,
                },
                files:{
                    'dist/style/main.min.css':'src/style/main.less'
                }
            },
        },
        watch:{
            less:{
                files:['src/style/**/*.less'],
                tasks:['less:development']
            },
            html:{
                files:['src/index.html'],
                tasks:['replace:dev']
            }
        },
        replace:{
            dev:{
                options:{
                    patterns:[
                        {
                        match: 'ENDERECO_DO_CSS',
                        replacement: './src/style/main.css'
                    },
                    {
                        match: 'ENDERECO_DO_JS',
                        replacement: './src/script/main.js'
                    }
                ]
                },
                files:[{
                    expand:true,
                    flatten:true,
                    src:['src/index.html'],
                    dest: 'dev/'
                }]
            },
            dist:{
                options:{
                    patterns:[
                        {
                        match: 'ENDERECO_DO_CSS',
                        replacement: './style/main.min.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: './script/main.min.js'
                        }
                ]
                },
                files:[{
                    expand:true,
                    flatten:true,
                    src:['prebuild/index.html'],
                    dest: 'dist/'
                }]
            }
        }, 
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
        },
        clean:['prebuild'],
        uglify:{
            target:{
                files:{
                    'dist/scripts/main.min.js':'src/script/main.js'
                }
            }
        }
    })

    //pluguin para executar o less
    grunt.loadNpmTasks('grunt-contrib-less');
    
    //pluguin para executar o watch dos arquivos
    grunt.loadNpmTasks('grunt-contrib-watch');

    //pluguin para podr ter 2 css dev e dist
    grunt.loadNpmTasks('grunt-replace');

    //pluguin para fazer a miminificacao
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    //pluguin para apagar as pasta temporaria
    grunt.loadNpmTasks('grunt-contrib-clean');

    //pluguin para comprimir os arquivos dist
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //tarefas async executa quantas teras que eu quizer
    grunt.registerTask('default',['watch']);
    grunt.registerTask('build',['less:production','htmlmin:dist','replace:dist','clean','uglify']);

}
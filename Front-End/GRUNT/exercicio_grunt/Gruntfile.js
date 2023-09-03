module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: { 
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            },
        },
        watch:{
            less:{
                files:['src/styles/**/*.less'],
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
                            match: 'ADRESS_DO_CSS',
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'ADRESS_DO_JS',
                            replacement: '../src/scripts/main.js'
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
            },
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
                    'dist/scripts/main.min.js':'src/scripts/main.js'
                }
            }
        }
    });

    
    grunt.loadNpmTasks('grunt-contrib-less');// Carregar o plugin grunt-contrib-less
    grunt.loadNpmTasks('grunt-contrib-watch');//observa minhas tarefas
    grunt.loadNpmTasks('grunt-replace');//observa minhas tarefas
    grunt.loadNpmTasks('grunt-contrib-htmlmin');//minimifica meu codigo 
    grunt.loadNpmTasks('grunt-contrib-clean');//Apaga a pasta presbuild
    grunt.loadNpmTasks('grunt-contrib-uglify');//Comprime o meu arquivo javascript

    grunt.registerTask('default', ['watch']);// Tarefas registradas
    grunt.registerTask('build', ['less:production','htmlmin:dist','replace:dist','clean','uglify']);// A tarefa que será executada quando você construir o site
};

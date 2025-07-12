### Estalacao do SASS

# 1° npm install -g sass
para estalar o sass em forma global

# 2° npm init -y
para estala o json

# 3° npm i --save-dev sass
agora estale o sass em forma de desevolvimento, dessa maneira quando eu subir o site a pasta sass nao vai 
ocupondo menos espaco.

# 4° Crie um arquivo .gitignore
dentro do arquivo .gitignore coleque o node_modules, para que ele nao suba junto com o meu site
porque e uma pasta muito pessada, e eu so presiço dela para o deselvolvimento , depois que meu site estiver 
pronto ja nao presiso.

# 5° crie uma caminho no json para executar o sass.
adciono o codigo "sass":"sass src/estilos.scss dist/estilos.css --watch",
no json assim quando eu executar o (npm run sass --watch) ele vai atualizar minha pagina quando,
for feito alguma alteraçao no css.

# 6° execute o npm run sass --watch

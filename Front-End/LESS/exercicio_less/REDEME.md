### Configunado o LESS

# 1° npm install -g less

# 2° npm init -y

# 3° npm install --save-dev less

# 4° .gitigone -> node_modules  

# 5° inicie seu projeto normaL COM A PAGINA HTML
CRIE UMA PASTA SRC --> STYLE --> MAIN.LESS

# 6° rode o comando 
npm run less

# 7° estale o plugins para executar o watch atualizar o css altomaticamente
npm i -g less-watch-compiler

# 8° estale a depedencia
npm i --save-dev less-watch-compiler

# 9° altere o script do less para 
"less":"less-watch-compiler ./src/style ./build/style main.less",



### compilando o sass com o gulp

## 1° execute o json
npm init -y

## 2° estale o gulp como depedencia
estale o gulp na pasta do projeto como ferramenta de deselvolvimento
npm install --save-dev gulp

## 3° adcione o script no json 
"gulp":"gulp"

## 4° adcione a pasta node_modules no .gitignore

## 5° estale a dependencia do sass
npm install --save-dev gulp-sass


## 6° estakle outra dependencia dp sass
npm install --save-dev sass

## 7° estale outra dependecia, esta depencia vai me ajunda a achar o erro no
## devtools do google vai me indicar a linha exeta do erro do codigo
npm install save--dev gulp-sourcemaps

## 8° Minificando JS com o Gulp
npm install --save-dev gulp-uglify

## 9° para execulta o comando depois que ja ecrivi meu codigo executo
npm rum gulp javascript

## 10 se eu quizer ofuscar meu codigo para que outros nao consiga ler posso usar um pluguin para isso
npm install --save-de gulp-obfuscate

## 11° agora vamos estalar outro pluguin para comprimir imagens importante que seja esta versao senao vai dar erro
npm install --save-dev gulp-imagemin@7.1.0 --legacy-peer-deps

# 12° para compilar as imagens basta rodar o 
npm run gulp images
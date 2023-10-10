# INICIALIZANDO PROJETO PARCEL

1° Inicializando projeto 
# npm init -y

2° Instalando dependencias.
# npm install --save-dev parcel

Se der erro tenho uma versao anterior
# npm install --save-dev parcel --legacy-peer-deps


3° crie uma pasta src com os arquivos detro
# src-->script-->main.js
# src-->styles-->main.scss
# src-->index.html


4° Crie o o executavel de PARCEL no Json

# "dev":"parcel src/index.html src/styles/main.scss src/scripts/main.js",

agora execute o comando 
# npm run dev

5° Posso trabalha agora no  local host nao presiso dolive serve
# http://localhost:1234

6° Crie um arquivo parcel config
# sharp.config.json

7° configurando a a qualidade da imagens, vai no arquivo sharp.config.json e adicione
# {
#    "png":{
#        "quality": 75
#    }
# }

8° no index.html posso chamar meus arquivos diretos exeplo posso chamar o link css, chamar o .scss direto

9° Crie o .gitigone e adcione

# .parcel-cache
# dist
# node_modules
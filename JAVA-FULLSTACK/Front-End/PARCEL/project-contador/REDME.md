# INICIALIZANDO PROJETO PARCEL UTULIZANDO o NPM OU YARN

1° Inicializando projeto 
# npm init -y
# yarn init -y

2° Instalando dependencias.
# npm install --save-dev parcel
# yarn add --dev parcel 

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
# yarn dev

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

## Adcionando o CDN de efeitos

1° adcione o link do css no head
# <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

2° adcione o script
# <script src="https://unpkg.com/aos@next/dist/aos.js"></script>

adcione o arquivo src-->main.js
#  AOS.init();

3° Para aplicar o efeito adciono o elemento (data-aos="nome-do-efeito") na dic oou no elemento que quero que sofra a animacao. 
# data-aos="fade-right"

# finalizaco do projeto
para subir na vercel adcione o build no json
# "build":"parcel build src/index.html",

e apage a 
# "main": "index.js",
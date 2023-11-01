# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Configurando o react
 
# 1° iniciando projeto
  npm init vite@latest

# 2° Selecione --> react  --> javascript

# 3° inicie o projeto seguindo os passo indicados no promprt

# 4° Apague o arquino index.css e seu caminho no main.jsx

# 5° apague todo o conteudo que esta dentro do app.jsx deixando somente o return mais nada, deixe somente as funcoes app() apague todas as importacoes.

### =========== IMPORTACOES ==========

crier um arquivo qualquerNome.js

para exporta possi usar a o export exemplo:
const PI = 3.14;

//Para exporta o arquivos utilizo o codigo abaixo
export {
    PI
}

# agora vai em main.jsx e adcione o 
import {} from './importandoArquivos'


### Outra maneira de exporta
cont nomes = ['Theo','Thomas','Alex']

export default nomes;

# agora vai em main.jsx e adcione o 
import nomes from './outraManeiraDeExporta.jsx'


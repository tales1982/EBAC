### Bootstrap code 

## ===== HEADER ======

# 1° navbar
Indica que você está definindo uma barra de navegação usando o Bootstrap.

# 2° navbar-expand-lg
Esta classe define o comportamento de expansão da barra de navegação em dispositivos de tamanho grande (large). Isso significa que a barra de navegação terá um comportamento de expansão ou recolhimento quando a largura da tela for maior que o ponto de interrupção definido para dispositivos grandes.

# 3° sticky-top
Essa classe é usada para tornar a barra de navegação fixa no topo da página, mesmo quando o usuário rola o conteúdo. Isso garante que a barra de navegação permaneça visível o tempo todo, melhorando a experiência do usuário.

# 4° container
Cria um contêiner com margens laterais controladas para o conteúdo da barra de navegação.

# 5° navbar-brand
Estiliza e posiciona o texto "Lux-Resto" como a identificação da marca na barra de navegação.

# 6° nav
Define que você está criando um conjunto de itens de navegação.

# 7° nav-pills
Estiliza os itens de navegação como botões de pílulas, realçando o item ativo.

# 8° nav-item
Define cada item individual dentro da lista de navegação.

# 9° fw-bold
Aplica negrito ao texto do item de navegação.

# 10° nav-link
Estiliza o link de navegação dentro de um item.

# 11° active 
Marca o link como ativo, ressaltando visualmente o item de navegação.

# 12° bi bi-house-door
Classe para incluir um ícone de porta de casa da biblioteca Bootstrap Icons.

### =========== Margin and padding e Otros =============

## ==== Margin ====
# 1° m 
para classes que definem margem

# 2° mt-1 até mt-5 
para classes que definem margem superior

# 3° mb-1 ate mb-5
para classes que definem margem inferior 

# 4° ms-1 até ms-5
(início) para classes que definem margem esquerda 

# 5° me-1 até me-5
(fim) para classes que definem margem direita 

# 6° mx-1 até mx-5
para classes que definem ambos *-esquerda e *-direita

# 7° my-1 até my-5
para classes que definem ambos *-superior e *-inferior

## ==== Padding ====

# 1° p 
para classes que definem preenchimento (padding)

# 2° pt-1 até pt-5 
para classes que definem preenchimento (padding) superior

# 3° pb-1 ate pb-5
para classes que definem preenchimento (padding) inferior 

# 4° ps-1 até ps-5
(início) para classes que definem preenchimento (padding) esquerda 

# 5° pe-1 até pe-5
(fim) para classes que definem preenchimento (padding) direita 

# 6° px-1 até px-5
para classes que definem ambos *-esquerda e *-direita

# 7° py-1 até py-5
para classes que definem ambos *-superior e *-inferior

# ============ centralizar texto e divs fonts ==============

# 1° text-center
centralizar meu texto no meio da minha div.

# 2° class="d-block w-100"
Fais com que minha imagem ou outros elementos ocupe 100% da minha div, evitando que utrapasse a div.

# 3° rounded
cria bordas aredondadas na div, imagens.

# 4° fs-1 ate fs-5 Font size
Serve para almentar e diminuir minha fontes

# 5° fw-bold
Aplica o efeito de font-weight: bold;

### ===== Menu Hamburg com bootstrap INICIO ======

# 1° navbar-toggler-icon
Criar o icone de menu hamburg, dentro da tag span

# 2° navbar-toggler
Na tag button adcione a classe navbar-toggler

# 3° class="navbar-collapse collapse" id="menu-navegacao"
Na tag (nav) adiciona a class="navbar-collapse collapse" id="menu-navegacao"

# 5° data-bs-toggle="collapse" data-bs-target="#menu-navegacao"
Na tag do butao adicione este atributo data-bs-toggle="collapse" data-bs-target="#menu-navegacao" que vai fazer o ligamento com meu id menu-navegacao.

# 6° d-block
para que meu ul fique um abaixo do outro adciona a clase d-block no (ul)
assim minha lista de links vai ficar um abaixo do outro, vou ter um problema com o link na resposividade para conserta isso adico o breack point abaixo

# 7° d-md-flex
Na tag (ul) adicione o breack point para que quando minha tela for maior que a tela do tablet ou celular o menu hamburg desapareça.

# 8° justify-content-end
Na tag (nav) aplique a class justify-content-end para que meu link fique separo meu titulo do site no meu casso o (h1)

### ============ Inicio do Carousel ============

# 1° <div class="carousel slide" data-bs-ride="carousel" id="butao-carousel">: 
Este é o elemento principal do carrossel. A classe carousel indica que é um carrossel Bootstrap. data-bs-ride="carousel" define que o carrossel é controlado automaticamente para alternar os slides. O id="butao-carousel" é usado como o alvo para os controles e indicadores do carrossel.

# 2° carousel-inner: 
Este é o contêiner que envolve os itens do carrossel.

# 3° carousel-item active e data-bs-interval: 
Cada carousel-item contém um slide do carrossel. A classe active indica qual slide está inicialmente ativo. data-bs-interval="3000" define o intervalo de troca entre os slides em milissegundos (neste caso, 3000 ms ou 3 segundos).

# 4° Botões de Navegação (carousel-control-prev e carousel-control-next): 
Esses botões permitem ao usuário navegar entre os slides anteriores e próximos. O atributo data-bs-target especifica o alvo do carrossel que eles controlam.

# 5° Indicadores de Slide (carousel-indicators): 
Os botões dentro deste elemento são usados ​​para indicar os diferentes slides no carrossel. O atributo data-bs-target aponta para o carrossel que eles estão vinculados, e o data-bs-slide-to indica o índice do slide correspondente.


### ====== Para que meu menu fique macando qual a sectio que estou navegando =======

# 1° <div data-bs-spy="scroll" data-bs-target="cabecalho">
Crie uma nova div com esse atributos e coloque minha section detro

# 2° Adicione im id no header id="cabecalho"
tenho que adciona um id no cabecario

# 3° adciono o id da minha section que estou navegando no meu link (a) da lista da nav.
exemplo estou na section sobr restaurante entao adiciono o id="sobre-o-restaurante", pronto agora quando eu decer a barra de rolagem o menu vai ficar marcado na section que esto.


### Section do Cardapio

# 1° crie uma linha:
para criar minha section de cardapio 1° criu uma linha com um aside que vai acupar 2 coluna, e e outra div que vai ocupar 10 colunas.

# 2° Cri uma classe nav nav-pills flex-colum dentro de aside:
Usando o flex colum fasso com que meu menu fique em uma coluna  | , por padrao ele vem em linha --.

# 3° data-bs-smooth-scroll="true"
A propriedade data-bs-smooth-scroll="true" é usada para ativar o scroll suave (smooth scroll) em links de navegação âncora (links que apontam para seções específicas em uma página) usando o Bootstrap. O scroll suave é uma técnica de animação que faz com que a página role suavemente até a posição desejada, em vez de pular imediatamente para a âncora.

Quando você aplica data-bs-smooth-scroll="true" a um link de navegação, o Bootstrap aplica a funcionalidade de scroll suave a esse link, criando uma animação de rolagem suave ao clicar no link e navegar para a seção correspondente na página.

Exemplo de uso:

html
Copy code
<a href="#section-id" data-bs-smooth-scroll="true">Ir para a seção</a>
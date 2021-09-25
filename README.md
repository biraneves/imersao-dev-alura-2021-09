# 👨🏻‍💻 Imersão Dev - Alura - set./2021 💻

Repositório para publicação das entregas da **Imersão Dev**.

## 🤿 Aula 1

### Calculadora de média 🧮

> [Resolução publicada no CodePen](https://codepen.io/b1r4n3v35/full/rNwwqQR)

<p align="center"><img width="525" alt="133179163-b0f47c1f-8f8a-417b-8536-a47e02504f22" src="https://user-images.githubusercontent.com/83148400/133252127-f8c6c270-fe6d-4d84-94d6-869288f93811.png"></p>

### Desafios desta aula 🤔

- ✅ Dependendo da nota, mostrar se a aluna ou aluno foi reprovado(a) ou não.
- ✅ Alterar o fundo da tela da maneira que achar mais legal.
- ✅ Imprimir na própria página, em vez de imprimir no console.
- ✅ Criar um conversor de temperatura Celsius e Fahrenheit.
    - _Apresentado logo abaixo._
- ❌ Colocar a conta inteira da média em apenas uma linha.
    - _Não fiz dessa maneira por não achar adequado; em vez disso, fiz o cálculo da média em uma função._

### Conversor de temperatura 🌡️

> [Resolução publicada no CodePen](https://codepen.io/b1r4n3v35/full/XWgamZb)

<p align="center"><img src="https://user-images.githubusercontent.com/83148400/133280471-d524075d-e63b-49a1-b4d4-7e5aa7be49d4.png"></p>

## 🤿 Aula 2

### Conversor de moedas 💰

> [Resolução publicada no CodePen](https://codepen.io/b1r4n3v35/full/yLXzYLq)

<p align="center"><img src="https://user-images.githubusercontent.com/83148400/133340512-bff3cf72-f915-4541-9eff-20512697f688.png"></p>

### Desafios desta aula 🤔

- ✅ Adicionar outras moedas para converter.
- ✅ Conversor de quilômetro para ano-luz e verificar o tempo que demora para ir de uma estrela a outra.
    - _Descrito abaixo_
- ✅ Conversor de temperatura.
    - _Ver acima._
- ✅ Adicionar uma linha ao projeto desenvolvido para que apareça o valor em bitcoin.

### Viagens interestelares 🌟

> [Resolução publicada no CodePen](https://codepen.io/b1r4n3v35/full/qBjPxKg)

Dada uma distância interestelar em quilômetros, apresentar quanto tempo se demora para viajar de uma estrela a outra, à velocidade da luz. Vale notar que 1 ano-luz equivale a aproximadamente 10 trilhões de quilômetros. Foi uma decisão minha não usar valores em notação científica; portanto, a distância em quilômetros precisa ser de 10 milhões para cima.

<p align="center"><img src="https://user-images.githubusercontent.com/83148400/133350092-287b39c4-d4b6-4de2-bb33-ab19665fec67.png"></p>

## 🤿 Aula 3

### Mentalista 💭

> [Resolução publicada no CodePen](https://codepen.io/b1r4n3v35/full/wvepaGb)

<p align="center"><img width="404" alt="Captura de Tela 2021-09-17 às 08 22 09" src="https://user-images.githubusercontent.com/83148400/133774515-cdda17e2-f267-483b-bbb7-bac3746708ad.png"></p>

### Desafios desta aula 🤔

- ✅ Adicionar um número de tentativas para a pessoa tentar acertar e imprimir a resposta no final.
- ✅ Quando a pessoa errar, deixar na mensagem se o número chutado é maior ou menor que o número secreto.
- ✅ Pesquisar e aprender a diferença entre == e ===.
    - _São dois tipos de comparativos de igualdade: a **igualdade** e a **igualdade estrita**. A primeira tenta converter os valores, se for o caso, para comparar os operandos; nessa situação, 1 == '1' retornaria **true**. A segunda compara os operandos sem convertê-los, considerando também a igualdade de tipos; dessa forma, 1 === '1' retornaria **false**, por estar comparando um número com uma string._

## 🤿 Aula 4

Armazenar um certo número de dados (neste caso, filmes) em uma lista (_array_), bem como manipular esses dados.

### AluraFlix - v.1 🎬

> [Resolução publicada no CodePen](https://codepen.io/b1r4n3v35/full/JjJpWzK)

<p align="center"><img src="https://user-images.githubusercontent.com/83148400/133857238-d2536619-798b-44e3-9268-b0b2a14e2d5e.png"></p>

### Desafios desta aula 🤔

- ✅ Escolher o seu tema preferido para adaptar ao nosso código.
    - _Resolvi fazer com filmes, mesmo, pois trata-se de meu tema favorito._
- ✅ Tentar implementar outras versões da estrutura de repetição.
    - _Fiz como exercícios outras implementações, como forEach e while, mas preferi deixar o for.
- ✅ Criar uma condição para não adicionar filmes repetidos, caso eles já tenham sido adicionados anteriormente.
- ✅ Criar um campo e botão para adicionar a imagem pela tela, e não diretamente no código.

## 🤿 Aula 5

Nesta aula, evoluímos o projeto da aula anterior. Como eu já havia concebido a solução com vários dos requerimentos que surgiram depois, não houve grandes mudanças.

### AluraFlix - v.2 🎥

> [Resolução publicada no CodePen](https://codepen.io/b1r4n3v35/full/oNwqzRL)

<p align="center"><img width="989" alt="Captura de Tela 2021-09-19 às 08 11 48" src="https://user-images.githubusercontent.com/83148400/133925474-62ce7b45-c86c-4e44-845a-8cd20166eff4.png"></p>

### Desafios desta aula

- ✅ Criar um botão para remover um filme da tela.
    - _Por limitações do CodePen, acabei criando um link para cumprir o requerimento._
- ❌ Além de colocar a imagem do filme, também adicionar o nome por meio de outro _input_.
    - _Aqui, cumpri o desafio de outra maneira, desde a primeira versão: usei outro input para colocar o link para a entrada sobre o filme no IMDB._
- ✅ Guardar todos os filmes adicionados em uma lista (_array_) e percorrer essa lista toda vez que quiser imprimir ou remover um filme.
    - _Este requerimento está satisfeito desde a primeira versão._
- ❌ Desafio relacionado ao conversor de moedas.
    - _Este desafio está parcialmente satisfeito. Farei a criação das funções em outro momento._

## 🤿 Aula 6

O objetivo desta aula foi o uso de objetos do JavaScript, bem como a criação de código HTML dinâmico.

### Tabela de Classificação 🕹

> [Resolução publicada no CodePen](https://codepen.io/b1r4n3v35/full/RwgePJP)

<p align="center"><img width="1208" alt="Captura de Tela 2021-09-24 às 22 38 33" src="https://user-images.githubusercontent.com/83148400/134753845-259e13f4-a100-4cd4-b4f2-9c3df2ed0f48.png"></p>

### Desafios desta aula

- ❌ Elaborar a seguinte lógica: quando houver empate, automaticamente ajustar o empate para todos os jogadores.
    - _Não desenvolvi esta solução pois não fez sentido para mim. Se estamos mantendo o registro de uma competição com vários jogadores que se enfrentam aos pares, o requisito apresentado não se aplica._
- ❌ Validar se todos os pontos estão fazendo sentido, tanto o número de empates, quanto de derrotas e vitórias.
    - _Também optei por não desenvolver este requisito. Se estamos acompanhando uma competição que ocorre por rodadas, é possível que jogadores estejam em rodadas diferentes._
- ❌ Adicionar a imagem de cada jogador.
    - _A desenvolver._
- ✅ Criar um botão para zerar todos os pontos.
- ✅ Criar um botão e _input_ para adicionar novos jogadores.
- ✅ Utilizar seu jogo preferido para se basear na pontuação da sua tabela de classificação.

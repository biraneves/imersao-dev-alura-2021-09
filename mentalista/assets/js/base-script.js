// Sorteia o número a ser adivinhado
var numeroSecreto = parseInt(Math.random() * 31);

// Número restante de tentativas
var maxTries = 5;

// Elemento de apresentação de mensagens
var elementMessage = document.getElementById("message");

// Troca os botões
function switchButtons() {
  
  if (document.getElementById("guessButton").style.display == "none") {
    
    document.getElementById("guessButton").style.display = "inline";
    document.getElementById("restartButton").style.display = "none";
    
  } else {
    
    document.getElementById("guessButton").style.display = "none";
    document.getElementById("restartButton").style.display = "inline";
    
  }
  
}

// Recoloca o jogo no estado inicial
function restartGame() {
  
  numeroSecreto = parseInt(Math.random() * 31); // Novo número secreto
  maxTries = 5; // Reinicia o número de tentativas
  document.getElementById("number-tries").innerHTML = maxTries; // Apresenta o número de tentativas
  elementMessage.innerHTML = ""; // Apaga a mensagem apresentada ao usuário
  document.querySelector('p[class="tries"]').style.display = "block"; // Reexibe o número de tentativas
  switchButtons(); // Apresenta novamente o botão para chutar
  document.getElementById("guess-number").value = ""; // Apaga o campo de chute
  document.getElementById("guess-number").focus(); // Coloca o cursor no campo de chute
  
}

// Verifica o chute
function checkGuess(userGuess) {
  
  // Verifica se foi feito um chute
  if (userGuess == "") {
    
    // O campo está vazio
    elementMessage.innerHTML = "Você precisa chutar um número!";
    
  } else {
    
    // Foi feito um chute
    var intGuess = parseInt(userGuess);
    
    // Verifica a validade do chute
    if (intGuess < 0 || intGuess > 30) {
      
      // O chute é inválido
      elementMessage.innerHTML = "O número deve estar entre 0 e 30!";
      document.getElementById("guess-number").focus();
      
    } else {
      
      // Temos um chute válido
      if (intGuess < numeroSecreto) {
        
        elementMessage.innerHTML = "O número secreto é maior.";
        document.getElementById("guess-number").focus();
        
      } else if (intGuess > numeroSecreto) {
        
        elementMessage.innerHTML = "O número secreto é menor.";
        document.getElementById("guess-number").focus();
        
      } else {
        
        // O usuário acertou
        elementMessage.innerHTML = "Parabéns!!! Você acertou o número secreto!";
        switchButtons();
        
      }
      
    }
    
    // Diminui o número de tentativas disponíveis
    maxTries--;
    
    // Informa o número de tentativas
    document.getElementById("number-tries").innerHTML = maxTries;
    
  }
  
}

// Contém toda a lógica do jogo, executada quando o botão é clicado
function guessClick() {
  
  // Captura o conteúdo do campo de chute
  var userGuess = document.getElementById("guess-number").value;
  
  if (maxTries > 1)
    checkGuess(userGuess);
  else {
    
    document.querySelector('p[class="tries"]').style.display = "none";
    switchButtons();
    elementMessage.innerHTML = "Oops! Você perdeu!!!<br>O número secreto é " + 
      numeroSecreto + ".";
    
  }
    
  
}
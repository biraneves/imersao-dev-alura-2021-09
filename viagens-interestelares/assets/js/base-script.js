// Contém toda a lógica de conversão e cálculo do tempo
function calculateClick() {
  
    // Elemento de input
    var elementDistance = document.getElementById("distance");
    
    // Elementos de output
    var elementResultParagraph = document.getElementById("result-paragraph");
    
    // Valor a converter
    var distanceInput = elementDistance.value;
    
    // Valor convertido em anos-luz, o que já representa o tempo de viagem
    // à velocidade da luz
    var timeOutput = 0.0;
    
    // Constantes usadas para o cálculo
    const metersPerKilometer = 1000;
    const daysPerYear = 360;
    const hoursPerDay = 24;
    const secondsPerHour = 3600;
    
    if (distanceInput != "") {
      
      // Entrada válida
      timeOutput = (parseFloat(distanceInput)/3.0e8) * metersPerKilometer * (1 / secondsPerHour) *
        (1 / hoursPerDay) * (1 / daysPerYear);
      elementResultParagraph.innerHTML = 'A viagem, na velocidade da luz, dura<br>aproximadamente <span id="result">' +
        timeOutput.toFixed(1) + '</span> anos.';
      
    } else {
      
      // Campo está vazio
      elementResultParagraph.innerHTML = "Informe uma distância (em km).";
      
    }
    
    // Apresenta o resultado
    elementResultParagraph.style.display = "block";
    
}
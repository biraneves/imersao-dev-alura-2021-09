// Atualiza o placeholder do input de acordo com a opção selecionada
function radioClick() {

    // Armazena o valor do botão de rádio selecionado
    var optionSelected = document.querySelector('input[name="convert-amount"]:checked').value;

    // Objeto input onde é informado o valor a ser convertido
    var elementAmount = document.getElementById("amount");

    // Conforme o valor do botão de rádio selecionado, apresenta um texto adequado
    // no campo de input do valor
    switch (optionSelected) {

        case "opt-d2r":
            elementAmount.placeholder = "Informe o valor em dólar";
            break;
        
        case "opt-e2r":
            elementAmount.placeholder = "Informe o valor em euro";
            break;

        case "opt-p2r":
            elementAmount.placeholder = "Informe o valor em libra";
            break;

        default:
            elementAmount.placeholder = "Informe o valor em real";
            break;

    }

}

// Executa toda a lógica de conversão
function conversionButtonClick() {

    // Armazena a opção de conversão selecionada
    var optionSelected = document.querySelector('input[name="convert-amount"]:checked').value;

    // Armazena o valor a converter
    var inputAmount = document.getElementById("amount").value;

    // Elemento de apresentação do resultado
    var elementOutput = document.getElementById("label-amount-output");

    var returnAmount = 0.0; // Valor após a conversão
    var btcAmount = 0.0; // Valor em bitcoin

    // Array com os valores de câmbio
    // TODO: consumir uma API para manter os valores atualizados
    const exchangeRate = {"usd" : 5.234, "eur" : 6.191, "gbp" : 7.25, "btc" : 244182.83};

    if (inputAmount != "") {

        // O campo contém uma entrada válida
        switch (optionSelected) {
        
            case "opt-d2r":
              returnAmount = "R$ " + (parseFloat(inputAmount) * exchangeRate["usd"]).toFixed(2);
              btcAmount = "&#x20bf; " + (parseFloat(inputAmount) * exchangeRate["usd"] / exchangeRate["btc"]).toFixed(6);
              break;
            
            case "opt-r2d":
              returnAmount = "US$ " + (parseFloat(inputAmount) / exchangeRate["usd"]).toFixed(2);
              btcAmount = "&#x20bf; " + (parseFloat(inputAmount) / exchangeRate["btc"]).toFixed(6);
              break;
              
            case "opt-e2r":
              returnAmount = "R$ " + (parseFloat(inputAmount) * exchangeRate["eur"]).toFixed(2);
              btcAmount = "&#x20bf; " + (parseFloat(inputAmount) * exchangeRate["eur"] / exchangeRate["btc"]).toFixed(6);
              break;
            
            case "opt-r2e":
              returnAmount = "&euro; " + (parseFloat(inputAmount) / exchangeRate["eur"]).toFixed(2);
              btcAmount = "&#x20bf; " + (parseFloat(inputAmount) / exchangeRate["btc"]).toFixed(6);
              break;
             
            case "opt-p2r":
              returnAmount = "R$ " + (parseFloat(inputAmount) * exchangeRate["gbp"]).toFixed(2);
              btcAmount = "&#x20bf; " + (parseFloat(inputAmount) * exchangeRate["gbp"] / exchangeRate["btc"]).toFixed(6);
              break;
              
            case "opt-r2p":
              returnAmount = "&pound; " + (parseFloat(inputAmount) / exchangeRate["gbp"]).toFixed(2);
              btcAmount = "&#x20bf; " + (parseFloat(inputAmount) / exchangeRate["btc"]).toFixed(6);
              break;
              
        }

        elementOutput.innerHTML = returnAmount + "<br>" + btcAmount;

    } else {

        // O campo está vazio
        elementOutput.innerHTML = "Informe um valor.";

    }

    // Apresenta o resultado
    elementOutput.style.display = "block";

}
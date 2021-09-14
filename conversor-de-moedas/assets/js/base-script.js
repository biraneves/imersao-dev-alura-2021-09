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


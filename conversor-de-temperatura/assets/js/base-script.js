function radioClick() {

    var optionSelected = document.querySelector('input[name="convert-temperature"]:checked').value;

    if (optionSelected == "opt-c2f")
        document.getElementById("temperature").placeholder = "Informe a temperatura em ºC";
    else
        document.getElementById("temperature").placeholder = "Informe a temperatura em ºF";

}

function celsiusParaFahrenheit(temperaturaCelsius) {

    return (9 * temperaturaCelsius / 5) + 32;

}

function fahrenheitParaCelsius(temperaturaFahrenheit) {

    return 5 * (temperaturaFahrenheit - 32) / 9;

}

function conversionButtonClick() {

    var optionSelected = document.querySelector('input[name="convert-temperature"]:checked').value;
    var returnTemperature = 0.0;

    if (document.getElementById("temperature").value != "") {

        if (optionSelected == "opt-c2f")
            returnTemperature = celsiusParaFahrenheit(parseFloat(document.getElementById("temperature").value)).toFixed(1) + " ºF";
        else
            returnTemperature = fahrenheitParaCelsius(parseFloat(document.getElementById("temperature").value)).toFixed(1) + " ºC";
    
        document.getElementById("label-temperature-output").innerHTML = returnTemperature;

    } else {

        document.getElementById("label-temperature-output").innerHTML = "Informe um valor.";

    }

    document.getElementById("label-temperature-output").style.display = "block";

}
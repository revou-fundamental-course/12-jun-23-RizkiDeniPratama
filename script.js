const tempConvert = () => {
    const temperatureInput = document.getElementById("inputfield").value;
    const tempType = document.getElementById("temptype");
    const valueTemp = tempType.options[tempType.selectedIndex].value;
    console.log(`ini jenis suhu nya === ${valueTemp}`);
    console.log(`ini input value nya === ${temperatureInput}`);
    const celciusToFahrenheit = (value) => {
        let fahrenheit = ((value * 9) / 5 + 32).toFixed(1);
        console.log(`ini nilai fahrenheit = ${fahrenheit}`);
        return fahrenheit;
    };

    const fahrenheitToCelcius = (value) => {
        let celsius = (((value - 32) * 5) / 9).toFixed(1);
        console.log(`ini nilai celcius = ${celsius}`);
        return celsius;
    };

    if (valueTemp == "celcius") {
        document.getElementById("result").innerHTML =
            celciusToFahrenheit(temperatureInput) + "&#176; Fahrenheit";
    } else if (valueTemp == "fahrenheit") {
        document.getElementById("result").innerHTML =
            fahrenheitToCelcius(temperatureInput) + "&#176; Celsius";
    }
};

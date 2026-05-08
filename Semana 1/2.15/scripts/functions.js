function potenciaElectrica() {
    let num1= parseFloat(document.getElementById("Resistencia").value);
    let num2= parseFloat(document.getElementById("Corriente").value);
    const Voltage= num1 * num2;
    const Potencia= Voltage * num2;
    document.getElementById("formulaVoltaje").textContent= "V = R * I";
    document.getElementById("resultadoVoltaje").textContent= "El voltaje (V) es: " + Voltage + " volts";
    document.getElementById("formulaPotencia").textContent= "P = V * I";
    document.getElementById("resultado").textContent= "La potencia elécrica es: " + Potencia + " watts";
};
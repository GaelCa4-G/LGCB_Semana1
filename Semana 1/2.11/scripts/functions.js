function precioFinal() {
    let num1= parseFloat(document.getElementById("Kilowatts").value);
    let num2= parseFloat(document.getElementById("Precio").value);
    const result= num1 * num2;
    document.getElementById("resultado").textContent= "El resultado es: " + result;
};
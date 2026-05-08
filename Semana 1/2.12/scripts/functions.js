function precioFinal() {
    let num1= parseFloat(document.getElementById("Precio").value);
    const result= (num1 * (1-0.20))*1.15;
    document.getElementById("resultado").textContent= "El resultado es: " + result;
};
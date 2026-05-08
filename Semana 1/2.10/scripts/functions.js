function precioFinal() {
    let num1= parseFloat(document.getElementById("Largo").value);
    let num2= parseFloat(document.getElementById("Ancho").value);
    let num3= parseFloat(document.getElementById("Altura").value);
    let num4= parseFloat(document.getElementById("Precio").value);
    const result= (num1 * num2 * num3) * num4;
    document.getElementById("resultado").textContent= "El resultado es: " + result;
};
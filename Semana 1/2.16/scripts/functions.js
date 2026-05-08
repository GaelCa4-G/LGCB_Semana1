function areaFinal() {
    let num1= parseFloat(document.getElementById("Base").value);
    let num2= parseFloat(document.getElementById("Altura").value);
    const result= num1 * num2;
    document.getElementById("resultado").textContent= "El resultado es: " + result;
};
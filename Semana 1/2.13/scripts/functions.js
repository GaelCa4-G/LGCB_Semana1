function salarioFinal() {
    let num1= parseFloat(document.getElementById("Salario").value);
    const result= ((12 * 4) * 0.15) * (num1 / 4);
    document.getElementById("resultado").textContent= "El resultado es: " + result;
};
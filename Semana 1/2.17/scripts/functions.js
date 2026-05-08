function promedioFinal() {
    let num1= parseFloat(document.getElementById("Examen1").value);
    let num2= parseFloat(document.getElementById("Examen2").value);
    let num3= parseFloat(document.getElementById("Examen3").value);
    const result= (num1 * 0.25) + (num2 * 0.25) + (num3 * 0.5);
    document.getElementById("resultado").textContent= "El promedio es: " + result;
};
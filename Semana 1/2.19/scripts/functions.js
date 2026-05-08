function costoLlamada() {
    let num1= parseFloat(document.getElementById("tiempo").value);
    let num2= parseFloat(document.getElementById("Costo").value);
    const result= num1 * num2;
    document.getElementById("resultado").textContent= "El costo de la llamada es: " + result;
};
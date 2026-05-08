function precioFinal() {
    let num1= parseFloat(document.getElementById("Dias").value);
    let num2= parseFloat(document.getElementById("Comida").value);
    let num3= parseFloat(document.getElementById("Hotel").value);
    const Comidas= (num1 * num2);
    document.getElementById("comida").textContent= "Comidas: " + Comidas;
    const Hospedaje= (num1 * num3);
    document.getElementById("hotel").textContent= "Hospedaje: " + Hospedaje;
    const Extras= 100;
    document.getElementById("extra").textContent= "Extras: " + Extras;
    const result= Comidas + Hospedaje + Extras;
    document.getElementById("resultado").textContent= "Los gastos totales son: " + result;
};
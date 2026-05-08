function precioFinal() {
    let num1= parseFloat(document.getElementById("PersonasExtra").value);
    let num2= parseFloat(document.getElementById("Desayuno").value);
    let num3= parseFloat(document.getElementById("Dias").value);
    let precioHabitacion=1400;
    const personas= (num1 * 240* num3);
    document.getElementById("personas").textContent= "Costo por personas extra: " + personas;
    const comida= num2 * num3;
    document.getElementById("comida").textContent= "Costo por desayuno: " + comida;
    const totalSinImpuestos= (precioHabitacion * num3) + personas + comida;
    document.getElementById("totalSinImpuestos").textContent= "Total sin impuestos: " + totalSinImpuestos;
    const resultado= totalSinImpuestos * 0.16;
    const precioFinal= totalSinImpuestos + resultado;
    document.getElementById("resultado").textContent= "Precio final con impuestos: " + precioFinal;
};
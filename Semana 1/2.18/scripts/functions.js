function finalLive() {
    let day= parseFloat(document.getElementById("Day").value);
    let month= parseFloat(document.getElementById("Month").value);
    let year= parseFloat(document.getElementById("Year").value);

    let actualDay= parseFloat(document.getElementById("ActualDay").value);
    let actualMonth= parseFloat(document.getElementById("ActualMonth").value);
    let actualYear= parseFloat(document.getElementById("ActualYear").value);

    const TotalDaysBirth= (year * 365.25) + (month * 30.44) + day;
    const TotalActualDays= (actualYear * 365.25) + (actualMonth * 30.44) + actualDay;
    const less = TotalActualDays - TotalDaysBirth;

    const TotalYears = (less / 365.25);
    const TotalMonths = (less / 30.44);
    const TotalWeeks = (less / 7);
    const TotalHours = (less * 24);

    document.getElementById("Hours").textContent = "Horas vividas: " + TotalHours;
    document.getElementById("Days").textContent = "Días totales: " + less;
    document.getElementById("Weeks").textContent = "Semanas aproximadas: " + TotalWeeks;
    document.getElementById("Months").textContent = "Meses aproximados: " + TotalMonths;
    document.getElementById("Years").textContent = "Años cumplidos: " + TotalYears;
}; 
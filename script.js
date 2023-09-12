window.onload = function () {
    let recordatorioCelular = confirm("¿Desea recibir un mensaje de recordatorio de su cita en su celular?");

    if (recordatorioCelular) {
        let numeroCelular;

        do {
            numeroCelular = prompt("Por favor, ingrese su número de celular (solo números):");
        } while (!/^\d+$/.test(numeroCelular));

        alert(`Se enviará un mensaje de recordatorio a ${numeroCelular}. ¡Gracias!.No se olvide por favor de completar el formulario`);

        document.getElementById("formulario").style.display = "block";
    } else {
        alert("No se enviará un mensaje de recordatorio.");
    }
};

// Evento para manejar el envío del formulario
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();
    // Prevenir el envío del formulario para fines de demostración

    // Aquí puedes agregar la lógica para enviar el formulario con el número de celular, si es necesario
});

/* let fechaCita = prompt("Por favor, ingrese la fecha y hora de su cita (Ejemplo: 10/09 a las 15:30):");
if (fechaCita) {
  alert(`Su cita está programada para el ${fechaCita}. ¡Gracias!`);
} */
/* let recordatorioCelular = confirm("¿Desea recibir un mensaje de recordatorio de su cita en su celular?");

if (recordatorioCelular) {
    let numeroCelular;

    do {
        numeroCelular = prompt("Por favor, ingrese su número de celular (solo números):");
    } while (!/^\d+$/.test(numeroCelular));

    alert(`Se enviará un mensaje de recordatorio a ${numeroCelular}. ¡Gracias!`);
} else {
    alert("No se enviará un mensaje de recordatorio.");
} */

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

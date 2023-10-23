function solicitarNumeroCelular() {
    let recordatorioCelular = confirm("¿Desea recibir un mensaje de recordatorio de su cita en su celular?");

    if (recordatorioCelular) {
        let numeroCelular;

        do {
            numeroCelular = prompt("Por favor, ingrese su número de celular (solo números):");
        } while (!/^\d+$/.test(numeroCelular));
        localStorage.setItem('numeroCelular', numeroCelular);
        alert(`Se enviará un mensaje de recordatorio a ${numeroCelular}. ¡Gracias! .Por favor recuerde llenar el formulario de consulta `);

    } else {
        alert("No se enviará un mensaje de recordatorio.");
    }
}
solicitarNumeroCelular(); 

let formulario = document.getElementById("miFormulario");
let infoContainer = document.getElementById('infoContainer');

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let email = document.getElementById("email").value.trim();

    if (nombre.length <= 2 || /\d/.test(apellido) || !/^\d+$/.test(telefono) || !/^.+@.+\..+$/.test(email)) {
        alert("Por favor, ingrese datos válidos.");
        return;
    }

    let formData = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email,
    };

    let baseDeDatos = JSON.parse(localStorage.getItem('baseDeDatos')) || [];
    baseDeDatos.push(formData);
    localStorage.setItem('baseDeDatos', JSON.stringify(baseDeDatos));

    infoContainer.innerHTML = '';
    baseDeDatos.forEach(function (formData, index) {
        let infoDiv = document.createElement('div');
        infoDiv.classList.add('infoEntry');
        infoDiv.innerHTML = `<h3>Entrada ${index + 1}:</h3>
            <p>Nombre: ${formData.nombre}</p>
            <p>Apellido: ${formData.apellido}</p>
            <p>Teléfono: ${formData.telefono}</p><br/>
            <p>Correo Electrónico: ${formData.email}</p>`;
        infoContainer.appendChild(infoDiv);
    });

    formulario.reset();
});

// Mostrar los datos almacenados al cargar la página
let baseDeDatos = JSON.parse(localStorage.getItem('baseDeDatos')) || [];
infoContainer.innerHTML = '';
baseDeDatos.forEach(function (formData, index) {
    let infoDiv = document.createElement('div');
    infoDiv.classList.add('infoEntry');
    infoDiv.innerHTML = `<h3>Entrada ${index + 1}:</h3>
        <p>Nombre: ${formData.nombre}</p>
        <p>Apellido: ${formData.apellido}</p>
        <p>Teléfono: ${formData.telefono}</p><br/>
        <p>Correo Electrónico: ${formData.email}</p>`;
    infoContainer.appendChild(infoDiv);
});

function solicitarNumeroCelular() {
    let recordatorioCelular = confirm("¿Desea recibir un mensaje de recordatorio de su cita en su celular?");

    if (recordatorioCelular) {
        let numeroCelular;

        do {
            numeroCelular = prompt("Por favor, ingrese su número de celular (solo números):");
        } while (!/^\d+$/.test(numeroCelular));

        alert(`Se enviará un mensaje de recordatorio a ${numeroCelular}. ¡Gracias! .Por favor recuerde llenar el formulario de consulta `);

    } else {
        alert("No se enviará un mensaje de recordatorio.");
    }
}
solicitarNumeroCelular();

function validarFormulario() { // Obtener valores de los campos
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var email = document.getElementById("email").value.trim();

    // Validar nombre (al menos 2 caracteres)
    if (nombre.length < 2) {
        alert(`El nombre debe tener al menos 2 caracteres.`);
        return false;
    }
    // Validar el apellido (Solo letras)
    if (/\d/.test(apellido)) {
        alert("El apellido no debe contener números.");
        return false;
    }

    // Validar teléfono (solo números)
    if (!/^\d+$/.test(telefono)) {
        alert("El número de contacto solo debe contener números.");
        return false;
    }

    // Validar correo electrónico (contiene "@" y al menos un carácter antes y después de "@")
    if (!/^.+@.+\..+$/.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    return true;
}

function enviarFormulario() { // Obtener los valores de los campos
    var nombre = document.querySelector('#nombre').value;
    var apellido = document.querySelector('#apellido').value;
    var telefono = document.querySelector('#telefono').value;
    var email = document.querySelector('#email').value;

    // Obtener las elecciones de los checkboxes
    var turnos = document.querySelector('input[name="turnos"]').checked;
    var tratamiento = document.querySelector('input[name="tratamiento"]').checked;
    var consulta = document.querySelector('input[name="consulta"]').checked;

    // Crear un objeto con los datos del formulario
    var formData = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email,
        eleccionTurnos: turnos ? "Turnos" : "",
        eleccionTratamiento: tratamiento ? "Tratamiento" : "",
        eleccionConsulta: consulta ? "Consultas" : ""
    };

    // Obtener la base de datos existente o crear una nueva
    var baseDeDatos = JSON.parse(localStorage.getItem('baseDeDatos')) || [];

    // Agregar los datos del formulario a la base de datos
    baseDeDatos.push(formData);

    // Almacenar la base de datos actualizada en el localStorage
    localStorage.setItem('baseDeDatos', JSON.stringify(baseDeDatos));

    // Mostrar un mensaje de éxito (esto se puede personalizar)
    alert("Formulario enviado con éxito");

    // Evitar que el formulario realice un envío real
    return false;
}
// Función para mostrar la información almacenada
function mostrarInformacionAlmacenada() {
    // Obtener la base de datos desde el localStorage
    var baseDeDatos = JSON.parse(localStorage.getItem('baseDeDatos')) || [];

    // Mostrar la información almacenada (puedes personalizar cómo se muestra)
    var infoContainer = document.getElementById('infoContainer');
    infoContainer.innerHTML = ''; // Limpiar el contenedor

    baseDeDatos.forEach(function (formData, index) {
        var infoDiv = document.createElement('div');
        infoDiv.classList.add('infoEntry');
        infoDiv.innerHTML = `<h3>Entrada ${index + 1}:</h3>
        <p>Nombre: ${formData.nombre} ${formData.apellido}</p>
        <p>Teléfono: ${formData.telefono}</p>
        <p>Email: ${formData.email}</p>
        <p>Elecciones: ${formData.eleccionTurnos}, ${formData.eleccionTratamiento}, ${formData.eleccionConsulta}</p>`;
        infoContainer.appendChild(infoDiv);
    });
}
// Función para agregar un nuevo elemento a la base de datos
function agregarNuevoElemento() {
    var nombreNuevo = prompt("Ingrese un nuevo nombre:");
    var apellidoNuevo = prompt("Ingrese un nuevo apellido:");
    var telefonoNuevo = prompt("Ingrese un nuevo número de teléfono:");
    var emailNuevo = prompt("Ingrese un nuevo correo electrónico:");

    var nuevoFormData = {
        nombre: nombreNuevo,
        apellido: apellidoNuevo,
        telefono: telefonoNuevo,
        email: emailNuevo
    };

    var baseDeDatos = JSON.parse(localStorage.getItem('baseDeDatos')) || [];
    baseDeDatos.push(nuevoFormData);
    localStorage.setItem('baseDeDatos', JSON.stringify(baseDeDatos));
    mostrarInformacionAlmacenada();
}

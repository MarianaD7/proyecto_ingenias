/* function solicitarNumeroCelular() {
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
} */
/* solicitarNumeroCelular(); */

// Obtener el formulario por su ID
let formulario = document.getElementById("miFormulario");
// Agregar un evento "submit" al formulario
formulario.addEventListener("submit", function (e) { // Agregar un evento "submit" al formulario
    e.preventDefault();

    // Obtener los valores de los campos
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let email = document.getElementById("email").value.trim();

    // Validar nombre (mas de 2 caracteres)
    if (nombre.length <= 2) {
        alert(`El nombre debe tener más de 2 caracteres.`);
        return;
    }

    // Validar el apellido (Solo letras)
    if (/\d/.test(apellido)) {
        alert("El apellido no debe contener números.");
        return;
    }

    // Validar teléfono (solo números)
    if (!/^\d+$/.test(telefono)) {
        alert("El número de contacto solo debe contener números.");
        return;
    }

    // Validar correo electrónico (contiene "@" y al menos un carácter antes y después de "@")
    if (!/^.+@.+\..+$/.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return;
    }

});
function enviarFormulario() { // Obtener los valores de los campos
    let nombre = document.querySelector('#nombre').value;
    let apellido = document.querySelector('#apellido').value;
    let telefono = document.querySelector('#telefono').value;
    let email = document.querySelector('#email').value;

    // Obtener las elecciones de los checkboxes
    let turnos = document.querySelector('input[name="turnos"]').checked;
    let tratamiento = document.querySelector('input[name="tratamiento"]').checked;
    let consulta = document.querySelector('input[name="consulta"]').checked;

    // Crear un objeto con los datos del formulario
    let formData = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email,
        eleccionTurnos: turnos ? "Turnos" : "",
        eleccionTratamiento: tratamiento ? "Tratamiento" : "",
        eleccionConsulta: consulta ? "Consultas" : ""
    };

    // Obtener la base de datos existente o crear una nueva
    let baseDeDatos = JSON.parse(localStorage.getItem('baseDeDatos')) || [];

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
function mostrarInformacionAlmacenada() { // Obtener la base de datos desde el localStorage
    let baseDeDatos = JSON.parse(localStorage.getItem('baseDeDatos')) || [];

    // Mostrar la información almacenada (puedes personalizar cómo se muestra)
    let infoContainer = document.getElementById('infoContainer');
    infoContainer.innerHTML = ''; // Limpiar el contenedor

    baseDeDatos.forEach(function (formData, index) {
        let infoDiv = document.createElement('div');
        infoDiv.classList.add('infoEntry');
        infoDiv.innerHTML = `<h3>Entrada ${
            index + 1
        }:</h3>
        <p>Nombre: ${
            formData.nombre
        } ${
            formData.apellido
        }</p>
        <p>Teléfono: ${
            formData.telefono
        }</p>
        <p>Email: ${
            formData.email
        }</p>
        <p>Elecciones: ${
            formData.eleccionTurnos
        }, ${
            formData.eleccionTratamiento
        }, ${
            formData.eleccionConsulta
        }</p>`;
        infoContainer.appendChild(infoDiv);
    });
}
// Función para agregar un nuevo elemento a la base de datos
function agregarNuevoElemento() {
    let nombreNuevo = prompt("Ingrese un nuevo nombre:");
    let apellidoNuevo = prompt("Ingrese un nuevo apellido:");
    let telefonoNuevo = prompt("Ingrese un nuevo número de teléfono:");
    let emailNuevo = prompt("Ingrese un nuevo correo electrónico:");

    let nuevoFormData = {
        nombre: nombreNuevo,
        apellido: apellidoNuevo,
        telefono: telefonoNuevo,
        email: emailNuevo
    };

    let baseDeDatos = JSON.parse(localStorage.getItem('baseDeDatos')) || [];
    baseDeDatos.push(nuevoFormData);
    localStorage.setItem('baseDeDatos', JSON.stringify(baseDeDatos));
    mostrarInformacionAlmacenada();
}

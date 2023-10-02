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

// Obtener referencias a los campos del formulario
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const telefonoInput = document.getElementById('telefono');
const consultaInput = document.getElementById('consulta');

// Escuchar el evento de envío del formulario
const formulario = document.querySelector('form');
formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    // Prevenir el envío por defecto

    // Obtener los valores ingresados por el usuario
    const nombre = nombreInput.value;
    const email = emailInput.value;
    const telefono = telefonoInput.value;
    const consulta = consultaInput.value;

    // Crear un objeto con la información
    const paciente = {
        nombre,
        email,
        telefono,
        consulta
    };

    // Convertir el objeto a JSON y almacenarlo en LocalStorage
    localStorage.setItem('paciente', JSON.stringify(paciente));

    // Limpiar los campos del formulario
    nombreInput.value = '';
    emailInput.value = '';
    telefonoInput.value = '';
    consultaInput.value = '';

    // Mostrar la información al usuario (puedes hacerlo en una sección designada)
    mostrarInformacionAlUsuario(paciente);
});

function mostrarInformacionAlUsuario(paciente) { // Obtener el elemento donde deseas mostrar la información
    const infoContainer = document.getElementById('info-container');

    // Crear elementos para mostrar la información
    const nombreElement = document.createElement('p');
    nombreElement.textContent = `Nombre: ${
        paciente.nombre
    }`;

    const emailElement = document.createElement('p');
    emailElement.textContent = `Email: ${
        paciente.email
    }`;

    const telefonoElement = document.createElement('p');
    telefonoElement.textContent = `Teléfono: ${
        paciente.telefono
    }`;

    const consultaElement = document.createElement('p');
    consultaElement.textContent = `Consulta: ${
        paciente.consulta
    }`;

    // Agregar los elementos al contenedor
    infoContainer.innerHTML = ''; // Limpiar contenido previo
    infoContainer.appendChild(nombreElement);
    infoContainer.appendChild(emailElement);
    infoContainer.appendChild(telefonoElement);
    infoContainer.appendChild(consultaElement);
}
// Leer la estructura de datos JSON desde LocalStorage
const jsonBaseDeDatos = localStorage.getItem('baseDeDatos');
const baseDeDatos = JSON.parse(jsonBaseDeDatos) || {
    pacientes: []
};

// Agregar un nuevo paciente a la estructura de datos
const nuevoPaciente = {
    nombre: 'Nuevo Paciente',
    email: 'nuevo@gmail.com',
    telefono: '123-456-7890',
    consulta: 'Nueva Consulta'
};

baseDeDatos.pacientes.push(nuevoPaciente);

// Convertir y guardar la estructura de datos actualizada en LocalStorage
localStorage.setItem('baseDeDatos', JSON.stringify(baseDeDatos));

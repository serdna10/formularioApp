const formulario = document.getElementById("formulario");
const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrar-modal");

// Función para obtener datos
function obtenerDatosFormulario() {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    return {
        nombre,
        correo,
        mensaje,
    };
}

// Función para validar el formulario
function validarFormulario() {
    const datos = obtenerDatosFormulario();

    // Validar cada campo...

    if (!datos.nombre || !datos.correo || !datos.mensaje) {
        return false;
    }

    return true;
}

// Mostrar la ventana modal
function mostrarModal() {
    if (!validarFormulario()) {
        return;
    }

    const datos = obtenerDatosFormulario();

    const contenidoModal = document.querySelector(".contenido-modal");
    contenidoModal.innerHTML = `
        <h1>Datos capturados</h1>
        <p>Nombre: ${datos.nombre}</p>
        <p>Correo: ${datos.correo}</p>
        <p>Mensaje: ${datos.mensaje}</p>
    `;

    modal.classList.add("visible");
}

// Cerrar la ventana modal
cerrarModal.addEventListener("click", () => {
    modal.classList.remove("visible");
});

// Mostrar la ventana modal después de enviar el formulario
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    mostrarModal();
});


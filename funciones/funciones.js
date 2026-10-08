// Muestra un aviso de última hora en la portada en index.html
function avisarNoticia() {
    alert("Última hora: Sesión de clasificación programada sin cambios meteorológicos en Montecarlo.");
}

// Muestra/oculta todo el bloque de resultados en clasificacion.html
function alternarResultados() {
    let bloque = document.getElementById("bloque-resultados");
    if (bloque.style.display === "none") {
        bloque.style.display = "block";
    } else {
        bloque.style.display = "none";
    }
}

// Valida que el nombre no esté vacío antes de abrir el correo en contacto.html
function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    if (nombre.trim() === "") {
        alert("Por favor, introduce tu nombre antes de enviar el formulario.");
        return false;
    }
    alert("Formulario validado. Se abrirá tu gestor de correo.");
    return true;
}
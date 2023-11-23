document.addEventListener("DOMContentLoaded", function() {
    let nombre = document.getElementById("nombre");
    let correo = document.getElementById("email");
    let mensaje = document.getElementById("mensaje");
    let enviar = document.getElementById("btnEnviar");

    enviar.onclick = function() {
        // Obtener los valores de los campos de entrada
        let nombreValor = nombre.value.trim();
        let correoValor = correo.value.trim();
        let mensajeValor = mensaje.value.trim();

        // Verificar si los campos están vacíos
        if (nombreValor === '' || correoValor === '' || mensajeValor === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Verificar si el correo tiene el formato adecuado
        if (!validarFormatoCorreo(correoValor)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        // Construir el mensaje
        let alertMessage = `Querido ${nombreValor}:

Tu mensaje: ${mensajeValor}

ha sido enviado, espera respuestas en ${correoValor}`;

        // Mostrar el cuadro de alerta con el mensaje construido
        alert(alertMessage);
    };

    // Función para validar el formato del correo electrónico
    function validarFormatoCorreo(correo) {
        // Utiliza una expresión regular simple para verificar el formato del correo electrónico
        let formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return formatoCorreo.test(correo);
    }
});

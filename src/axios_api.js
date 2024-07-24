function redirigirRegistro() {
    // Enviar una solicitud HTTP al servidor para redirigir
    fetch('/api/Registrarse', { // URL del endpoint del servidor
        method: 'POST', // Método de la solicitud (POST para enviar datos)
    })
        .then(response => response.json()) // Procesar la respuesta JSON del servidor
        .then(data => {
            if (data.success) {
                // Redirigir a Register.html si la respuesta indica éxito
                window.location.href = "/Register.html";
            } else {
                // Mostrar un mensaje de error si la respuesta indica falla
                alert(data.error);
            }
        })
        .catch(error => {
            // Manejar errores de red o de la solicitud
            console.error('Error al redirigir:', error);
        });
}
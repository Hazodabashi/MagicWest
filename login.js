
// Para evaluar si el java está cargado correctamente
console.log("cargado correctamente");

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let mensaje = document.getElementById("mensaje");

    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        mensaje.style.color = "red";
        mensaje.textContent = "Por favor, ingresa un correo válido.";
        return;

    }

    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regexPassword.test(password)) {
        mensaje.style.color = "red";
        mensaje.textContent = "La contraseña debe tener mínimo 8 caracteres, incluyendo mayúscula, minúscula, número y un símbolo especial (@$!%*?&).";
        return;
    }

    

    mensaje.style.color = "green";
    mensaje.textContent = "¡Ingreso con éxito!";

    if (email === "admin@magicsur.cl" && password === "12345678Nn@")
        mensaje.textContent = "¡Bienvenido Admin!";
});

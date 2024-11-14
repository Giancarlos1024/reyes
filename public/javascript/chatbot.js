// Mostrar/Ocultar la ventana del chatbot
function toggleChatbot() {
    const chatbotWindow = document.getElementById("chatbot-window");
    chatbotWindow.classList.toggle("show-chatbot");
    
    if (chatbotWindow.classList.contains("show-chatbot")) {
        mostrarMensajeDeInicio();
    }
}

// Cargar mensaje de bienvenida solo una vez
function mostrarMensajeDeInicio() {
    const messagesDiv = document.getElementById("chatbot-messages");
    messagesDiv.innerHTML = ''; // Limpiar mensajes anteriores
    
    const welcomeMessage = `
        <div class="presentacion-chatbot">
            <img class="chat-fercito-logo" src="../public/img/FercitoChat.png" alt="Chatbot Icon"> 
            <p>¡Hola! Soy Fercito, el asistente virtual de F. REYES Y CIA. ¿En qué puedo ayudarte hoy?</p>
        </div>
        <div class="options">
            <button class="option-button" onclick="manejarOpcionInicial('Horarios de atención')">Horarios de atención</button>
            <button class="option-button" onclick="manejarOpcionInicial('Contáctanos')">Contáctanos</button>
            <button class="option-button" onclick="manejarOpcionInicial('Oficinas')">Oficinas</button>
            <button class="option-button" onclick="manejarOpcionInicial('Contactar con un asesor')">Contactar con un asesor</button>
        </div>
    `;
    messagesDiv.innerHTML = welcomeMessage;
}

// Función para manejar las opciones iniciales
function manejarOpcionInicial(opcion) {
    switch(opcion) {
        case "Horarios de atención":
            mostrarMensaje("¿En qué ciudad deseas saber los horarios de atención?", "bot-message");
            mostrarOpciones(["Piura", "Chiclayo", "Lima", "Pisco", "Ica", "Cusco"], manejarHorariosAtencion);
            break;
        case "Contáctanos":
        case "Contactar con un asesor":
            solicitarInformacionUsuario();
            break;
        case "Oficinas":
            mostrarMensaje("¿Cuál de nuestras oficinas te queda más cerca?", "bot-message");
            mostrarOpciones(["Piura", "Chiclayo", "Lima", "Pisco", "Ica", "Cusco"], manejarOficinas);
            break;
    }
}

// Función para mostrar horarios de atención según ciudad
function manejarHorariosAtencion(ciudad) {
    const horarios = {
        "Piura": "Lunes a Viernes de 8:30 a.m. a 1:30 p.m. y de 3:30 p.m. a 6:30 p.m.",
        "Chiclayo": "Lunes a Viernes de 8:30 a.m. a 1:00 p.m. y de 3:30 p.m. a 7:00 p.m.",
        "Lima": "Lunes a Viernes de 9:00 a.m. a 6:00 p.m.",
        // Agrega aquí el horario correspondiente para Pisco, Ica y Cusco
    };
    
    mostrarMensaje(`Nuestra oficina en ${ciudad} está para atenderte de ${horarios[ciudad]}. ¿Deseas agendar una cita?`, "bot-message");
    mostrarOpciones(["Sí", "No"], (respuesta) => {
        if (respuesta === "Sí") {
            solicitarInformacionUsuario();
        } else {
            mostrarMensaje("¿Te puedo ayudar en algo más?", "bot-message");
            mostrarOpciones(["Sí", "No"], manejarAyudaAdicional);
        }
    });
}

// Función para manejar la ayuda adicional
function manejarAyudaAdicional(opcion) {
    if (opcion === "Sí") {
        mostrarMensajeDeInicio();
    } else {
        mostrarMensaje("Gracias por escribirnos. Fin del flujo.", "bot-message");
    }
}

// Detectar cuando se presiona la tecla "Enter" en el campo de texto
document.getElementById("entrada-usuario").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        manejarEntradaUsuario(); // Ejecutar la función cuando se presiona Enter
    }
});



// Manejar la entrada del usuario al hacer clic en "Enviar" o presionar "Enter"
function manejarEntradaUsuario() {
    const entradaUsuario = document.getElementById("entrada-usuario").value.trim();
    if (entradaUsuario !== "") {
        mostrarMensaje(entradaUsuario, "mensaje-usuario");

        if (esperandoNombre) {
            manejarNombre(entradaUsuario);
        } else if (esperandoContacto) {
            manejarContacto(entradaUsuario);
        }

        document.getElementById("entrada-usuario").value = ""; // Limpiar el campo de entrada
    }
}



// Variables de estado para seguir el flujo
let esperandoNombre = false;
let esperandoContacto = false;

// Función para solicitar información del usuario
function solicitarInformacionUsuario() {
    mostrarMensaje("Bríndame tu nombre, por favor.", "mensaje-bot");
    esperandoNombre = true; // Cambia el estado para indicar que esperamos el nombre
}

// Función para manejar la entrada del nombre
function manejarNombre(nombre) {
    if (validarNombre(nombre)) {
        mostrarMensaje("Bríndame tu teléfono y tu correo para que nuestros asesores se puedan contactar contigo.", "mensaje-bot");
        esperandoNombre = false;
        esperandoContacto = true; // Cambia el estado para indicar que esperamos los datos de contacto
    } else {
        mostrarMensaje("Por favor, ingresa un nombre válido.", "mensaje-bot");
    }
}

// Función para manejar la entrada de contacto (teléfono y correo)
function manejarContacto(contacto) {
    const [telefono, correo] = contacto.split(",");
    if (validarTelefono(telefono) && validarCorreo(correo)) {
        mostrarMensaje("Gracias por la información brindada. En breve, un asesor se pondrá en contacto contigo.", "mensaje-bot");
        esperandoContacto = false;
        /*mostrarMensaje("¿Te puedo ayudar en algo más?", "mensaje-bot");
        mostrarOpciones(["Sí", "No"], manejarAyudaAdicional);*/
    } else {
        mostrarMensaje("Por favor, ingresa un teléfono y un correo válidos.", "mensaje-bot");
    }
}

// Función para mostrar un mensaje en el chat
// Función para mostrar un mensaje en el chat
function mostrarMensaje(mensaje, clase) {
    const mensajeElemento = document.createElement("div");
    mensajeElemento.classList.add(clase);

    // Si es un mensaje del usuario, se agregan las clases para alinear a la derecha
    if (clase === "mensaje-usuario") {
        mensajeElemento.textContent = mensaje;  // Solo mostrar el texto
    } else {
        mensajeElemento.textContent = mensaje;  // Mensaje del bot
    }

    document.querySelector("#chatbot-messages").appendChild(mensajeElemento);
    document.querySelector("#chatbot-messages").scrollTop = document.querySelector("#chatbot-messages").scrollHeight;
}


// Función para mostrar opciones y manejar la respuesta
function mostrarOpciones(opciones, callback) {
    const contenedorOpciones = document.createElement("div");
    contenedorOpciones.classList.add("options");
    opciones.forEach(opcion => {
        const boton = document.createElement("button");
        boton.classList.add("option-button");
        boton.textContent = opcion;
        boton.onclick = () => {
            contenedorOpciones.remove();
            mostrarMensaje(opcion, "mensaje-usuario");
            callback(opcion);
        };
        contenedorOpciones.appendChild(boton);
    });
    document.querySelector("#chatbot-messages").appendChild(contenedorOpciones);
}

// Funciones de validación
function validarNombre(nombre) {
    return /^[a-zA-Z\s]+$/.test(nombre.trim());
}

function validarTelefono(telefono) {
    return /^[\d\s+()-]+$/.test(telefono.trim());
}

function validarCorreo(correo) {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(correo.trim());
}

// Función para manejar las oficinas
function manejarOficinas(ciudad) {
    const ubicaciones = {
        "Piura": "Calle Junín Nro. 1011, Piura. Teléfonos: (073) 557825 / +51 972 014 356 /+51 981 296 934",
        "Chiclayo": "Av. Balta N° 360 Of. 305 Edificio San Lázaro, Chiclayo. Teléfonos: (074) 270516 / +51 956 113 225",
        "Lima": "Av. Jose Larco N°743, Ofi. 401, Miraflores. Teléfonos: +51 981 320 285 /+51 981 012 291 /+51 981 012 294"
        // Agrega aquí las ubicaciones correspondientes para Pisco, Ica y Cusco
    };
    
    mostrarMensaje(`Nuestra oficina en ${ciudad} está ubicada en: ${ubicaciones[ciudad]}. ¿Hay algo más en lo que pueda ayudarte hoy?`, "bot-message");
    mostrarOpciones(["Regresar Menú", "Horarios de Atención"], (respuesta) => {
        if (respuesta === "Regresar Menú") {
            mostrarMensajeDeInicio();
        } else {
            manejarHorariosAtencion(ciudad);
        }
    });
}

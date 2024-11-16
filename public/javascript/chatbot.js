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
    switch (opcion) {
        case "Horarios de atención":
            mostrarMensaje("¿En qué ciudad deseas saber los horarios de atención?", "bot-message");
            mostrarOpciones(["Piura", "Chiclayo", "Lima", "Pisco", "Ica", "Cusco"], manejarHorariosAtencion);
            break;
        case "Contáctanos":
            solicitarInformacionUsuario(true); // Indicar que viene de "Contáctanos"
            break;
        case "Contactar con un asesor":
            solicitarInformacionUsuario(); // Flujo genérico
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
        "Chiclayo": "Lunes a Viernes de 9:00a.m. a 1:00 p.m. y de 3:00 p.m. a 7:00 p.m.",
        "Lima": "Lunes a Viernes de 9:00a.m. a 1:00 p.m. y de 2:00 p.m. a 6:00 p.m.",
        "Pisco": "Lunes a Viernes de 9:00a.m. a 1:00 p.m. y de 2:00 p.m. a 6:00 p.m.",
        "Ica": "Lunes a Viernes de 9:00a.m. a 1:00 p.m. y de 4:00 p.m. a 7:00 p.m.",
        "Cusco": "Lunes a Viernes de 9:00a.m. a 1:00 p.m. y de 2:00 p.m. a 6:00 p.m."
    };
    
    mostrarMensaje(`Nuestra oficina en ${ciudad} está para atenderte de ${horarios[ciudad]} \n¿Deseas agendar una cita?`, "bot-message");
    mostrarOpciones(["Sí", "No"], (respuesta) => {
        if (respuesta === "Sí") {
            solicitarInformacionUsuario();
        } else {
            mostrarMensaje("Cuéntame ¿Te puedo ayudar en algo más?", "bot-message");
            mostrarOpciones(["Sí", "No"], manejarAyudaAdicional);
        }
    });
}


// Función para manejar la ayuda adicional

function manejarAyudaAdicional(opcion) {
    if (opcion === "Sí") {
        solicitarInformacionUsuario(false); // Inicia el flujo para pedir nombre, teléfono y correo
        esperandoContactoFinal = true; // Bandera para detectar cuando se completan los datos
    } else {
        mostrarMensaje("¡Gracias por escribirnos!", "bot-message");
    }
}

// Nueva bandera para controlar el flujo de "mostrarMensajeFinal"
let esperandoContactoFinal = false;



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
let esDesdeContactanos = false; // Nueva bandera para identificar el flujo

// Función para solicitar información del usuario
function solicitarInformacionUsuario(desdeContactanos = false) {
    esDesdeContactanos = desdeContactanos; // Guardar si el flujo es de "Contáctanos"
    mostrarMensaje("Bríndame tu nombre, por favor.", "mensaje-bot");
    esperandoNombre = true; // Cambiar estado
}


// Función para manejar la entrada del nombre
function manejarNombre(nombre) {
    if (validarNombre(nombre)) {
        mostrarMensaje("Bríndame tu teléfono y tu correo para que nuestros asesores se puedan contactar contigo. Separados por una coma", "mensaje-bot");
        esperandoNombre = false;
        esperandoContacto = true; // Cambia el estado para indicar que esperamos los datos de contacto
    } else {
        mostrarMensaje("Por favor, ingresa un nombre válido.", "mensaje-bot");
    }
}




// Modificar manejarContacto para considerar el caso de mostrarMensajeFinal
function manejarContacto(contacto) {
    const [telefono, correo] = contacto.split(",");
    if (validarTelefono(telefono) && validarCorreo(correo)) {
        if (esperandoContactoFinal) {
            //mostrarMensaje("¡Gracias por la información! Continuemos...", "bot-message");
            mostrarMensajeFinal(); // Llamar a mostrarMensajeFinal si se está en ese flujo
            esperandoContactoFinal = false; // Resetear la bandera
        } else if (esDesdeContactanos) {
            mostrarMensaje(
                "La oficina más cercana estará encantada de contactarte. \nNuestros asesores se pondrán en contacto contigo.",
                "bot-message"
            );
            mostrarOpciones(["Ver oficinas cercanas"], () => {
                mostrarMensaje("¿Cuál de nuestras oficinas te queda más cerca?", "bot-message");
                mostrarOpciones(["Piura", "Chiclayo", "Lima", "Pisco", "Ica", "Cusco"], manejarOficinas);
            });
        } else {
            mostrarMensaje(
                "¡Gracias por la información brindada! En breve, un asesor se pondrá en contacto contigo.",
                "bot-message"
            );
        }

        esperandoContacto = false; // Finalizar estado
    } else {
        mostrarMensaje("Por favor, ingresa un teléfono y un correo válidos.", "bot-message");
    }
}


// Funciones de validación
function validarNombre(nombre) {
    // Verificar que el nombre no tenga solo letras repetidas
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóú\s]+$/; // Permite letras con tildes y espacios
    const esValido = regexNombre.test(nombre.trim());  

    // Comprobar que no haya secuencias de letras repetidas (como "XXXXX" o "AAAAA")
    const noSecuenciasRepetidas = !/(.)\1{2,}/.test(nombre.trim()); // No más de dos caracteres repetidos seguidos

    // Validación final
    return esValido && noSecuenciasRepetidas;
}


function validarTelefono(telefono) {
    return /^[\d\s+()-]+$/.test(telefono.trim());
}

function validarCorreo(correo) {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(correo.trim());
}



// Función para mostrar el indicador de escritura
function mostrarIndicadorEscritura() {
    const messagesDiv = document.querySelector("#chatbot-messages");
    // Verificar si el indicador ya está visible
    if (document.querySelector(".mensaje-bot.fercito-escribiendo")) return; // Evitar duplicados
    const indicador = document.createElement("div");
    indicador.classList.add("mensaje-bot", "fercito-escribiendo");
    indicador.textContent = "Fercito está escribiendo...";

    messagesDiv.appendChild(indicador);
    // Desplazar el chat hacia abajo para mostrar el indicador
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Función para ocultar el indicador de escritura
function ocultarIndicadorEscritura() {
    const mensajeEscritura = document.querySelector(".mensaje-bot.fercito-escribiendo");
    if (mensajeEscritura) {
        mensajeEscritura.remove();
    }
}

// Función modificada para mostrar un mensaje con el indicador de escritura
function mostrarMensajeConEscritura(mensaje, clase) {
    mostrarIndicadorEscritura(); // Mostrar el indicador de escritura
    setTimeout(() => {
        ocultarIndicadorEscritura(); // Ocultar el indicador después de un retraso
        mostrarMensaje(mensaje, clase); // Mostrar el mensaje real
    }, 2000); // Esperar 2 segundos antes de mostrar el mensaje del bot
}

// Función para mostrar un mensaje en el chat (modificada)
function mostrarMensaje(mensaje, clase) {
    const mensajeElemento = document.createElement("div");
    mensajeElemento.classList.add(clase);

    // Si es un mensaje del usuario, se procesan los saltos de línea como texto plano
    if (clase === "mensaje-usuario") {
        mensajeElemento.textContent = mensaje;
    } else {
        // Reemplazar \n por <br> para los mensajes del bot
        mensajeElemento.innerHTML = mensaje.replace(/\n/g, "<br>");
    }

    // Añadir el mensaje al contenedor del chatbot
    document.querySelector("#chatbot-messages").appendChild(mensajeElemento);

    // Desplazar automáticamente el chat hacia abajo
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



// Función para manejar las oficinas TELEFONOS
function manejarOficinas(ciudad) {
    const ubicaciones = {
        "Piura": "Calle Junín Nro. 1011, Piura  \nTeléfonos: \n(073) 557825 \n+51 972 014 356 \n+51 981 296 934",
        "Chiclayo": "Av. Balta N° 360 Of. 305  Edificio San Lázaro, Chiclayo. \nTeléfonos:  \n(074) 270516 \n+51 956 113 225",
        "Lima": "Av. Jose Larco N°743, Ofi. 401, Miraflores  \nTeléfonos: \n+51 981 320 285 \n+51 981 012 291 \n+51 981 012 294",
        "Pisco": "Calle Comercio 429-B Pisco  \nTeléfonos: \n(056) 322462 \n+51 960 238 266",
        "Ica": "Residencial San Martín G-101, Ica  \nTeléfonos: \n(056) 231151 \n+51 981 320 285 \n+51 923 217 317",
        "Cusco": "Jr. Retiro 426, Dpto. 402- Wanchac - Cusco  \nTeléfono: \n+51 947 413 560"
    };
    
    mostrarMensaje(`Nuestra oficina en ${ciudad} está ubicada en: ${ubicaciones[ciudad]}.\n¡Espero verte pronto en nuestras instalaciones! \n¿Hay algo más en lo que pueda ayudarte hoy?`, "bot-message");
    mostrarOpciones(["Regresar Menú", "Horarios de Atención"], (respuesta) => {
        if (respuesta === "Regresar Menú") {
            mostrarMensaje("¿Cuál de nuestras oficinas te queda más cerca?", "bot-message");
            mostrarOpciones(["Piura", "Chiclayo", "Lima", "Pisco", "Ica", "Cusco"], manejarOficinas);
        } else {
            manejarHorariosAtencion(ciudad);
        }
    });
}




// Función para mostrar el mensaje final después de la recolección de datos
function mostrarMensajeFinal() {
    mostrarMensaje("¡Gracias por la información brindada! Cuéntanos \n¿Cómo podemos ayudarte?", "bot-message");

    mostrarOpciones(["Seguro vehicular", "SOAT", "SCTR", "Vida Ley", "Otros"], manejarOpcionSeguros);
}

// Función para manejar la selección de opción de seguros
function manejarOpcionSeguros(opcion) {
    switch (opcion) {
        case "Seguro vehicular":
            mostrarMensaje("¿Deseas?", "bot-message");
            mostrarOpciones(["Cotizar", "Renovar", "Siniestros/Reclamos", "Contactar a un asesor"], manejarSeguroVehicular);
            break;
        case "SOAT":
            mostrarMensaje("¿Deseas?", "bot-message");
            mostrarOpciones(["Renovar mi SOAT", "Cotizar mi SOAT", "Contactar a un asesor"], manejarSOAT);
            break;
        case "SCTR":
            mostrarMensaje("¿Deseas?", "bot-message");
            mostrarOpciones(["Renovar SCTR", "Cotizar SCTR", "Contactar a un asesor"], manejarSCTR);
            break;
        case "Vida Ley":
            mostrarMensaje("¿Deseas?", "bot-message");
            mostrarOpciones(["Renovar Vida Ley", "Cotizar Vida Ley", "Contactar a un asesor"], manejarVidaLey);
            break;
        case "Otros":
            mostrarMensaje("Listo, en unos minutos nos pondremos en contacto contigo.", "bot-message");
            break;
    }
}

// Función para manejar las opciones de "Seguro vehicular"
function manejarSeguroVehicular(opcion) {
    switch (opcion) {
        case "Cotizar":
            mostrarMensaje("Por favor, bríndanos los siguientes datos:\n-DNI / RUC:\n-Nombre:\n-Placa:\n-Año:\n-Modelo:\n-Uso:\n-Zona de Circulación:\n-Valor comercial:", "bot-message");
            mostrarMensaje("Asimismo, adjúntanos la tarjeta de propiedad.", "bot-message");
            break;
        case "Renovar":
            mostrarMensaje("Por favor, bríndanos los siguientes datos:\n-DNI / RUC:\n-Nombre:\n-Placa:\n-Año:\n-Modelo:\n-Valor comercial:\n-Número de Póliza Anterior:", "bot-message");
            mostrarMensaje("Asimismo, adjúntanos la tarjeta de propiedad.", "bot-message");
            break;
        case "Siniestros/Reclamos":
            mostrarMensaje("Por favor, bríndanos tu N° de documento y tu N° de póliza", "bot-message");
            break;
        case "Contactar a un asesor":
            mostrarMensaje("Listo, en unos minutos nos pondremos en contacto contigo.", "bot-message");
            break;
    }
}


// Función para manejar las opciones de "SOAT"
function manejarSOAT(opcion) {
    switch (opcion) {
        case "Renovar mi SOAT":
            mostrarMensaje("Por favor, bríndanos los siguientes datos:\n-DNI / RUC:\n-Nombre:\n-Placa:\n-Año:\n-Modelo:\n-Uso:", "bot-message");
            mostrarMensaje("Asimismo, adjúntanos la tarjeta de propiedad.", "bot-message");
            break;
        case "Cotizar mi SOAT":
            mostrarMensaje("Por favor, bríndanos los siguientes datos:\n-DNI / RUC:\n-Nombre:\n-Placa:\n-Año:\n-Modelo:\n-Uso:", "bot-message");
            mostrarMensaje("Asimismo, adjúntanos la tarjeta de propiedad.", "bot-message");
            break;
        case "Contactar a un asesor":
            mostrarMensaje("Listo, en unos minutos nos pondremos en contacto contigo.", "bot-message");
            break;
    }
}
// Función para manejar las opciones de "SCTR"
function manejarSCTR(opcion) {
    switch (opcion) {
        case "Renovar SCTR":
            mostrarMensaje("Por favor, bríndanos los siguientes datos:\n-RUC:\n-Nombre:\n-N° de Póliza:\n-Vigencia de la póliza:", "bot-message");
            break;
        case "Cotizar SCTR":
            mostrarMensaje("Por favor, bríndanos los siguientes datos:\n-RUC:\n-Nombre:", "bot-message");
            break;
        case "Contactar a un asesor":
            mostrarMensaje("Listo, en unos minutos nos pondremos en contacto contigo.", "bot-message");
            break;
    }
}

// Función para manejar las opciones de "Vida Ley"
function manejarVidaLey(opcion) {
    switch (opcion) {
        case "Renovar Vida Ley":
            mostrarMensaje("Por favor, bríndanos los siguientes datos:\n-RUC:\n-Nombre:\n-N° de Póliza:\n-Vigencia de la póliza:", "bot-message");
            break;
        case "Cotizar Vida Ley":
            mostrarMensaje("Por favor, bríndanos los siguientes datos:\n-RUC:\n-Nombre:", "bot-message");
            break;
        case "Contactar a un asesor":
            mostrarMensaje("Listo, en unos minutos nos pondremos en contacto contigo.", "bot-message");
            break;
    }
}



// Función para manejar "Otros"
function manejarOtros() {
    mostrarMensaje("Listo, en unos minutos nos pondremos en contacto contigo.", "bot-message");
}


// Adjuntar archivos
function manejarArchivoAdjunto(event) {
    const fileInput = event.target;
    const archivo = fileInput.files[0];

    if (archivo) {
        const mensajeElemento = document.createElement("div");
        mensajeElemento.classList.add("mensaje-usuario");

        // Validar tipo de archivo (solo imágenes, por ejemplo)
        if (archivo.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement("img");
                img.src = e.target.result;
                img.alt = archivo.name;
                img.style.maxWidth = "150px";
                img.style.borderRadius = "8px";
                mensajeElemento.appendChild(img);
            };
            reader.readAsDataURL(archivo);
        } else {
            mensajeElemento.textContent = `Archivo adjunto: ${archivo.name}`;
        }

        document.querySelector("#chatbot-messages").appendChild(mensajeElemento);
        document.querySelector("#chatbot-messages").scrollTop = document.querySelector("#chatbot-messages").scrollHeight;
    }
}




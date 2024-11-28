// Mostrar/Ocultar la ventana del chatbot
function toggleChatbot() {
    const chatbotWindow = document.getElementById("chatbot-window");
    chatbotWindow.classList.toggle("show-chatbot");
    
    if (chatbotWindow.classList.contains("show-chatbot")) {
        mostrarMensajeDeInicio();
    }
}
////////////////////////////////////////////
// Cargar mensaje de bienvenida solo una vez
function mostrarMensajeDeInicio() {
    const messagesDiv = document.getElementById("chatbot-messages");

    // Mensaje de bienvenida inicial
    const welcomeMessage = `
        <div class="presentacion-chatbot">
            <img 
                class="chat-fercito-logo" 
                src="../public/img/FercitoChat.png" 
                alt="Chatbot Icon" 
                onerror="this.src='./public/img/FercitoChat.png'; this.alt='Imagen no disponible';"
            > 
            <p>¡Hola! Soy Fercito, el asistente virtual de F. REYES Y CIA.</p>
        </div>
    `;
    messagesDiv.innerHTML = welcomeMessage;

    // Invocar la función para manejar la solicitud de información
    solicitarInformacionUsuario();
}


// Función para manejar las opciones iniciales
function manejarOpcionInicial(opcion) {
    switch (opcion) {
        case "Horarios de atención":
            mostrarMensaje("¿En qué ciudad deseas saber los horarios de atención?", "bot-message");
            mostrarOpciones(["Piura", "Chiclayo", "Lima", "Pisco", "Ica", "Cusco"], manejarHorariosAtencion);
            break;
        case "Contáctanos":
            manejarContactanos(); // Indicar que viene de "Contáctanos"
            break;
        case "Oficinas":
            mostrarMensaje("¿Cuál de nuestras oficinas te queda más cerca?", "bot-message");
            mostrarOpciones(["Piura", "Chiclayo", "Lima", "Pisco", "Ica", "Cusco"], manejarOficinas);
            break;
        case "Contactar con un asesor":
            manejarOtros();
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
            mostrarMensaje("En breve, un asesor se pondrá en contacto contigo.", "bot-message");
        } else {
            mostrarMensaje("Cuéntame ¿Te puedo ayudar en algo más?", "bot-message");
            mostrarOpciones(["Sí", "No"], manejarAyudaAdicional);
        }
    });
}

// Función para manejar la ayuda adicional

function manejarAyudaAdicional(opcion) {
    if (opcion === "Sí") {
        mostrarMensajeFinal(); // Inicia el flujo para pedir nombre, teléfono y correo
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

let esperandoDatosSOAT = false; // Variable para controlar cuándo se están esperando los datos del usuario
let esperandoDatosSCTR = false; // Variable para controlar cuándo se están esperando los datos del usuario para SCTR
let opcionSCTR = ""; // Variable global para almacenar la opción seleccionada para SCTR

let esperandoDatosVidaLey = false; // Variable para controlar cuándo se están esperando los datos del usuario para Vida Ley
let opcionVidaLey = ""; // Variable global para almacenar la opción seleccionada para Vida Ley

let esperandoDatosSeguroVehicular = false; // Variable para controlar cuándo se están esperando los datos del usuario para Seguro Vehicular
let opcionSeguroVehicular = ""; // Variable global para almacenar la opción seleccionada para Seguro Vehicular

// Función para manejar la entrada del usuario
function manejarEntradaUsuario() {
    const entradaUsuario = document.getElementById("entrada-usuario").value.trim();
    
    if (entradaUsuario !== "") {
        mostrarMensaje(entradaUsuario, "mensaje-usuario");

        if (esperandoDatosSOAT) {
            manejarDatosSOAT(entradaUsuario); // Validar y procesar datos SOAT
        } else if (esperandoDatosSCTR) {
            manejarDatosSCTR(entradaUsuario, opcionSCTR); // Validar y procesar datos SCTR
        } else if (esperandoDatosVidaLey) {
            manejarDatosVidaLey(entradaUsuario, opcionVidaLey); // Validar y procesar datos Vida Ley
        } else if (esperandoDatosSeguroVehicular) {
            manejarDatosSeguroVehicular(entradaUsuario, opcionSeguroVehicular); // Validar y procesar datos Seguro Vehicular
        } else if (esperandoNombre) {
            manejarNombre(entradaUsuario); // Manejo de nombre
        } else if (esperandoContacto) {
            manejarContacto(entradaUsuario); // Manejo de contacto
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

/////nueva funcion
function manejarContactanos(){
    mostrarMensaje(
        "La oficina más cercana estará encantada de contactarte. \nNuestros asesores se pondrán en contacto contigo.",
            "bot-message"
    );
    mostrarOpciones(["Ver oficinas cercanas"], () => {
        mostrarMensaje("¿Cuál de nuestras oficinas te queda más cerca?", "bot-message");
        mostrarOpciones(["Piura", "Chiclayo", "Lima", "Pisco", "Ica", "Cusco"], manejarOficinas);
    });
}
///////////////////////////////
// Modificar manejarContacto para considerar el caso de mostrarMensajeFinal
    function manejarContacto(contacto) {
        const [telefono, correo] = contacto.split(",");
    
        if (validarTelefono(telefono) && validarCorreo(correo)) {
            if (esperandoContactoFinal) {
                // Mostrar el mensaje final si se está en ese flujo
                mostrarMensajeFinal(); 
                esperandoContactoFinal = false; // Resetear la bandera
            } else {
                // Mostrar opciones de ayuda
                mostrarMensaje("¿En qué puedo ayudarte hoy?", "bot-message");
                mostrarOpciones(
                    ["Horarios de atención", "Contáctanos", "Oficinas", "Contactar con un asesor"],
                    manejarOpcionInicial
                );
            }
    
            // Finalizar estado
            esperandoContacto = false; 
        } else {
            // Mostrar mensaje de error si los datos son inválidos
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
        "Piura": "Piura: Calle Junín Nro. 1011, Piura  \nTeléfonos: \n(073) 557825 \n+51 972 014 356 \n+51 981 296 934",
        "Chiclayo": "Chiclayo: Av. Balta N° 360 Of. 305  Edificio San Lázaro, Chiclayo. \nTeléfonos:  \n(074) 270516 \n+51 956 113 225",
        "Lima": "Lima: Av. Jose Larco N°743, Ofi. 401, Miraflores  \nTeléfonos: \n+51 981 320 285 \n+51 981 012 291 \n+51 981 012 294",
        "Pisco": "Pisco: Calle Comercio 429-B Pisco  \nTeléfonos: \n(056) 322462 \n+51 960 238 266",
        "Ica": "Ica: Residencial San Martín G-101, Ica  \nTeléfonos: \n(056) 231151 \n+51 981 320 285 \n+51 923 217 317",
        "Cusco": "Cusco: Jr. Retiro 426, Dpto. 402- Wanchac - Cusco  \nTeléfono: \n+51 947 413 560"
    };
    
    mostrarMensaje(`Nuestra oficina está ubicada en:\n ${ubicaciones[ciudad]}.\n\n¡Espero verte pronto en nuestras instalaciones! \n¿Hay algo más en lo que pueda ayudarte hoy?`, "bot-message");
    mostrarOpciones(["Contactar con un asesor","Regresar Menú", "Horarios de Atención"], (respuesta) => {
        if (respuesta === "Regresar Menú") {
            mostrarMensaje("¿En qué puedo ayudarte hoy?", "bot-message");
            mostrarOpciones(
                ["Horarios de atención", "Contáctanos", "Oficinas", "Contactar con un asesor"],manejarOpcionInicial
            );
        } 
        else if(respuesta === "Horarios de Atención") {
            manejarHorariosAtencion(ciudad);
        }else  {
            mostrarMensaje("En breve, un asesor se pondrá en contacto contigo.", "bot-message");
        }
    });
}




// Función para mostrar el mensaje final después de la recolección de datos
function mostrarMensajeFinal() {
    mostrarMensaje("Cuéntanos ¿Cómo podemos ayudarte?", "bot-message");

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
            manejarOtros();
            break;
    }
}

// Función para manejar las opciones de "Seguro vehicular"
// Función para manejar las opciones de "Seguro Vehicular"
function manejarSeguroVehicular(opcion) {
    opcionSeguroVehicular = opcion; // Guardar la opción seleccionada en la variable global

    switch (opcion) {
        case "Cotizar":
            mostrarMensaje("Por favor, ingresa los siguientes datos en una sola línea separados por comas:\nDNI / RUC, Nombre, Placa, Año, Modelo, Uso, Zona de Circulación, Valor comercial", "bot-message");
            mostrarMensaje("Asimismo, puedes adjuntar la tarjeta de propiedad si es necesario.", "bot-message");
            esperandoDatosSeguroVehicular = true; // Activar la espera de datos Seguro Vehicular
            break;
        case "Renovar":
            mostrarMensaje("Por favor, ingresa los siguientes datos en una sola línea separados por comas:\nDNI / RUC, Nombre, Placa, Año, Modelo, Valor comercial, Número de Póliza Anterior", "bot-message");
            mostrarMensaje("Asimismo, puedes adjuntar la tarjeta de propiedad si es necesario.", "bot-message");
            esperandoDatosSeguroVehicular = true; // Activar la espera de datos Seguro Vehicular
            break;
        case "Siniestros/Reclamos":
            mostrarMensaje("Por favor, ingresa tu N° de documento y N° de póliza", "bot-message");
            esperandoDatosSeguroVehicular = true; // Activar la espera de datos Seguro Vehicular
            break;
        case "Contactar a un asesor":
            manejarOtros();
            break;
    }
}

// Función para validar y procesar los datos del usuario para Seguro Vehicular
// Función para validar y procesar los datos del usuario para Seguro Vehicular
function manejarDatosSeguroVehicular(entradaUsuario, opcion) {
    // Separar los datos ingresados por comas
    const datos = entradaUsuario.split(",");

    // Validar que se hayan ingresado todos los campos requeridos según la opción seleccionada
    if ((opcion === "Cotizar" && datos.length < 8) || 
        (opcion === "Renovar" && datos.length < 8) || 
        (opcion === "Siniestros/Reclamos" && datos.length < 2) || 
        datos.some(campo => campo.trim() === "")) {
        mostrarMensaje(
            "Por favor, asegúrate de ingresar todos los datos en el siguiente formato:\n" +
            "Cotizar:\n DNI / RUC, Nombre, Placa, Año, Modelo, Uso, Zona de Circulación, Valor comercial\n" +
            "Renovar:\n DNI / RUC, Nombre, Placa, Año, Modelo, Valor comercial, Número de Póliza Anterior\n" +
            "Siniestros/Reclamos:\n N° de documento, N° de póliza",
            "bot-message"
        );
        return;
    }

    // Asegurarse de que los datos no sean undefined o null antes de usar .trim()
    const datosUsuario = {
        dni: (datos[0] && datos[0].trim()) || "",  // Validar si datos[0] existe antes de usar .trim()
        nombre: (datos[1] && datos[1].trim()) || "",  // Validar si datos[1] existe antes de usar .trim()
        placa: (datos[2] && datos[2].trim()) || "",  // Validar si datos[2] existe antes de usar .trim()
        anio: (datos[3] && datos[3].trim()) || "",  // Validar si datos[3] existe antes de usar .trim()
        modelo: (datos[4] && datos[4].trim()) || "",  // Validar si datos[4] existe antes de usar .trim()
        uso: opcion === "Cotizar" ? (datos[5] && datos[5].trim()) || "" : undefined,  // Validar si datos[5] existe antes de usar .trim()
        zonaCirculacion: opcion === "Cotizar" ? (datos[6] && datos[6].trim()) || "" : undefined,  // Validar si datos[6] existe antes de usar .trim()
        valorComercial: opcion === "Cotizar" || opcion === "Renovar" ? (datos[7] && datos[7].trim()) || "" : undefined,  // Validar si datos[7] existe antes de usar .trim()
        numeroPoliza: opcion === "Renovar" ? (datos[8] && datos[8].trim()) || "" : undefined  // Validar si datos[8] existe antes de usar .trim()
    };

    // Mensaje de confirmación y llamado a la función manejarOtros
    mostrarMensaje("Datos validados correctamente. Procesando información...", "bot-message");
    manejarOtros(); // Continuar con el flujo
    esperandoDatosSeguroVehicular = false; // Desactivar la espera de datos Seguro Vehicular
}




// Función para manejar "Otros"
function manejarOtros() {
    mostrarMensaje("Listo, en unos minutos nos pondremos en contacto contigo.", "bot-message");
}


// Función para manejar las opciones de "SOAT"
function manejarSOAT(opcion) {
    switch (opcion) {
        case "Renovar mi SOAT":
        case "Cotizar mi SOAT":
            mostrarMensaje("Por favor, ingresa los siguientes datos en una sola línea separados por comas:\nDNI / RUC, Nombre, Placa, Año, Modelo, Uso", "bot-message");
            mostrarMensaje("Asimismo, puedes adjuntar la tarjeta de propiedad si es necesario.", "bot-message");
            esperandoDatosSOAT = true; // Activar la espera de datos SOAT
            break;

        case "Contactar a un asesor":
            manejarOtros();
            break;
    }
}

// Función para validar y procesar los datos del usuario para SOAT
function manejarDatosSOAT(entradaUsuario) {
    // Separar los datos ingresados por comas
    const datos = entradaUsuario.split(",");

    // Validar que se hayan ingresado todos los campos requeridos
    if (datos.length < 6 || datos.some(campo => campo.trim() === "")) {
        mostrarMensaje(
            "Por favor, asegúrate de ingresar todos los datos en el siguiente formato:\n" +
            "DNI / RUC, Nombre, Placa, Año, Modelo, Uso",
            "bot-message"
        );
        return;
    }

    // Si los datos son válidos, procesarlos
    const datosUsuario = {
        dni: datos[0].trim(),
        nombre: datos[1].trim(),
        placa: datos[2].trim(),
        anio: datos[3].trim(),
        modelo: datos[4].trim(),
        uso: datos[5].trim()
    };

    // Mensaje de confirmación y llamado a la función manejarOtros
    mostrarMensaje("Datos validados correctamente. Procesando información...", "bot-message");
    manejarOtros(); // Continuar con el flujo
    esperandoDatosSOAT = false; // Desactivar la espera de datos SOAT
}


// Función para manejar las opciones de "SCTR"
function manejarSCTR(opcion) {
    opcionSCTR = opcion; // Guardar la opción seleccionada en la variable global

    switch (opcion) {
        case "Renovar SCTR":
            mostrarMensaje("Por favor, ingresa los siguientes datos en una sola línea separados por comas:\nRUC, Nombre, N° de Póliza, Vigencia de la póliza", "bot-message");
            esperandoDatosSCTR = true; // Activar la espera de datos SCTR
            break;
        case "Cotizar SCTR":
            mostrarMensaje("Por favor, ingresa los siguientes datos en una sola línea separados por comas:\nRUC, Nombre", "bot-message");
            esperandoDatosSCTR = true; // Activar la espera de datos SCTR
            break;
        case "Contactar a un asesor":
            manejarOtros();
            break;
    }
}

// Función para validar y procesar los datos del usuario para SCTR
function manejarDatosSCTR(entradaUsuario, opcion) {
    // Separar los datos ingresados por comas
    const datos = entradaUsuario.split(",");

    // Validar que se hayan ingresado todos los campos requeridos
    if ((datos.length < 2 && opcion === "Cotizar SCTR") || 
        (datos.length < 4 && opcion === "Renovar SCTR") || 
        datos.some(campo => campo.trim() === "")) {
        mostrarMensaje(
            "Por favor, asegúrate de ingresar todos los datos en el siguiente formato:\n" +
            "Renovar SCTR:\n RUC, Nombre, N° de Póliza, Vigencia de la póliza\n" +
            "Cotizar SCTR:\n RUC, Nombre",
            "bot-message"
        );
        return;
    }

    // Si los datos son válidos, procesarlos
    const datosUsuario = {
        ruc: datos[0].trim(),
        nombre: datos[1].trim(),
        numeroPoliza: opcion === "Renovar SCTR" ? datos[2].trim() : undefined,
        vigenciaPoliza: opcion === "Renovar SCTR" ? datos[3].trim() : undefined
    };

    // Mensaje de confirmación y llamado a la función manejarOtros
    mostrarMensaje("Datos validados correctamente. Procesando información...", "bot-message");
    manejarOtros(); // Continuar con el flujo
    esperandoDatosSCTR = false; // Desactivar la espera de datos SCTR
}

// Función para manejar las opciones de "Vida Ley"
function manejarVidaLey(opcion) {
    opcionVidaLey = opcion; // Guardar la opción seleccionada en la variable global

    switch (opcion) {
        case "Renovar Vida Ley":
            mostrarMensaje("Por favor, ingresa los siguientes datos en una sola línea separados por comas:\nRUC, Nombre, N° de Póliza, Vigencia de la póliza", "bot-message");
            esperandoDatosVidaLey = true; // Activar la espera de datos Vida Ley
            break;
        case "Cotizar Vida Ley":
            mostrarMensaje("Por favor, ingresa los siguientes datos en una sola línea separados por comas:\nRUC, Nombre", "bot-message");
            esperandoDatosVidaLey = true; // Activar la espera de datos Vida Ley
            break;
        case "Contactar a un asesor":
            manejarOtros();
            break;
    }
}

// Función para validar y procesar los datos del usuario para Vida Ley
function manejarDatosVidaLey(entradaUsuario, opcion) {
    // Separar los datos ingresados por comas
    const datos = entradaUsuario.split(",");

    // Validar que se hayan ingresado todos los campos requeridos
    if ((datos.length < 2 && opcion === "Cotizar Vida Ley") || 
        (datos.length < 4 && opcion === "Renovar Vida Ley") || 
        datos.some(campo => campo.trim() === "")) {
        mostrarMensaje(
            "Por favor, asegúrate de ingresar todos los datos en el siguiente formato:\n" +
            "Renovar Vida Ley:\n RUC, Nombre, N° de Póliza, Vigencia de la póliza\n" +
            "Cotizar Vida Ley:\n RUC, Nombre",
            "bot-message"
        );
        return;
    }

    // Si los datos son válidos, procesarlos
    const datosUsuario = {
        ruc: datos[0].trim(),
        nombre: datos[1].trim(),
        numeroPoliza: opcion === "Renovar Vida Ley" ? datos[2].trim() : undefined,
        vigenciaPoliza: opcion === "Renovar Vida Ley" ? datos[3].trim() : undefined
    };

    // Mensaje de confirmación y llamado a la función manejarOtros
    mostrarMensaje("Datos validados correctamente. Procesando información...", "bot-message");
    manejarOtros(); // Continuar con el flujo
    esperandoDatosVidaLey = false; // Desactivar la espera de datos Vida Ley
}




function manejarArchivoAdjunto(event) {
    const fileInput = event.target;
    const archivo = fileInput.files[0];

    if (archivo) {
        // Crear un objeto FormData para enviar el archivo y los datos
        const formData = new FormData();
        formData.append("archivo", archivo); // Agregar el archivo al FormData
        formData.append("mensaje", "Este es el mensaje que quiero enviar"); // Agregar el mensaje, o captura lo que necesites

        // Enviar los datos al servidor
        fetch("http://localhost:3000/send-email", {
            method: "POST",
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log("Archivo enviado exitosamente:", data);
            mostrarMensaje("Tu archivo y mensaje han sido enviados correctamente.", "bot-message");
        })
        .catch(error => {
            console.error("Error al enviar el archivo:", error);
            mostrarMensaje("Hubo un error al enviar el archivo.", "bot-message");
        });
    }

    // Resetear el campo de archivo para permitir una nueva carga
    fileInput.value = "";
}




// Variable para almacenar los mensajes del chatbot
let mensajesChatbot = [];

// Interceptar y almacenar mensajes en el chat
function mostrarMensaje(mensaje, tipo) {
    const chatMessages = document.getElementById("chatbot-messages");

    // Crear el elemento para el mensaje
    const mensajeElemento = document.createElement("div");
    mensajeElemento.className = tipo;
    mensajeElemento.innerText = mensaje;

    // Agregar el mensaje al chat
    chatMessages.appendChild(mensajeElemento);

    // Almacenar el mensaje en la lista de mensajes
    mensajesChatbot.push(`${tipo === "bot-message" ? "Chatbot: " : "Usuario: "} ${mensaje}`);

    // Verificar si el mensaje desencadena el envío de correo
    if (
        tipo === "bot-message" &&
        (mensaje === "En breve, un asesor se pondrá en contacto contigo." ||
            mensaje === "Listo, en unos minutos nos pondremos en contacto contigo.")
    ) {
        enviarDatosPorCorreo(mensajesChatbot);
    }
}

// Función para enviar los datos capturados al servidor
function enviarDatosPorCorreo(datos) {
    fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            subject: "Información del Chatbot",
            text: datos.join("\n"), // Convertir el array en texto
        }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error al enviar el correo");
            }
            console.log("Correo enviado con éxito");
        })
        .catch((error) => console.error("Error al enviar el correo:", error));
}



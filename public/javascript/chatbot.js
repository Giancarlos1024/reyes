// Mostrar/Ocultar la ventana del chatbot
function toggleChatbot() {
    const chatbotWindow = document.getElementById("chatbot-window");
    chatbotWindow.classList.toggle("show-chatbot");
}

window.onload = function() {
    document.getElementById("chatbot-window").classList.remove("show-chatbot");
};

// Arrays de preguntas y respuestas
const questions = [
    "hola",
    "como estas",
    "que es javascript",
    "que es html",
    "adios"
];

const answers = [
    "¡Hola! ¿En qué puedo ayudarte?",
    "¡Estoy aquí para ayudarte! ¿En qué tienes dudas?",
    "JavaScript es un lenguaje de programación que permite añadir interactividad a tu sitio web.",
    "HTML es un lenguaje de marcado para estructurar el contenido de las páginas web.",
    "¡Hasta luego! ¡Espero verte pronto!"
];

// Función para obtener la respuesta con coincidencia aproximada
function getResponse(input) {
    input = input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Normaliza y elimina acentos
    input = input.trim();

    for (let i = 0; i < questions.length; i++) {
        // Comprobar coincidencias parciales de palabras clave
        if (input.includes(questions[i])) {
            return answers[i];
        }
    }

    // Respuesta predeterminada si no encuentra coincidencia
    return "Lo siento, no tengo una respuesta para esa pregunta.";
}

// Función para enviar mensajes
document.querySelector("#chatbot-input button").addEventListener("click", function() {
    const inputElement = document.querySelector("#chatbot-input input");
    const userMessage = inputElement.value;

    if (userMessage.trim()) {
        displayMessage(userMessage, "user-message");

        const botResponse = getResponse(userMessage);
        displayMessage(botResponse, "bot-message");

        inputElement.value = "";
    }
});

function displayMessage(message, className) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(className);
    messageElement.textContent = message;
    document.querySelector("#chatbot-messages").appendChild(messageElement);
    document.querySelector("#chatbot-messages").scrollTop = document.querySelector("#chatbot-messages").scrollHeight;
}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Botón del Chatbot -->
    <div id="chatbot-button" onclick="toggleChatbot()">
        <img src="../public/img/FercitoChat.png" alt="Chatbot Icon">
    </div>

    <!-- Ventana del Chatbot -->
    <div id="chatbot-window">
        <div id="chatbot-header">
            <div>
                <img class="chat-fercito-logo" src="../public/img/FercitoChat.png" alt="Chatbot Icon">
                <span>Fercito</span>
            </div>
            <a href=""> <img src="../public/img/phone.png" alt="phone"></a>
            <button class="closebutton" onclick="toggleChatbot()">X</button>
        </div>
        <div id="chatbot-messages">
        <div class="presentacion-chatbot">
                    <img class="chat-fercito-logo" src="../public/img/FercitoChat.png" alt="Chatbot Icon"> 
                    <p>¡Hola! Soy Fercito, el asistente virtual de F. REYES Y CIA. ¿En qué puedo ayudarte hoy?</p>
                </div>
                <div class="options">
                    <button class="option-button">Horarios de atención</button>
                    <button class="option-button">Contáctenos</button>
                    <button class="option-button">Oficinas</button>
                    <button class="option-button">Contactar con un asesor</button>
                </div>
        </div>
        <div id="chatbot-input">
            <input type="text" placeholder="Escribe tu mensaje..." />
            <button>Enviar</button>
        </div>
    </div>
    <script src="../public/javascript/chatbot.js"></script>
</body>
</html>
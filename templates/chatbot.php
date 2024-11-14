<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../public/css/style.css">
</head>
<body>
    <!-- Botón del Chatbot -->
    <div id="chatbot-button" onclick="toggleChatbot()">
        <img src="../public/img/FercitoChat.png" alt="Chatbot Icon">
    </div>

    <!-- Ventana del Chatbot -->
    <div id="chatbot-window" class="hidden">
        <div id="chatbot-header">
            <div>
                <img class="chat-fercito-logo" src="../public/img/FercitoChat.png" alt="Chatbot Icon">
                <span>Fercito</span>
            </div>
            <button class="closebutton" onclick="toggleChatbot()">X</button>
        </div>
        <div id="chatbot-messages">
            <!-- Aquí solo se mostrará el mensaje de bienvenida al iniciar -->
        </div>
        <div id="chatbot-input">
            <input type="text" id="entrada-usuario" placeholder="Escribe tu mensaje..." />
            <button onclick="manejarEntradaUsuario()">Enviar</button>
        </div>
    </div>
    <script src="../public/javascript/chatbot.js"></script>
</body>
</html>

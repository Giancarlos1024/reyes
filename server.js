/*const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors"); // Importar cors

const app = express();
const PORT = 3000;

// Habilitar CORS para todas las solicitudes
app.use(cors());

app.use(bodyParser.json());

const userGmail = "fysat.20@gmail.com";
const passAppGmail = "nmvv njkx byic bwkb";

//const userGmail = "giancarlosvlsqz@gmail.com";
//const passAppGmail = "lxkh mmsr ilnm jptu";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: userGmail,
        pass: passAppGmail,
    },
});

app.post("/send-email", (req, res) => {
    const { subject, text } = req.body;

    const mailOptions = {
        from: userGmail,
        to: userGmail,
        subject: subject,
        text: text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: "Error al enviar el correo" });
        }
        console.log("Correo enviado: " + info.response);
        res.status(200).json({ message: "Correo enviado con éxito" });
    });
});

app.post("/send-contact-form", (req, res) => {
    const { nombre, email, telefono, tipoSeguro, oficina, mensaje, promo } = req.body;

    const mailOptions = {
        from: userGmail,
        to: userGmail,
        subject: `Nuevo mensaje de contacto de ${nombre}`,
        text: `
            Nombre: ${nombre}
            Correo Electrónico: ${email}
            Teléfono: ${telefono}
            Tipo de Seguro: ${tipoSeguro}
            Oficina: ${oficina}
            Mensaje: ${mensaje}
            Promociones: ${promo ? "Sí" : "No"}
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: "Error al enviar el correo" });
        }
        console.log("Correo enviado: " + info.response);
        res.status(200).json({ message: "Correo enviado con éxito" });
    });
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});*/


const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 3000;

// Habilitar CORS
app.use(cors());

// Configuración para procesar JSON
app.use(bodyParser.json());

// Configuración de multer para manejar archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, "uploads");
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

// Credenciales del correo
const userGmail = "fysat.20@gmail.com";
const passAppGmail = "nmvv njkx byic bwkb";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: userGmail,
        pass: passAppGmail,
    },
});

// Endpoint para enviar correo con texto y archivo (si existe)
app.post("/send-email", upload.single("archivo"), (req, res) => {
    const { texto } = req.body;

    // Configuración básica del correo
    const mailOptions = {
        from: userGmail,
        to: userGmail,
        subject: "Información del Chatbot",
        text: texto ||"Información del Chatbot",
    };

    // Si hay un archivo, agregarlo como adjunto
    if (req.file) {
        mailOptions.attachments = [
            {
                path: req.file.path,
            },
        ];
    }

    // Enviar el correo
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error al enviar el correo:", error);
            return res.status(500).json({ message: "Error al enviar el correo" });
        }
        console.log("Correo enviado:", info.response);
        res.status(200).json({ message: "Correo enviado con éxito" });
    });
});


app.post("/send-contact-form", (req, res) => {
    const { nombre, email, telefono, tipoSeguro, oficina, mensaje, promo } = req.body;

    const mailOptions = {
        from: userGmail,
        to: userGmail,
        subject: `Nuevo mensaje de contacto de ${nombre}`,
        text: `
            Nombre: ${nombre}
            Correo Electrónico: ${email}
            Teléfono: ${telefono}
            Tipo de Seguro: ${tipoSeguro}
            Oficina: ${oficina}
            Mensaje: ${mensaje}
            Promociones: ${promo ? "Sí" : "No"}
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: "Error al enviar el correo" });
        }
        console.log("Correo enviado: " + info.response);
        res.status(200).json({ message: "Correo enviado con éxito" });
    });
});




// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



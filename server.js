const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors"); // Importar cors

const app = express();
const PORT = 3000;

// Habilitar CORS para todas las solicitudes
app.use(cors());

app.use(bodyParser.json());

// const userGmail = "fysat.20@gmail.com";
// const passAppGmail = "pxjk xytb qlnx lhit";

const userGmail = "giancarlosvlsqz@gmail.com";
const passAppGmail = "lxkh mmsr ilnm jptu";

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
});

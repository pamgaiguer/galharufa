const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', function (req, res, next) {
    const {nome, email, telefone, mensagem} = req.body;

    const mailOptions = {
        from: 'Galharufa Site <atendimento@agenciagalharufa.com.br>',
        to: 'atendimento@agenciagalharufa.com.br',
        subject: 'Contato pelo site',
        text: 
            `
            Nome: ${nome}
            Email: ${email}
            Telefone: ${telefone}
            Mensagem: ${mensagem}
            `
    };

    const transporter = nodemailer.createTransport({
        host: 'smtp.umbler.com',
        port: 587,
        auth: {
            user: 'atendimento@agenciagalharufa.com.br',
            pass: 'galharufa123'
        }
    });

    transporter.sendMail(mailOptions).then(err => {
        if (err.rejected.length > 0) return res.status(400).json(err);
        return res.status(200).json({ message: 'ok' });
    })
});

module.exports = router;

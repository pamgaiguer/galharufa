const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', function (req, res, next) {
    const {nome, email, telefone, mensagem} = req.body;

    const mailOptions = {
        from: 'Galharufa Contato <contato@agenciagalharufa.com.br>',
        to: 'contato@agenciagalharufa.com.br',
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
            user: 'contato@agenciagalharufa.com.br',
            pass: 'agencia1234'
        }
    });

    transporter.sendMail(mailOptions).then(err => {
        if (err.rejected.length > 0) return res.status(400).json(err);
        return res.status(200).json({ message: 'ok' });
    })
});

module.exports = router;

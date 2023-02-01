import { ClientInputEmail } from './../model/ClientModel';
import nodemailer from "nodemailer"

export const EmailServer = (newEmail: ClientInputEmail) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sobralnetmovel@gmail.com',
            pass: 'diebcvfbxmmppcxh'
        }
    });

    const mailOptions = {
        from: 'sobralnetmovel@gmail.com',
        to: 'juniorcvnnn@gmail.com',
        subject: 'Sending Email using Node.js',
        html: `
        <h1>Nova Mensagem</h1>
        <h2>Dados Pessoais</h2>
        <p>--------------------------</p>
        <h3>Nome:</h3>
        <p>${newEmail.nome}</p>
        <h3>WhatsApp:</h3>
        <p>${newEmail.whatsapp}</p>
        <h3>Email:</h3>
        <p>${newEmail.email}</p>
        <h2>Endereço</h2>
        <p>--------------------------</p>
        <h3>Rua:</h3>
        <p>${newEmail.rua}</p>
        <h3>Nº:</h3>
        <p>${newEmail.numero}</p>
        <h3>Bairro:</h3>
        <p>${newEmail.bairro}</p>
        <h3>Cidade:</h3>
        <p>${newEmail.nome}</p>
        <h2>Descrição</h2>
        <p>--------------------------</p>
        <p>${newEmail.descricao}</p>
        `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}
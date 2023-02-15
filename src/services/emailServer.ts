import { ClientInputEmail } from './../model/ClientModel';
import nodemailer from "nodemailer"
import dotenv from 'dotenv'

dotenv.config();

export const EmailServer = async (newEmail: ClientInputEmail) => {
    try {
        
        console.log(process.env.USERMAIL)
        console.log(process.env.PASS)

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: `${process.env.USERMAIL}`,
                pass: `${process.env.PASS}`
            }
        });

        const mailOptions = {
            from: 'sobralnetmovel@gmail.com',
            //to: 'sac@sobralnet.com.br',
            to:"juniorcvnnn@gmail.com",
            subject: `Nova Solicitação! ${new Date().toDateString()}`,
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
        //VERIFICA serviço de EMAIL
        await transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
            }
        });
        return await transporter.sendMail(mailOptions);

    } catch (err: any) {
        console.log(err.message);
        throw new Error("Erro de servidor de email")
    }

}
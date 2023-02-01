import { ClientOutputData, ClientInputEmail } from './model/ClientModel';
import { Request, Response } from "express";
import app from "./server";
import { dataBase } from "./services/data";
import { EmailServer } from './services/emailServer';

app.get("/data-client/:numTell",async(req:Request,resp:Response)=>{
    const numTell=req.params.numTell;
    console.log(numTell);
    
    try{
        const data =await dataBase()

        const userData=data.find((user:any)=>user.telefone===numTell)
        const myResponse:ClientOutputData={
            nome:userData.cliente_nome,
            consumoDados:userData.consumo_dados,
            consumoMin:userData.consumo_minutos,
            consumoSMS:userData.consumo_sms,
            plano:userData.plano_nome,
            status:userData.simcard_status
        }
        resp.send(myResponse);
    }catch(err:any){
        resp.send(undefined)
    }

})

app.post("/send-email",async(req:Request,resp:Response)=>{
    
    try{
        const {name,whatsApp,email,street,num,district,city,description}=req.body
        if (!name|| !whatsApp|| !email|| !street|| !num|| !district|| !city|| !description){
            throw new Error("Erro de dados! Verifique se os caampos estão preenchidos corretamente!");
        }
        const newEmail:ClientInputEmail={
           nome: req.body.name,
           whatsapp: req.body.whatsApp,
           email: req.body.email,
           rua: req.body.street,
           numero: req.body.num,
           bairro: req.body.district,
           cidade: req.body.city,
           descricao:req.body.description
        }
    
        console.log(newEmail);
        await EmailServer(newEmail);
        resp.send(`Email enviado com sucesso! SobralNet Movel agradece pelo contato! Em breve retornaremos o contato!`);
    }catch(err:any){
        resp.send(err.message);
    }

})



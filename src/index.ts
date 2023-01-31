import { ClientOutputData } from './model/ClientModel';
import axios from "axios";
import { Request, Response } from "express";
import app from "./server";
import { dataBase } from "./services/data";

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
            plano:userData.plano_nome
        }
        resp.send(myResponse);
    }catch(err:any){
        resp.send(err.message)
    }
})
import express from "express"

import {AddressInfo} from "net"


import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())
try{
    const server = app.listen(3003||3004||3007||3008, () => {
            const address=server.address() as AddressInfo;
            console.log(`server is runisng on port ${address.port}`)
        }  
    );

}catch(e:any){
    console.log(e.message);
}

export default app;
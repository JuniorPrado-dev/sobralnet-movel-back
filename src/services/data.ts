import axios  from 'axios';
import dotenv from 'dotenv'

dotenv.config();

export const dataBase = async () => {
    let data: any;
    const periodoAtual=new Date().toISOString().slice(0,7);
    try {
        await axios.post(`https://easy2use.com.br/mvno/api/public/consumo-consolidado?user_token={${process.env.TOTEN}}`,
            {
                periodo: periodoAtual
            }, {
            headers: {
                'content-Type': 'application/json',
            }
        }).then((response) => {
            data = response.data;
        }).catch((error:any) => console.log(error.message));
        
        return data.results
    }catch(err){
        throw err;
    }
}
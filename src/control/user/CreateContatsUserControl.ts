import {Response, Request} from 'express'
import { CreateContatsUserModel } from '../../model/user/CreateContatsUserModel';


class CreateContatsUserControl 
{
    async handle(req:Request, res:Response)
    {
        const {contatos, user_id} = req.body;
        const createContats = new CreateContatsUserModel();

        const arrayContatos = [];

        contatos.map(async item=>{

            let nome = item.nome;
            let numero = item.numero;

            const contato = await createContats.execute({nome,numero,user_id});

            if(contato){
                arrayContatos.push(contato);
            }
            
            if(arrayContatos.length === contatos.length){
                return res.json(arrayContatos);
            }
        })

    }

}

export {CreateContatsUserControl};
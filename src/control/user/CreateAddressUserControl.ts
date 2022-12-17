import {Request, Response} from 'express'
import { CreateAddressUserModel } from '../../model/user/CreateAddressUserModel';


class CreateAddressUserControl
{
    async handle(req: Request, res: Response)
    {
        const {cep,rua,bairro,numero,complemento,estado,cidade, user_id} = req.body;

        const createAddress = new CreateAddressUserModel();

        const address = await createAddress.execute({cep,rua,bairro,numero,complemento,estado,cidade,user_id})

        res.json(address);
    }
}

export {CreateAddressUserControl}
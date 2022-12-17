import {Request, response, Response} from 'express';
import {CreateUserModel} from '../../model/user/CreateUserModel'

class CreateUserControl
{
    async handle(req: Request, res:Response)
    {
        const {nome, email, senha } = req.body;

        const createUserModel = new CreateUserModel();

        const user = await createUserModel.execute({
            nome,
            email,
            senha
        });

        return res.json(user)
    }
}

export {CreateUserControl}
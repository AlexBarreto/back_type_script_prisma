import {Request, Response} from 'express'
import { CreateCategoryUserModel } from '../../model/user/CreateCategoryUserModel'


class CreateCategoryUserControl
{
    async handle(req: Request, res: Response)
    {
        const {nome} = req.body;
        const createCategory = new CreateCategoryUserModel();
        const category = await createCategory.execute(nome);
        return res.json(category);

    }
}

export {CreateCategoryUserControl}
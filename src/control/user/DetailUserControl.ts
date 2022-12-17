import { Response, Request } from "express";
import { DetailUserModel } from "../../model/user/DetailUserModel"

class DetailUserControl
{
    async handle(req: Request, res:Response)
    {
        const usuario_id = req.usuario_id;

        const detailUserModel = new DetailUserModel()

        const usuario = await detailUserModel.execute(usuario_id);


        return res.json(usuario);
    }
}

export {DetailUserControl}
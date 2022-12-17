import { Request, Response } from "express";
import { AuthUserModel } from "../../model/user/AuthUserModel";

class AuthUserControl
{
    async handle(req: Request, res: Response)
    {
        const {email, senha} = req.body;

        const authUserModel = new AuthUserModel();

        const auth = await authUserModel.execute({
            email,
            senha
        })

        return res.json(auth)
    }
}

export {AuthUserControl}
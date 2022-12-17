import { Request, Response } from "express";
import { AllUsersLimitModel } from "../../model/user/AllUsersLimitModel";


class AllUsersLimitControl
{
    async handle(req:Request, res:Response)
    {
        const allUsersLimitModel = new AllUsersLimitModel();
        const usuarios = await allUsersLimitModel.execute()
        res.json(usuarios)
    }
}

export {AllUsersLimitControl}
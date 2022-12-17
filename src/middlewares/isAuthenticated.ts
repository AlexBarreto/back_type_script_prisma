import { NextFunction,Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad
{
    sub:string;
}

export function isAuthenticated(req: Request, res:Response, next:NextFunction)
{
    const authToken = req.headers.authorization;

    if(!authToken)
    {
        return res.status(401).end();
    }
    const [,token] = authToken.split(" ");
    
    try {
        //validar o token

        const {sub} = verify(
            token,
            process.env.JWT_SECRET
        ) as PayLoad;

        //recuperar id do token

        req.usuario_id = sub;

        return next();

    } catch (error) {
        return res.status(401).end();
    }
}
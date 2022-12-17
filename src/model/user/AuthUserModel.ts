import { compare } from "bcryptjs";
import prismaClient from "../../prisma";
import {sign} from 'jsonwebtoken';

interface AuthRequest 
{
    email:string,
    senha:string
}


class AuthUserModel 
{
    async execute({email, senha}:AuthRequest)
    {
        const usuario = await prismaClient.user.findFirst({
            where:{
                email
            }
        })

        if(!usuario){
            throw new Error("Usuario/Senha incorreto"); 
        }

        const senhaValidacao = await compare(senha,usuario.senha);

        if(!senhaValidacao){
            throw new Error("Usuario/Senha incorreto"); 
        }


        const TOKEN = sign(

            {
                name: usuario.nome,
                email:usuario.email
            },
            process.env.JWT_SECRET,
            {
                subject:usuario.id,
                expiresIn: '30d'
            }

        )

        return {
            id:usuario.id,
            email:usuario.email,
            nome: usuario.nome,
            token: TOKEN
        }

    }
}

export {AuthUserModel};
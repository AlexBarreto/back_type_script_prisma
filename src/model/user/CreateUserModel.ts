import prismaClient from "../../prisma";
import {hash} from 'bcryptjs';

interface UserRequest 
{
    nome: string;
    email: string;
    senha: string;
}


class CreateUserModel 
{
    async execute({nome, email, senha}: UserRequest)
    {

        if(!email)
        {
            throw new Error("Email não informado");
            
        }

        const userExists = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })

        if(userExists){
            throw new Error("E-mail já existe no banco de dados");
            
        }

        const senhaHash = await hash(senha, 8);

        const user = await prismaClient.user.create({
            data:{
                nome:nome,
                email:email,
                senha:senhaHash
            },

            select:{

                id:true,
                nome:true,
                email:true
            }

        })
        
        return {user}
    }
}

export {CreateUserModel}
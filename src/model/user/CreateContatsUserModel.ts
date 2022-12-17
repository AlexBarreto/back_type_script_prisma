import prismaClient from "../../prisma";

interface ContatsRequest {
    nome:string,
    numero:string,
    user_id: string
}


class CreateContatsUserModel 
{
    async  execute({nome, numero, user_id}:ContatsRequest) {

        if(!nome)
        {
            throw new Error("Nome do contato não informado");
            
        }
        if(!numero)
        {
            throw new Error("Numero do contato não informado");
            
        }
        if(!user_id)
        {
            throw new Error("Numero do contato não informado");
            
        }

        const numeroExists = await prismaClient.contats.findFirst({
            where:{
                numero:numero
            }
        })
        if(numeroExists){
            throw new Error("Numero já existe gravado no banco de dados");
        }

        const createContats = prismaClient.contats.create({
            data:{
                nome:nome,
                numero:numero,
                user_id:user_id
            }
        })

        return createContats;
    }
}

export{CreateContatsUserModel}
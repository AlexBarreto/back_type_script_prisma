import prismaClient from "../../prisma";



class DetailUserModel 
{
    async execute(usuario_id: string)
    {
        const usuario = await prismaClient.user.findFirst({
            where:{
                id:usuario_id
            },
            select:{
                id:true,
                email:true,
                nome:true
            }
        })

        return usuario
    }
}

export {DetailUserModel}
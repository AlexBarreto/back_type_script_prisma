import prismaClient from "../../prisma";


class CreateCategoryUserModel 
{
    async execute(nome: string)
    {
        if(!nome)
        {
            throw new Error("Nome não informado");
            
        }

        const verificacao = await prismaClient.groupsCategory.findFirst({
            where:{
                nome: nome
            }
        })

        if(verificacao){
            
            throw new Error("Categoria já está cadastrado no banco");
        }

        const categoria = await prismaClient.groupsCategory.create({

            data:{
                nome: nome
            }
        })

        return categoria
    }
}

export  {CreateCategoryUserModel}
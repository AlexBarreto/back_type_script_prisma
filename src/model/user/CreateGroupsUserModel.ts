import prismaClient from "../../prisma";

interface GroupsRequest 
{
    user_id: string;
    groups_category_id: string;
}

class CreateGroupsUserModel
{
    async execute({user_id,groups_category_id}:GroupsRequest)
    {


        if(!user_id)
        {
            throw new Error("Usuario não informado");
            
        }
        if(!groups_category_id)
        {
            throw new Error("Grupo não informado");
            
        }

        const grupo = await prismaClient.groups.create({
            data:{
                user_id:user_id,
                groups_category_id:groups_category_id
            }
        })
        return grupo;
    }
}

export {CreateGroupsUserModel}
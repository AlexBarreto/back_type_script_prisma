import prismaClient from "../../prisma";



class AllUsersLimitModel 
{
    async execute()
    {
        const usuarios = prismaClient.user.findMany({
            skip:0,
            take:15
        })
        return usuarios
    }
}

export {AllUsersLimitModel}
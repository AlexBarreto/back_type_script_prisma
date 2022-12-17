import prismaClient from "../../prisma";

interface AddressRequest 
{
    cep: string;
    rua: string;
    bairro: string;
    numero: string;
    complemento: string;
    estado:string;
    cidade:string;
    user_id:string;
}


class CreateAddressUserModel 
{
    async execute({cep,rua,bairro,numero,complemento,estado,cidade,user_id}:AddressRequest)
    {
        if(!cep)
        {
            throw new Error("Nome não informado");
            
        }
        if(!rua)
        {
            throw new Error("Rua não informado");
            
        }
        if(!bairro)
        {
            throw new Error("Bairro não informado");
            
        }
        if(!estado)
        {
            throw new Error("Estado não informado");
            
        }
        if(!cidade)
        {
            throw new Error("Cidade não informado");
            
        }
        if(!user_id)
        {
            throw new Error("ID do usuario não informado");
            
        }

        const address = await prismaClient.address.create({

            data:{

                cep:cep,
                rua:rua,
                bairro:bairro,
                numero:numero,
                complemento:complemento,
                estado:estado,
                cidade:cidade,
                user_id:user_id
            }
        })

        return address
    }
}

export  {CreateAddressUserModel}
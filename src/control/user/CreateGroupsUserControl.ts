import {Response, Request} from 'express'
import { CreateGroupsUserModel } from '../../model/user/CreateGroupsUserModel'

class CreateGroupsUserControl {

    async handle(req:Request, res:Response)
    {
        const {groups, user_id} = req.body;

        const createGroups = new CreateGroupsUserModel();

        const arrayGrupos = [];

        groups.map(async item=>{

            let groups_category_id = item.groups_category_id;

            const grupo = await createGroups.execute({user_id, groups_category_id});

            arrayGrupos.push(grupo);

            if(arrayGrupos.length === groups.length){
                res.json(arrayGrupos);
            }
        })
    }
}

export {CreateGroupsUserControl}
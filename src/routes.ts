import { Router } from "express";
import {CreateUserControl} from './control/user/CreateUserControl';
import { AuthUserControl } from "./control/user/AuthUserControl";
import { DetailUserControl } from "./control/user/DetailUserControl";
import {isAuthenticated} from './middlewares/isAuthenticated';
import { CreateCategoryUserControl } from "./control/user/CreateCategoryUserControl";
import { CreateContatsUserControl } from "./control/user/CreateContatsUserControl";
import { CreateAddressUserControl } from "./control/user/CreateAddressUserControl";
import { CreateGroupsUserControl } from "./control/user/CreateGroupsUserControl";
import { AllUsersLimitControl } from "./control/user/AllUsersLimitControl";

const router = Router();

//ROTAS USER
router.post('/users', new CreateUserControl().handle);

router.post('/session', new AuthUserControl().handle);

router.get('/me', isAuthenticated , new DetailUserControl().handle);

router.get('/allusers', new AllUsersLimitControl().handle);


//ROTAS CONTATOS DO USUARIO
router.post('/contats', isAuthenticated, new CreateContatsUserControl().handle);

//ROTAS ENDEREÇOS DO USUARIO

router.post('/address', isAuthenticated, new CreateAddressUserControl().handle);

//ROTAS CATEGORIA DE USUARIO

router.post('/category', isAuthenticated, new CreateCategoryUserControl().handle );

//ROTAS GRUPOS DE USUARIOS

router.post('/groups', isAuthenticated, new CreateGroupsUserControl().handle );

export {router};
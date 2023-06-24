import { Router } from 'express';

import UsersController from '../controllers/users.controller';

const router = Router();

router.get('/', UsersController.getAllUsers);
router.post('/', UsersController.getUsers);

export default router;

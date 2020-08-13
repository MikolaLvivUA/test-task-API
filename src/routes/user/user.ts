import { Router } from 'express';
import { userController } from '../../controller';
import { isNewUserValid, isUpdatedDataValid } from '../../middlewares';

const router = Router();

router.post('/', isNewUserValid, userController.createUser);
router.get('/:uuid', userController.getUserByUuid);
router.get('/', userController.getAllUsers);
router.patch('/:uuid', isUpdatedDataValid, userController.updateUserByUuid);
router.delete('/:uuid', userController.deleteUserByUuid);

export const userRouter = router;

import { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { IRequestBodyUser } from '../../interface/user';
import { userService } from '../../service/user';
import { ResponseStatusCodesEnum } from '../../constants';
import { UserNotFoundException } from '../../Error/user';

class UserController {
  async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const requestBodyData: IRequestBodyUser = req.body;
      requestBodyData.uuid = uuidv4();

      const newUser = await userService.createUser(requestBodyData);

      res.status(ResponseStatusCodesEnum.CREATED).json({ data: newUser });
    } catch (e) {
      return next(e);
    }
  }

  async getUserByUuid(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { uuid } = req.params;

      const user = await userService.getUserByUuid(uuid);

      if (!user) {
        throw new UserNotFoundException('User Not Found');
      }

      res.json({ data: user });
    } catch (e) {
      return next(e);
    }
  }

  async getAllUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users = await userService.getAllUsers();

      res.json({ data: users });
    } catch (e) {
      return next(e);
    }
  }

  async updateUserByUuid(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { uuid } = req.params;
      const updateData: Partial<IRequestBodyUser> = req.body;

      const updatedUser = await userService.updateUserByUuid(uuid, updateData);

      if (!updatedUser) {
        throw new UserNotFoundException('User Not Found');
      }

      res.json({ data: updatedUser });
    } catch (e) {
      return next(e);
    }
  }

  async deleteUserByUuid(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { uuid } = req.params;

      const user = await userService.getUserByUuid(uuid);

      if (!user) {
        throw new UserNotFoundException('User Not Found');
      }

      await userService.deleteUserByUuid(user.uuid);

      res.status(ResponseStatusCodesEnum.NO_CONTENT).end();
    } catch (e) {
      return next(e);
    }
  }
}

export const userController = new UserController();

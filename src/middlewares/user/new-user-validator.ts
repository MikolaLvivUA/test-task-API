import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';

import { IRequestBodyUser } from '../../interface/user';
import { newUserValidator } from '../../validators';
import { CustomException } from '../../Error';
import { ResponseStatusCodesEnum } from '../../constants';

export const isNewUserValid = async (req: Request, res: Response, next: NextFunction) => {
  const user: IRequestBodyUser = req.body;

  const { error } = Joi.validate(user, newUserValidator);

  if (error) {
    return next(new CustomException(ResponseStatusCodesEnum.BAD_REQUEST, error.details[0].message));
  }

  next();
};

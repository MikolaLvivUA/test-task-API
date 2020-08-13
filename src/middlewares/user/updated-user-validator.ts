import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';

import { IRequestBodyUser } from '../../interface/user';
import { UpdatedDataValidator } from '../../validators';
import { CustomException } from '../../Error';
import { ResponseStatusCodesEnum } from '../../constants';

export const isUpdatedDataValid = async (req: Request, res: Response, next: NextFunction) => {
  const updatedData: Partial<IRequestBodyUser> = req.body;
  const { error } = Joi.validate(updatedData, UpdatedDataValidator);

  if (error) {
    return next(new CustomException(ResponseStatusCodesEnum.BAD_REQUEST, error.details[0].message));
  }

  next();
};

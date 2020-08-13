import * as Joi from 'joi';

import { RegExpEnum } from '../../constants';

export const newUserValidator = Joi.object({
  name: Joi.string().trim().min(2).max(255)
    .required(),
  surname: Joi.string().trim().min(2).max(255)
    .required(),
  email: Joi.string().trim().regex(RegExpEnum.email).required(),
});

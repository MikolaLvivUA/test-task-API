import * as Joi from 'joi';

import { RegExpEnum } from '../../constants';

export const UpdatedDataValidator = Joi.object({
  name: Joi.string().trim().min(2).max(255),
  surname: Joi.string().trim().min(2).max(255),
  email: Joi.string().trim().regex(RegExpEnum.email),
});

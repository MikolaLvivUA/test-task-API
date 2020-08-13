import {
  Document, Model, model, Schema,
} from 'mongoose';

import { TableNamesEnum } from '../../constants';
import { IUser } from '../../interface/user';

export type UserType = IUser & Document;

export const UserSchema: Schema = new Schema<IUser>({
  uuid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const UserModel: Model<UserType> = model<UserType>(TableNamesEnum.USERS, UserSchema);

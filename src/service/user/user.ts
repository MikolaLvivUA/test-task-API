import { UserModel } from '../../database';
import { IRequestBodyUser, IUser } from '../../interface';

class UserService {
  createUser(user: IRequestBodyUser): Promise<IUser> {
    const modelToSave = new UserModel(user);

    return modelToSave.save();
  }

  getUserByUuid(uuid: string): Promise<IUser | null> {
    return UserModel.findOne({ uuid }).exec();
  }

  getAllUsers(): Promise<IUser[]> {
    return UserModel.find().exec();
  }

  updateUserByUuid(uuid: string, uddateData: Partial<IRequestBodyUser>): Promise<IUser | null> {
    return UserModel.findOneAndUpdate({ uuid }, uddateData, { new: true }).exec();
  }

  async deleteUserByUuid(uuid: string): Promise<void> {
    await UserModel.findOneAndDelete({ uuid });
  }
}

export const userService = new UserService();

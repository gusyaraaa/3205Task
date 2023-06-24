/* eslint-disable class-methods-use-this */
import UsersModel from '../models/users.model';

import { User } from '../types/User';

class UsersService {
    getAllUsers = async (): Promise<User[]> => {
        const users = await UsersModel.find();

        return users;
    };

    getUsers = async ({ email, number }: User): Promise<User[]> => {
        const users = await UsersModel.findOne({ email, number });

        return users;
    };
}

export default new UsersService();

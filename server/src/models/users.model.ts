/* eslint-disable class-methods-use-this */
import users from '../db/users.json';

import { User } from '../types/User';
import sleep from '../utils/sleep';

class UsersModel {
    find = async (): Promise<User[]> => {
        await sleep(5000);

        return users;
    };

    findOne = async ({ email, number }: User): Promise<User[]> => {
        await sleep(5000);

        return users.filter(
            (user) => user.email === email || user.number === number
        );
    };
}

export default new UsersModel();

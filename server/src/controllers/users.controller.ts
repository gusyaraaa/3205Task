/* eslint-disable class-methods-use-this */
import { NextFunction, Request, Response } from 'express';
import UsersService from '../services/users.service';

import { User } from '../types/User';

class UsersController {
    getAllUsers = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response<User[]> | void> => {
        try {
            const users = await UsersService.getAllUsers();

            return res.json(users);
        } catch (err) {
            return next(err);
        }
    };

    getUsers = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response<User[]> | void> => {
        try {
            const { email, number } = req.body;
            const users = await UsersService.getUsers({ email, number });

            return res.json(users);
        } catch (err) {
            return next(err);
        }
    };
}

export default new UsersController();

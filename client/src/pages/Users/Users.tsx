import { useState } from 'react';
import { CanceledError } from 'axios';

import Container from '../../components/Container/Container';
import UsersForm from './UsersForm/UsersForm';
import UsersList from './UsersList/UsersList';

import client from '../../api/client';
import { User } from '../../types/User';

type ResponseData = {
    isLoading: boolean;
    error?: Error | null;
    data?: User[] | null;
};

const Users: React.FC = () => {
    const [data, setData] = useState<ResponseData>({
        isLoading: false,
        error: null,
        data: null
    });

    const getUsers = async ({ email, number }: User) => {
        setData({ ...data, isLoading: true });

        client
            .post<User[]>('/users', {
                email,
                number: number?.replaceAll('-', '')
            })
            .then((data) => {
                setData({ data: data.data, isLoading: false, error: null });
            })
            .catch((err: Error) => {
                if (err instanceof CanceledError) {
                    setData({ data: null, isLoading: true, error: null });
                    return;
                }

                setData({ data: null, isLoading: false, error: err });
            });
    };

    return (
        <Container>
            <UsersForm handleSubmit={getUsers} />
            <UsersList
                users={data.data}
                error={data.error}
                isLoading={data.isLoading}
            />
        </Container>
    );
};

export default Users;

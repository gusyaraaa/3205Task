import classNames from 'classnames/bind';

import { User } from '../../../types/User';
import { normalizeNumber } from '../../../utils/normalizeNumber';

import styles from './UsersList.module.css';

const cx = classNames.bind(styles);

type Props = {
    isLoading: boolean;
    error?: Error | null;
    users?: User[] | null;
};

const UsersList: React.FC<Props> = ({ isLoading, users, error }) => {
    const renderContent = () => {
        if (isLoading) {
            return <p className={cx('loader')}>Загрузка...</p>;
        }

        if (error) {
            return <p className={cx('error')}>{error.message}</p>;
        }

        if (!users?.length) {
            return <p>Пусто</p>;
        }

        return users.map((user, index) => (
            <div className={cx('item')} key={`${user.email}_${index}`}>
                <p>
                    <span style={{ fontWeight: 600 }}>Email:</span> {user.email}
                </p>
                {user?.number && (
                    <p>
                        <span style={{ fontWeight: 600 }}>Number:</span>{' '}
                        {normalizeNumber(user.number)}
                    </p>
                )}
            </div>
        ));
    };

    return <div className={cx('users')}>{renderContent()}</div>;
};

export default UsersList;

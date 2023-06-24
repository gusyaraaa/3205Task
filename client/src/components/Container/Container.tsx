import classNames from 'classnames/bind';

import styles from './Container.module.css';

const cx = classNames.bind(styles);

const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <div className={cx('container')}>{children}</div>;
};

export default Container;

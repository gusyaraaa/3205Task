import classNames from 'classnames/bind';

import styles from './Button.module.css';

const cx = classNames.bind(styles);

type Props = {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    type?: 'submit';
    disabled?: boolean;
};

export const Button: React.FC<Props> = ({ children, onClick, type, disabled }) => {
    return (
        <button
            className={cx('button', { button_disabled: disabled })}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

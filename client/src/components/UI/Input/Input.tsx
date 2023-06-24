import classNames from 'classnames/bind';
import InputMask from 'react-input-mask';

import styles from './Input.module.css';

const cx = classNames.bind(styles);

type Props = {
    label: string;
    value?: string;
    required?: boolean;
    error?: string;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    disabled?: boolean;
    readOnly?: boolean;
    mask?: string;
    name: string;
};

export const Input: React.FC<Props> = ({
    label,
    value,
    required,
    error,
    onBlur,
    onFocus,
    onChange,
    type,
    disabled,
    readOnly,
    mask,
    name
}) => {
    return (
        <label className={cx('field')}>
            {mask ? (
                <InputMask
                    className={cx('input', {
                        input_filled: !!value
                    })}
                    value={value}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    type={type}
                    onChange={onChange}
                    disabled={disabled}
                    readOnly={readOnly}
                    name={name}
                    mask={mask}
                />
            ) : (
                <input
                    className={cx('input', {
                        input_filled: !!value
                    })}
                    value={value}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    type={type}
                    onChange={onChange}
                    disabled={disabled}
                    readOnly={readOnly}
                    name={name}
                />
            )}

            {label && (
                <span className={cx('label')}>
                    {label}
                    {required && <span className={cx('required')}>*</span>}
                </span>
            )}

            {error && <span className={cx('error')}>{error}</span>}
        </label>
    );
};

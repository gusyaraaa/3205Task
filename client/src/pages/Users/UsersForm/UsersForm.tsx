import classNames from 'classnames/bind';
import { Field, Form } from 'react-final-form';

import { Input } from '../../../components/UI/Input/Input';
import { Button } from '../../../components/UI/Button/Button';

import { createValidation } from './validation';
import { User } from '../../../types/User';

import styles from './UsersForm.module.css';

const cx = classNames.bind(styles);

const UsersForm: React.FC<any> = ({ handleSubmit }) => {
    return (
        <>
            <Form<User>
                initialValues={{ email: '', number: '' }}
                validate={createValidation()}
                validateOnMount
                validateOnBlur
                onSubmit={handleSubmit}
            >
                {({ handleSubmit, valid, values }) => {
                    return (
                        <div className={cx('form')}>
                            <Field name='email'>
                                {({ input, meta }) => (
                                    <Input
                                        {...input}
                                        label='Email'
                                        required
                                        error={
                                            meta.touched
                                                ? meta.error
                                                : undefined
                                        }
                                    />
                                )}
                            </Field>
                            <Field name='number'>
                                {({ input, meta }) => (
                                    <Input
                                        {...input}
                                        label='Number'
                                        mask='99-99-99'
                                        error={
                                            meta.touched
                                                ? meta.error
                                                : undefined
                                        }
                                    />
                                )}
                            </Field>

                            <Button
                                onClick={() =>
                                    handleSubmit({
                                        email: values.email,
                                        number: values.number
                                    } as any)
                                }
                                disabled={!valid}
                            >
                                Отправить
                            </Button>
                        </div>
                    );
                }}
            </Form>
        </>
    );
};

export default UsersForm;

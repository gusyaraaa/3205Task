import { FormValues } from './UsersForm';

const REQUIRED = 'Поле обязательно для заполнения';
const INVALID_EMAIL = 'Некорректная почта';
const INVALID_NUMBER = 'Некорректный номер';

const isValidNumber = (number: string) => {
    const re = new RegExp('-|_', 'g');

    return number.replaceAll(re, '').length === 6;
};

const isValidEmail = (email: string) => {
    // eslint-disable-next-line no-useless-escape
    const re = new RegExp('[a-z]+@[a-z]+.[a-z]+', 'i');

    return re.test(email);
};

export const createValidation = () => (values: FormValues) => {
    const errors: { [key in keyof FormValues]?: string } = {};

    const requiredFields = [
      'email' as const
    ].filter(Boolean) as (keyof FormValues)[];

    requiredFields.forEach((key) => {
      if (!values[key]) {
        errors[key] = REQUIRED;
      }
    });

    if (values.email && !isValidEmail(values.email)) {
        errors.email = errors.email || INVALID_EMAIL;
    }

    if (values.number && !isValidNumber(values.number)) {
        errors.number = errors.number || INVALID_NUMBER;
    }

    if (Object.keys(errors).length) {
        return errors;
    }
}

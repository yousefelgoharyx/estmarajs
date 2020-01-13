import validations from './validations';

export const inputValidator = (obj, val) => {
    const nextObj = { ...obj };
    const validity = nextObj.validity;
    const params = nextObj.$params;
    const inputCheckers = validations.inputCheckers;

    Object.keys(params).forEach(validationtype => {
        const validationFucntion = inputCheckers[validationtype];
        if (validationFucntion(val, params[validationtype]) === true) {
            validity[validationtype] = true;
        } else {
            validity[validationtype] = false;
        }
    });

    return nextObj;
};

export const checkboxValidator = (obj, val) => {
    const nextObj = { ...obj };
    nextObj.validity.required = val;
    return nextObj;
};

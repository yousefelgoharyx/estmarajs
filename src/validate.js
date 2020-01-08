import v from './validation';

export const validate = (obj, val) => {
    const nextObj = { ...obj };
    const validityObj = nextObj.validity;
    const paramsObj = nextObj.$params;

    if (paramsObj.required) {
        if (v.isValidRequired(val)) {
            validityObj.required = true;
        } else {
            validityObj.required = false;
        }
    }

    if (paramsObj.between) {
        if (v.isValidBetween(val, paramsObj.between)) {
            validityObj.between = true;
        } else {
            validityObj.between = false;
        }
    }

    if (paramsObj.minLength) {
        if (v.isValidMinLength(val, paramsObj.minLength)) {
            validityObj.minLength = true;
        } else {
            validityObj.minLength = false;
        }
    } else if (paramsObj.minLength === 0) {
        validityObj.minLength = true;
    }

    if (paramsObj.maxLength) {
        if (v.isValidMaxLength(val, paramsObj.maxLength)) {
            validityObj.maxLength = true;
        } else {
            validityObj.maxLength = false;
        }
    } else if (paramsObj.maxLength === 0) {
        validityObj.maxLength = false;
    }

    if (paramsObj.email) {
        if (v.isValidEmail(val)) {
            validityObj.email = true;
        } else {
            validityObj.email = false;
        }
    }

    if (paramsObj.number) {
        if (v.isValidNumber(val)) {
            validityObj.number = true;
        } else {
            validityObj.number = false;
        }
    }
    if (paramsObj.float) {
        if (v.isValidFloat(val)) {
            validityObj.float = true;
        } else {
            validityObj.float = false;
        }
    }

    if (paramsObj.url) {
        if (v.isValidUrl(val)) {
            validityObj.url = true;
        } else {
            validityObj.url = false;
        }
    }

    if (paramsObj.pattern) {
        if (paramsObj.pattern.test(val)) {
            validityObj.pattern = true;
        } else {
            validityObj.pattern = false;
        }
    }

    return nextObj;
};

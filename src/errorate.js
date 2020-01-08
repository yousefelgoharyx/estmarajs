export const errorate = elementValidationObject => {
    const validity = elementValidationObject.validity;
    const errorMessage = elementValidationObject.errorMessage;
    const errorArr = [];

    Object.keys(validity).forEach(validateType => {
        if (!validity[validateType]) errorArr.push(validateType);
    });
    if (errorArr.length !== 0) {
        return { types: errorArr, message: errorMessage };
    }
    return false;
};

function isValidMinLength(value, minLength) {
    return value.length >= minLength;
}

function isValidMaxLength(value, maxLength) {
    return value.length <= maxLength;
}

function isValidBetween(value, arr) {
    return value.length >= arr[0] && value.length <= arr[1];
}

function isValidRequired(value) {
    return value.trim() !== '';
}

function isValidEmail(value) {
    const reEmail = new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return reEmail.test(String(value).toLowerCase());
}

function isValidNumber(value) {
    return /^-{0,1}\d+$/.test(value);
}

function isValidFloat(value) {
    return /^\d+\.\d+$/.test(value);
}

function isValidUrl(value) {
    const pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$',
        'i'
    );
    return !!pattern.test(value);
}

const inputCheckers = {
    minLength: isValidMinLength,
    maxLength: isValidMaxLength,
    required: isValidRequired,
    email: isValidEmail,
    number: isValidNumber,
    float: isValidFloat,
    url: isValidUrl,
    between: isValidBetween
};
export default { inputCheckers };

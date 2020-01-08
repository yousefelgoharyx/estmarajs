import { useState } from 'react';
import { validate } from './validate';

const injectConfig = config => {
    // Make a copy from the config
    const nextConfig = { ...config };

    // initiate the validation object
    const validation = {};

    // initiate the errors object
    const errors = {};

    Object.keys(nextConfig).forEach(key => {
        if (typeof nextConfig[key] === 'object') {
            // make a copy of each object in the config
            const configObject = { ...nextConfig[key] };

            // Store input value
            const inputValue = configObject.value || '';

            // Store message value
            const errorMessage = configObject.message || '';

            // assign the current object to just the input value
            nextConfig[key] = inputValue;

            // Delete them from the config object
            delete configObject.value;
            delete configObject.message;

            // store both params and validity objects in the validation object
            validation[key] = {
                $params: { ...configObject },
                validity: { ...configObject },
                errorMessage: errorMessage
            };

            // Validate the object
            validation[key] = validate(validation[key], inputValue);
        }
    });

    return {
        watch: nextConfig,
        validation: validation,
        touched: {},
        errors: errors
    };
};

export const useForm = (config, options) => {
    const [state, setstate] = useState(() => injectConfig(config));
    const returnedObject = {
        watch: state.watch,
        touched: state.touched,
        errors: state.errors
    };
    // if (options.advanced) returnedObject.validation = state.validation;
    const returned = [returnedObject, [state, setstate]];
    return returned;
};

// go to context >>

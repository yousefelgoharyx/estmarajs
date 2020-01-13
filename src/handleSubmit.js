import { errorate } from './errorate';
import { checkboxValidator, inputValidator } from './validators/validators';
export const handleSubmit = fstate => {
    const [state, setState] = fstate;
    const nextState = { ...state };
    const { validation, errors, watch } = nextState;

    Object.keys(validation).forEach(validationKey => {
        const inputValue = watch[validationKey];
        const type = validation[validationKey].type;
        switch (type) {
            case 'checkbox':
                validation[validationKey] = checkboxValidator(
                    validation[validationKey],
                    inputValue
                );
                break;
            default:
                validation[validationKey] = inputValidator(
                    nextState.validation[validationKey],
                    inputValue
                );
                break;
        }
        const errorsResults = errorate(validation[validationKey]);

        if (errorsResults) {
            errors[validationKey] = errorsResults;
        } else {
            delete errors[validationKey];
        }
    });
    setState(nextState);
    return errors;
};

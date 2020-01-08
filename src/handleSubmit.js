import { errorate } from './errorate';
export const handleSubmit = fstate => {
    const [state, setState] = fstate;
    const nextState = { ...state };
    const validation = nextState.validation;
    Object.keys(validation).forEach(validationKey => {
        nextState.errors[validationKey] = errorate(validation[validationKey]);
    });
    setState(nextState);
};

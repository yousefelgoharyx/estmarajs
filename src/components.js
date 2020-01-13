import { useContext, cloneElement } from 'react';
import { FormContext } from './context';
import { inputValidator, checkboxValidator } from './validators/validators';
import { errorate } from './errorate';
export const Feild = props => {
    const [state, setState] = useContext(FormContext);
    const { model, children } = props;

    const onInput = e => {
        const nextState = { ...state };
        const type = e.target.type;
        const inputValue =
            type === 'checkbox' ? e.target.checked : e.target.value;

        nextState.watch[model] = inputValue;

        if (nextState.validation[model]) {
            switch (type) {
                case 'checkbox':
                    nextState.validation[model] = checkboxValidator(
                        nextState.validation[model],
                        inputValue
                    );
                    break;
                default:
                    nextState.validation[model] = inputValidator(
                        nextState.validation[model],
                        inputValue
                    );
                    break;
            }

            if (nextState.touched[model] || nextState.errors[model]) {
                const errors = errorate(nextState.validation[model]);
                if (errors) {
                    nextState.errors[model] = errors;
                } else {
                    delete nextState.errors[model];
                }
            }
        }
        setState(nextState);
    };

    const onBlur = () => {
        if (!state.touched[model]) {
            const nextState = { ...state };
            const { touched, validation, errors, watch } = nextState;

            touched[model] = true;
            if (Object.keys(validation[model].validity).length === 0) {
                validation[model] = inputValidator(
                    validation[model],
                    watch[model]
                );
            }

            const errorateResults = errorate(validation[model]);
            if (errorateResults) {
                errors[model] = errorateResults;
            } else {
                delete errors[model];
            }
            setState(nextState);
        }
    };

    return cloneElement(children, {
        value: state.watch[model],
        onChange: e => onInput(e),
        onBlur: onBlur
    });
};

import React, { useContext, cloneElement } from 'react';
import { FormContext } from './context';
import { validate } from './validate';
import { errorate } from './errorate';
export const Input = props => {
    const [state, setState] = useContext(FormContext);
    const { model, children, ...rest } = props;

    const onInput = e => {
        console.log('hello change');
        const nextState = { ...state };
        const inputValue = e.target.value;

        nextState.watch[model] = inputValue;

        if (nextState.validation[model]) {
            nextState.validation[model] = validate(
                nextState.validation[model],
                inputValue
            );
            if (nextState.touched[model]) {
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
            nextState.touched[model] = true;
            const errors = errorate(nextState.validation[model]);
            if (errors) nextState.errors[model] = errors;
            setState(nextState);
        }
    };
    if (children) {
        const clonedInput = cloneElement(children, {
            value: state.watch[model],
            onChange: e => onInput(e),
            onBlur: onBlur
        });
        return clonedInput;
    }
    return (
        <input
            value={state.watch[model]}
            onChange={e => onInput(e)}
            onBlur={onBlur}
            {...rest}
        />
    );
};

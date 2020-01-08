import React, { createContext } from 'react';

export const FormContext = createContext({});

export const EstmaraContext = props => {
    return (
        <FormContext.Provider value={props.state}>
            {props.children}
        </FormContext.Provider>
    );
};

// Go to components >>

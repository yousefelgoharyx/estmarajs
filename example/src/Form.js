import React from 'react';
import {
    useForm,
    EstmaraContext as Form,
    Feild,
    handleSubmit,
} from 'estmarajs';

const FormInput = (props) => (
    <div className="form__group">
        <Feild model={props.model}>
            <input
                className={`form__input${props.valid ? ' error' : ''}`}
                type={props.type}
                placeholder={props.label}
            />
        </Feild>
        {props.valid ? props.valid.message : ''}
    </div>
);

const FormButton = (props) => (
    <div className="form__group">
        <button className="btn btn--green" {...props}>
            Next step &rarr;
        </button>
    </div>
);

const Heading = ({ marginSize }) => (
    <div className={`mb-${marginSize}`}>
        <h2 className="heading-secondary">Start booking now</h2>
    </div>
);

const RegisterForm = () => {
    const [mysweetform, contextData] = useForm({
        name: {
            type: 'input',
            between: [3, 16],
            message: 'Name must be between 3 and 16 characters',
        },
        password: {
            type: 'input',
            between: [8, 16],
            message: 'Name must be between 8 and 16 characters',
        },
        select: {
            type: 'select',
            required: true,
            message: 'Select 1 thing at leasts',
        },
    });

    const onSubmit = () => {
        handleSubmit(contextData);
    };
    console.log(mysweetform);
    console.log(contextData);
    return (
        <section className="section-book">
            <div className="row">
                <div className="book">
                    <Form state={contextData}>
                        <div className="book__form">
                            <Heading marginSize="medium" />
                            <FormInput
                                model="name"
                                type="text"
                                label="Name"
                                valid={mysweetform.errors.name}
                            />

                            <FormInput
                                model="password"
                                type="password"
                                label="Password"
                                valid={mysweetform.errors.password}
                            />

                            <Feild model="select">
                                <select>
                                    <option value="">Select</option>
                                    <option value="Apple">Apple</option>
                                    <option value="Banana">Banana</option>
                                </select>
                            </Feild>
                            {mysweetform.errors.select
                                ? mysweetform.errors.select.message
                                : ''}

                            <FormButton onClick={onSubmit} />
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default RegisterForm;

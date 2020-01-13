import React from 'react';
import {
    useForm,
    EstmaraContext as Form,
    Feild,
    handleSubmit
} from 'estmarajs';

const FormInput = props => (
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

const FormButton = props => (
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
            message: 'name is invalid'
        },
        select: {
            type: 'select',
            required: true,
            message: 'Select 1 thing at least'
        },
        radio: {
            type: 'radio',
            required: true,
            message: 'Select'
        },
        check: {
            type: 'checkbox',
            required: true,
            message: 'Select 1 thing at least'
        }
    });
    console.log(contextData[0]);

    const onSubmit = () => {
        const errors = handleSubmit(contextData);
        console.log(errors);
    };
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

                            <Feild model="select">
                                <select>
                                    <option value="">Select</option>
                                    <option value="Apple">Apple</option>
                                    <option value="Banana">Banana</option>
                                </select>
                            </Feild>
                            <Feild model="radio">
                                <input type="radio" value="op1" />
                            </Feild>

                            <Feild model="check">
                                <input type="checkbox" />
                            </Feild>
                            {mysweetform.errors.check
                                ? 'fuck you check it!'
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

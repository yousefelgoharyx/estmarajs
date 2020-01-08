import React from 'react';
import { useForm, EstmaraContext as Form, Input } from 'estmarajs';

const FormInput = props => (
    <div class="form__group">
        <Input
            model={props.model}
            className={`form__input${props.valid ? ' error' : ''}`}
            type={props.type}
            placeholder={props.label}
        />
        {props.valid ? props.valid.message : ''}
    </div>
);

const FormButton = () => (
    <div class="form__group">
        <button class="btn btn--green" type="submit">
            Next step &rarr;
        </button>
    </div>
);

const Heading = ({ marginSize }) => (
    <div class={`mb-${marginSize}`}>
        <h2 class="heading-secondary">Start booking now</h2>
    </div>
);

const RegisterForm = () => {
    const [mysweetform, contextData] = useForm({
        name: {
            between: [3, 16],
            message: 'name is invalid'
        },
        username: {
            between: [6, 16],
            message: 'username is invalid'
        },
        password: {
            between: [8, 16],
            message: 'password is invalid'
        },
        email: {
            between: [5, 16],
            email: true,
            message: 'email is invalid'
        }
    });
    console.log(mysweetform);

    return (
        <section className="section-book">
            <div className="row">
                <div className="book">
                    <Form state={contextData}>
                        <div class="book__form">
                            <Heading marginSize="medium" />
                            <FormInput
                                model="name"
                                type="text"
                                label="Name"
                                valid={mysweetform.errors.name}
                            />
                            <FormInput
                                model="username"
                                type="text"
                                label="Username"
                                valid={mysweetform.errors.username}
                            />
                            <FormInput
                                model="password"
                                type="password"
                                label="Password"
                                valid={mysweetform.errors.password}
                            />
                            <FormInput
                                model="email"
                                type="email"
                                label="E-mail"
                                valid={mysweetform.errors.email}
                            />
                            <FormButton />
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default RegisterForm;

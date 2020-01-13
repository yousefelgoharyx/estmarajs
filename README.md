# Estmarajs

EstmaraJs is a React library which makes forms validation so easy!

## Installing

Using npm:

```bash
$ npm install estmarajs
```

Using yarn:

```bash
$ yarn add estmarajs
```

## Example

You will learn the basic of the library through the following example.

```js
import React from "react";
import { useForm, Feild, EstmaraContext as Form } from "estmarajs";
function App() {

    const [mySweetForm, contextData] = useForm({
        username: {
            type: 'input',
            between: [3, 16],
            message: 'Username feild\'s must be between 3 and 16 characters'
        },
        password: ''
    });
    const onSubmit = () => {
        const errors = handleSubmit(contextData);
    };
    return (
        <Form state={contextData}>
            <Feild model="username">
                <input type="text" />
            </Feild>
            {mySweetForm.errors.username ? mySweet.errors.username.message : ''}
            
            <Feild model="password">
                <input type="password" />
            </Feild>
            {mySweetForm.errors.password ? mySweet.errors.password.message : ''}

            <button onClick={onSubmit}></button>
        </Form>
    )
}
```

So as you can see in the object within `useForm`, the property name is the model which you're gonna provide to a field later and the value can be either object or string, if it's an object that means you intend to validate this feild if not it'll behave as a regular input

but what does `useForm` return anyway, well in our example it'll return this object

```js
{
    watch: {},
    touched: {},
    errors: {}
}
```
Let's explore this object. 

`watch` has the exact value of each input with its model name as a property name
```js
{
    watch: {name: ''},
    touched: {name: true},
    errors: {}
}
```

`touched` tells you whether a certain input was touched or not, it can be either true or false
```js
{
    watch: {name: ''},
    touched: {name: true},
    errors: {}
}
```

`errors` tells you why the input is invalid, the types property is an array includes the reasons because of which the input is invalid

```js
{
    watch: {name: ''},
    touched: {name: true},
    errors: {types: ['between'], message: 'Username feild\'s must be between 3 and 16 characters'}
}
```

finally, the `handleSubmit` function, you just pass the `contextData` and it'll return the errors object and the form will re-render as well


Now look at the table below to know which validation we provide

| property  |  type  | description                                      | example          |
| --------- | :----: | ------------------------------------------------ | ---------------- |
| between   | Array  | checks the length of an input between to numbers | between: [5, 16] |
| required  | Bolean | checks if the input is not empty                 | required: true   |
| minLength | Bolean | checks the min length of an input                | minLength: 5     |
| maxLength | Bolean | check the max length of an input                 | maxLength: 16    |
| email     | Bolean | checks whether the value is a valid email        | email: true      |
| number    | Bolean | checks whether the value is a valid number       | number: true     |
| float     | Bolean | check whether the value is a valid float         | float: true      |
| url       | Bolean | checks whether the value is a valid url          | url: true        |
| pattern   | regex  | tests the value with the given pattern           | pattern: /regex/ |

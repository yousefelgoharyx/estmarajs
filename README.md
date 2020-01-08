# Estmarajs

Estmara is a react library which makes forms validation easier without further a do let's see how to use it

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

First of all, You need to pass your form structure to a function called `useForm` which you can import as you can see in the example down there

```js
import React from "react";
import { useForm } from "estmarajs";
function App() {

    const state = useForm({
        username: ""
    });

    return ()
}
```

So this function basiclly takes your form structure and it must be an object, Each property is considered as a value which will be given to an input later, Anyhow, The returned value is an array which has 2 element, The first element is an object contains your form structure after adding the magic to it and the second element is a setter function that's used to change the first element. But why there is a setter function while it's not gonna be used, Well, the thing is you won't do array destructing to the value that's returned from `useForm` but you're gonna pass it to a component called `EstmaraContext`, That's why there's a setter function, because the library itself uses it through a context

```js
import React from "react";
import { useForm, EstmaraContext as SweetForm } from "estmarajs";
function App() {
    const formConfig = useForm({
        username: ""
    });
    return (
        <div className="App">
            <SweetForm state={formConfig}></SweetForm>
        </div>
    );
}
```

Now after you're done with the context there comes the exciting part, My friend, Now you need to import a component called `Input`. This component has a property called `model` and it takes a string. What's that string?You gussed it, the property name in the object which we passed to `useForm`, easy huh?

Now it's going to work as a normal input, Anyhow, Before diving into the validation stuff, you might wonder what if I already have an input component? well, just insert it as a child!

```js
return (
    <div className="App">
        <EstmaraContext state={state}>
            <Input model="username">
                <input type="text" />
            </Input>
        </EstmaraContext>
    </div>
);
```

It's been a long journey, My friend, I'm glad you're still with me so far :).

Now let's see how the validation works. First of all, You're gonna need to change the username property from a string to an object in order to validate it. This object some properties which we're gonna explain later. Now as you can see this example has an input whose length should be between 5 and 16 characters

```js
import React from "react";
import { useForm, EstmaraContext as SweetForm, Input } from "estmarajs";
function App() {
    const state = useForm({
        username: {
            value: "",
            between: [5, 16]
        }
    });
    return (
        <div className="App">
            <SweetForm state={state}>
                <Input model="username" />
            </SweetForm>
        </div>
    );
}
```

A pre final thing you need to know is the valued that's returned from `useForm`. Let's see the one that's returned from our example up there. Before diving into it, As we said the value is an array and will only need the first element of it so let's see what does this variable below contain

```js
const state = useForm({
    username: {
        value: "",
        between: [5, 16]
    }
});
console.log(state[0]);
```

It's an object and it basiclly contains 2 properties, The first one is called `formState`, it's an object and it contains the naked values which are the values of your inputs which has the the model property to their names lol I hope you got it, and the second property is called validation and it basiclly an object and has properties which are related to your form structre because each input of ours has his own property in the validation object. To make it clear just look at our example and the value that's returned from `useForm`

```js
{
    formState: {username: ""},
    validation: {
        username: {
            $params: {between: [5, 16]},
            validity: {between: false},
            valid: false
        }
    }
}
```

So obviuosly as you add more inputs this object's gonna get bigger.

Finally, what if I want to validate all the inputs when the user submits the form. for that we have a function which is called `isValid` you just need to pass the value which is returned from `useForm` and it will return a bolean. True if valid, false if invalid. In the future we might also return an array that contains the inputs which are invalid

```js
const submit = () => {
    const isFormValid = isValid(state);
};
```

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

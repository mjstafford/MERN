import React, { useState } from 'react'

const UserForm = props => {
    //state
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfrim] = useState("")

    //onSubmit handler
    const submitHandler = e => {
        console.log("submitted!");
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setPasswordConfrim("")
    }

    return (
        <div>
            <form onSubmit={submitHandler} >
                <div>
                    <label>First Name:
                        <input type='text' onChange={(e) => setFirstName(e.target.value)} name='firstName' />
                    </label>
                </div>

                <div>
                    <label htmlFor='lastName'>Last Name: </label>
                    <input type='text' onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div>
                    <label htmlFor='email'>Email: </label>
                    <input type='email' onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div>
                    <label htmlFor='passwordConfirm'>Password Confirm: </label>
                    <input type='password' onChange={(e) => setPasswordConfrim(e.target.value)} />
                </div>

                <input type="submit" value="submit"></input>
            </form >

            <div>
                <h2>Your Form Data</h2>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Password Confirm: {passwordConfirm}</p>
            </div>
        </div>
    )
}

//a version that has a dynamic onChange handler
const UserForm2 = props => {
    //formState is held in one object
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })

    //onSubmit handler
    const submitHandler = e => {
        console.log("submitted!");
        //reset formState object to blank
        setFormState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: '',
        });
    }

    const onChangeHandler = (e) => {
        const { target } = e;
        // const { name: nameOfElementChanging, value, type, checked } = target;
        const { name: nameOfElementChanging, value, type } = target;    //name is renamed to nameOfElementChanging
        // const updatedData = type === 'checkbox' ? checked : value;
        const updatedData = value;

        setFormState({
            ...formState,
            [nameOfElementChanging]: updatedData
        });
    }


    return (
        <div>
            <form onSubmit={submitHandler} >
                <div>
                    <label>First Name:
                        <input type='text' onChange={onChangeHandler} name='firstName' />
                    </label>
                </div>

                <div>
                    <label htmlFor='lastName'>Last Name: </label>
                    <input type='text' onChange={onChangeHandler} name='lastName' />
                </div>

                <div>
                    <label htmlFor='email'>Email: </label>
                    <input type='email' onChange={onChangeHandler} name='email' />
                </div>

                <div>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' onChange={onChangeHandler} name='password' />
                </div>

                <div>
                    <label htmlFor='passwordConfirm'>Password Confirm: </label>
                    <input type='password' onChange={onChangeHandler} name='passwordConfirm' />
                </div>

                <input type="submit" value="submit"></input>
            </form >

            <div>
                <h2>Your Form Data</h2>
                <p>First Name: {formState['firstName']}</p>
                <p>Last Name: {formState['lastName']}</p>
                <p>Email: {formState['email']}</p>
                <p>Password: {formState['password']}</p>
                <p>Password Confirm: {formState['passwordConfirm']}</p>
            </div>
        </div>
    )
}




export default UserForm2
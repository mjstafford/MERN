import React, { useState } from 'react'

import styles from '../components/UserForm.module.css'

const UserForm = props => {
    //state
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfrim] = useState("")
    //adding for more forms assignment
    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    // debugger

    //onSubmit handler
    const submitHandler = e => {
        e.preventDefault()
        console.log("submitted!");
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setPasswordConfrim("")
    }

    //onChange handlers
    const firstNameHandler = (e) => {
        setFirstName(e.target.value)
        //e.target.value because firstName will not be updated yet
        if (e.target.value.length < 2) {
            setFirstNameError("First name must at least 2 chars")
        } else {
            setFirstNameError("")
        }
    }
    const lastNameHandler = (e) => {
        setLastName(e.target.value)
        if (e.target.value.length < 2) {
            setLastNameError("Last name must at least 2 chars")
        } else {
            setLastNameError("")
        }
    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length < 5) {
            setEmailError("email must at least 5 chars")
        } else {
            setEmailError("")
        }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8) {
            setPasswordError("password must at least 8 chars")
        } else if (password != passwordConfirm) {
            setPasswordError("passwords do not match")
        } else {
            setPasswordError("")
        }
    }

    return (
        <div>
            <form onSubmit={submitHandler} >
                <div>
                    <label>First Name:
                        <input type='text' onChange={firstNameHandler} name='firstName' value={firstName} />
                    </label>
                    {firstNameError ? <p>{firstNameError}</p> : ""}
                </div>

                <div>
                    <label htmlFor='lastName'>Last Name: </label>
                    <input type='text' onChange={lastNameHandler} value={lastName} />
                    {lastNameError ? <p>{lastNameError}</p> : ""}
                </div>

                <div>
                    <label htmlFor='email'>Email: </label>
                    <input type='email' onChange={emailHandler} value={email} />
                    {emailError ? <p>{emailError}</p> : ""}
                </div>

                <div>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' onChange={passwordHandler} value={password} />
                    {passwordError ? <p>{passwordError}</p> : ""}
                </div>

                <div>
                    <label htmlFor='passwordConfirm'>Password Confirm: </label>
                    <input type='password' onChange={(e) => setPasswordConfrim(e.target.value)} value={passwordConfirm} />
                    {passwordError ? <p>{passwordError}</p> : ""}
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

//Version of trying to show errors on the onSubmit vs onChange
// const UserForm = props => {
//     //state
//     const [firstName, setFirstName] = useState("")
//     const [lastName, setLastName] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [passwordConfirm, setPasswordConfrim] = useState("")
//     //adding for more forms assignment
//     const [firstNameError, setFirstNameError] = useState("")
//     const [lastNameError, setLastNameError] = useState("")
//     const [emailError, setEmailError] = useState("")
//     const [passwordError, setPasswordError] = useState("")
//     // debugger

//     //onSubmit handler
// const submitHandler = e => {
//     e.preventDefault()
//     let hasError = false
//     if (firstName.length < 2) {
//         setFirstNameError("First name must at least 2 chars")
//         hasError = true
//     }
//     if (lastName.length < 2) {
//         setLastNameError("Last name must at least 2 chars")
//         hasError = true
//     }
//     if (email.length < 5) {
//         setEmailError("Email must be at least 5 chars")
//         hasError = true
//     }
//     if (password.length < 8) {
//         setPasswordError("password must be at least 8 chars")
//         setPassword("")
//         hasError = true
//     } else if (password != passwordConfirm) {
//         setPasswordError("passwords do not match")
//         hasError = true
//     }

//     // debugger
//     if (!hasError) {
//         console.log("submitted!");
//         setFirstName("")
//         setLastName("")
//         setEmail("")
//         setPassword("")
//         setPasswordConfrim("")
//     } else {
//         console.log("errors, cannot submit")
//     }
// }

//     return (
//         <div>
//             <form onSubmit={submitHandler} >
//                 <div>
//                     <label>First Name:
//                         <input type='text' onChange={(e) => setFirstName(e.target.value)} name='firstName' />
//                     </label>
//                     {firstNameError ? <p>{firstNameError}</p> : ""}
//                 </div>

//                 <div>
//                     <label htmlFor='lastName'>Last Name: </label>
//                     <input type='text' onChange={(e) => setLastName(e.target.value)} />
//                     {lastNameError ? <p>{lastNameError}</p> : ""}
//                 </div>

//                 <div>
//                     <label htmlFor='email'>Email: </label>
//                     <input type='email' onChange={(e) => setEmail(e.target.value)} />
//                     {emailError ? <p>{emailError}</p> : ""}
//                 </div>

//                 <div>
//                     <label htmlFor='password'>Password: </label>
//                     <input type='password' onChange={(e) => setPassword(e.target.value)} />
//                     {passwordError ? <p>{passwordError}</p> : ""}
//                 </div>

//                 <div>
//                     <label htmlFor='passwordConfirm'>Password Confirm: </label>
//                     <input type='password' onChange={(e) => setPasswordConfrim(e.target.value)} />
//                     {passwordError === "passwords do not match" ? <p>{passwordError}</p> : ""}
//                 </div>

//                 <input type="submit" value="submit"></input>
//             </form >

//             <div>
//                 <h2>Your Form Data</h2>
//                 <p>First Name: {firstName}</p>
//                 <p>Last Name: {lastName}</p>
//                 <p>Email: {email}</p>
//                 <p>Password: {password}</p>
//                 <p>Password Confirm: {passwordConfirm}</p>
//             </div>
//         </div>
//     )
// }

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




export default UserForm
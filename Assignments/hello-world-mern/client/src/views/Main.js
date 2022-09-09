import React, { useEffect, useState } from 'react';
import PersonForm from '../components/PersonForm';
export default () => {
    return (
        <div>
           <PersonForm/>
        </div>
    )
}

// OLD HELLO WORLD part

// export default () => {
    // //stores the fetch data in state
    // const [message, setMessage] = useState("Loading...")

    // //will make the axios (fetch) once on first load
    // useEffect(() => {
    //     axios.get('http://localhost:8000/api')
    //         .then(res => {
    //             console.log(res.data.message)
    //             setMessage(res.data.message)
    //         })
    // }, [])

    // //jsx that will be displayed via the App.js
    // return (
    //     <div>
    //         <h2>Message from the back: {message}</h2>
            
    //     </div>
    // )
// }
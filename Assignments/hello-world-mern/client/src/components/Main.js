import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default () => {
    const [message, setMessage] = useState("")

    useEffect(() => {
        axios.get('http//localhost:8000/api')
            .then(res => setMessage(response.data.message))

    }, [])

    return (
        <div>
            <h2>Message from the back: {message}</h2>
        </div>
    )

}

app.listen(port, () => console.log(`Listening on port: ${port}`));

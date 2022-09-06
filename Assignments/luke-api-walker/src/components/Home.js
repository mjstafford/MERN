import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom"

import Person from './Person'
import Planet from './Planet'

const Home = (props) => {
    const [selectedApi, setSelectedApi] = useState("")
    const [number, setNumber] = useState("")
    const [result, setResult] = useState([])
    const [isSubmitted, setIsSubmitted] = useState(false)
    const navigate = useNavigate()

    //Submit Handler
    const onSubmitHandler = (event) => {
        event.preventDefault()
        //send to the right route
        if (selectedApi === "people" && number) {
            fetchApi(selectedApi, number)
            navigate(`/people/${number}`)
        } else if (selectedApi === "planets" && number) {
            fetchApi(selectedApi, number)
            navigate(`/planets/${number}`)
        }
    }

    //fetch API
    const fetchApi = (thing, number) => {
        fetch(`https://swapi.dev/api/${thing}/${number}`)
            .then(res => {
                console.log("here", res)
                return res.json()
            })
            .then(res => {
                console.log("next", res)
                setResult(res)
            })
            .catch(err => {
                console.log("OOOOOOOOOOOO No")
            })
            .finally(setIsSubmitted(true))
    }

    //Error Handling for no result
    if (result.detail === "Not found") {
        // console.log(error)
        return (
            <div>
                <h1>These aren't the droids you're looking for</h1>
                <img src="https://i.annihil.us/u/prod/marvel/i/mg/c/70/62f3e87ab6da3/clean.jpg" />
                <div>
                    <a href="/">Back</a>
                </div>
            </div>
        )
    }


    return (
        <div>
            <h1>here</h1>
            <form onSubmit={onSubmitHandler}>
                <label>Search For:
                    <select value={selectedApi} onChange={e => {
                        setSelectedApi(e.target.value)
                        setIsSubmitted(false)
                    }}>
                        <option value='' disabled>Select API</option>
                        <option value='people'>People</option>
                        <option value='planets'>Planets</option>
                    </select>
                </label>
                <label>ID:
                    <input type="number" onChange={e => {
                        setNumber(e.target.value)
                        setIsSubmitted(false)
                    }} />
                </label>
                <input type="submit" value="fetch" />
            </form>

            <hr></hr>
            {selectedApi === "people" && number && isSubmitted ? <Person person={result} /> : ""}
            {selectedApi === "planets" && number && isSubmitted ? <Planet planet={result} /> : ""}
        </div >
    )
}

export default Home
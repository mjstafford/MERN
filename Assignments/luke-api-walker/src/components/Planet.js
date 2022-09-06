import React from 'react'

const Planet = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Name: {props.planet.name}</h2>
            <h4>Climate: {props.planet.climate}</h4>
            <h4>Terrain: {props.planet.terrain}</h4>
            <h4>Surface Water: {props.planet.surface_water > 0 ? "True" : "false"}</h4>
            <h4>Population: {props.planet.population}</h4>
        </div >
    )
}

export default Planet
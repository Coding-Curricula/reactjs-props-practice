import React from 'react'

function Capital(props) {
    return (
        <div>
            <h1>Capital</h1>
            {props.name}
        </div>
    )
}

export default function Country(props) {
    return (
        <div>
            <h1>Country</h1>
            <p>{props.destination}</p>
            <Capital name="Havana" />
        </div>
    )
}

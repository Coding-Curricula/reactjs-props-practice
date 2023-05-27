import React from 'react'

export default function CoCaptain(props) {
    console.log(props)
    console.log(props.name)

    const {secondInCommand} = props


    return (
        <div>
            <h1>CoCaptain</h1>
            {props.name}
            <br />
            {secondInCommand}
        </div>
    )
}

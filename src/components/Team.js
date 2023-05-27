import React from 'react'

function Coach(props) {
    return (
        <div>
            <h1>Coach</h1>
            {props.name}
        </div>
    )
}

function Players(props) {
    return (
        <div>
            <h1>Players</h1>
            {props.names}
        </div>
    )
}

export default function Team(props) {
    let listOfNames = ["Pablo", "Lakota", "Robyn", "Gul", "Mervin"]

    return (
        <div>
            <h1>Team</h1>
            <Coach name="Coach Chris" />
            <Players names={listOfNames} />
        </div>
    )
}

import React from 'react'

function Pets(props) {
    console.log(props)
    return (
        <div>
            <h1>Pets</h1>
            <p>Here are my pets</p>
            <p>Lakota has a {props.lakota}</p>
            <p>Chris has {props.chris}</p>
        </div>
    )
}

function Insurance(props) {
    return (
        <div>
            <h1>Insurance</h1>
            <p>Here is my insurance</p>
            <p>My insurance provider is {props.company}</p>
            <p>My monthly cost is {props.monthlyCost}</p>
        </div>
    )
}

function Mortgage() { }

export default function HomeOwner() {
    return (
        <div>
            <Pets lakota="cat named Sakamoto" chris="three dogs that he wishes were one dog" />
            <Insurance company="Home Insurance Worldwide" monthlyCost="300" />
            <Mortgage  />
        </div>
    )
}

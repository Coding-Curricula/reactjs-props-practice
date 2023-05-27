import React from 'react'

export default function Heading(props) {
    const { title, name, date } = props;


    return (
        <div>
            <h1>not props</h1>
            <h1>{title}</h1>
        </div>
    )
}

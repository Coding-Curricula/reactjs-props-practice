import React from 'react'

function Kitchen(props) {
    return (
        <>
            <h2>Kitchen</h2>
            <p>Here are the cooks:</p>
            {props.cooks.map((cook, index) => {
                return <ul><li key={index}>{cook}</li></ul>
            })}
            <p>Here is the food:</p>
            {props.food.map((food, index) => {
                return <p key={index}>{food}</p>
            })}
        </>
    )
}

function Bar() { }

function DiningRoom() { }

function Restroom() { }

function Host() { }

function Server() { }

export default function Restaurant() {
    return (
        <div>
            <h1>Pablos Yummy Restaurant</h1>
            <Kitchen cooks={["Jim", "Sandra", "Timmy"]} food={["eggs", "steak", "chicken"]} />
            <Bar />
            <DiningRoom />
            <Restroom />
            <Host />
            <Server />
        </div>
    )
}

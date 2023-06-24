"use client"
import React, { useState } from 'react'

const State = () => {

    const [number, setNumber] = useState(0)

    function helloWorld() {
        setNumber("Hello World")
    }

    return (
        <div className='w-full h-full flex flex-col p-5 gap-5'>

            {/* intro */}
            <article className=' max-h-min'>
                <h1>useState</h1>
                <p>useState is a React Hook that lets you add a state variable to your component.</p>
                <p>const [state, setState] = useState(initialState);</p>
                <p>the value inside "useState" is the current/default value : it could be null, bolean, string, number or anything you want</p>
                <p>you can call the state value by just type the name of the "state" : state</p>
                <p>you can change the state value by using the setState and add the new value within it : setState("new value")</p>
                <p></p>

                <p>Check out example below</p>
                <p>Source code : github</p>
            </article>


            {/* Example */}
            <div className='h-full w-full grid grid-cols-1 bg-teal-50'>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <h1>Press the button to change "state" value</h1>
                    <p>{number}</p>
                </div>
                <div className='grid grid-cols-2'>
                    <button onClick={() => setNumber(number + 1)}>Increment + 1</button>
                    <button onClick={() => setNumber(number - 1)}>Decrement - 1</button>
                    <button onClick={() => setNumber(0)}>Reset</button>
                    <button onClick={helloWorld}>"Hello World"</button>
                </div>
            </div>

            <div className='grid grid-cols-2'>
                {/* usage */}
                <article className=' max-h-min'>
                    <h1>Usage</h1>
                    <ul>
                        <li>Adding state to a component</li>
                        <li>Updating state based on the previous state</li>
                        <li>Updating objects and arrays in state</li>
                        <li>Avoiding recreating the initial state</li>
                        <li>Resetting state with a key</li>
                        <li>Storing information from previous renders</li>
                    </ul>
                </article>
                {/* trouble shooting */}
                <article className=' max-h-min'>
                    <h1>Troubleshooting</h1>
                    <ul>
                        <li>I've updated the state, but logging gives me the old value</li>
                        <li>I've updated the state, but the screen doesn't update</li>
                        <li>I'm getting an error: “Too many re-renders”</li>
                        <li>My initializer or updater function runs twice</li>
                        <li>I'm trying to set state to a function, but it gets called instead</li>
                    </ul>
                </article>
            </div>

        </div>
    )
}

export default State
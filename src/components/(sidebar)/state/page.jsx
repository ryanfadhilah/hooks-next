"use client"
import React, { useState } from 'react'

const State = () => {

    const [number, setNumber] = useState(0)

    function helloWorld() {
        setNumber("Hello World")
    }

    return (
        <div className='w-full h-full flex flex-col gap-5 '>

            {/* intro */}
            <article className=' flex flex-col gap-2 text-slate-500'>
                <h1 className='text-xl font-bold text-black'>useState</h1>
                <p>useState is a React Hook that lets you add a state variable to your component.</p>
                <p className='text-slate-700 font-semibold'>syntax = const [state, setState] = useState(initialState);</p>
                <p>the value inside "useState" is the current/default value : it could be null, bolean, string, number or anything you want</p>
                <p>you can call the state value by just type the name of the "state"</p>
                <p>you can change the state value by using the setState and add the new value within it : setState("new value")</p>
                <p>Check out example below</p>
                <p>Source code : github</p>
                <p>Official Documentation</p>
            </article>


            {/* Example */}
            <div className=' h-96 w-full grid grid-cols-1 bg-teal-50 border-solid border-2 border-black'>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <h1 className='text-xl'>Press the button to change "state" value</h1>
                    <p className=' font-semibold text-xl'>{number}</p>
                </div>
                <div className='grid grid-cols-2'>
                    <button className='  bg-black text-white font-semibold text-xl hover:bg-teal-400 transition-all ease-in-out duration-300' onClick={() => setNumber(number + 1)}>Increment + 1</button>
                    <button className='  bg-black text-white font-semibold text-xl hover:bg-teal-400 transition-all ease-in-out duration-300' onClick={() => setNumber(number - 1)}>Decrement - 1</button>
                    <button className='  bg-black text-white font-semibold text-xl hover:bg-teal-400 transition-all ease-in-out duration-300' onClick={() => setNumber(0)}>Reset</button>
                    <button className='  bg-black text-white font-semibold text-xl hover:bg-teal-400 transition-all ease-in-out duration-300' onClick={helloWorld}>"Hello World"</button>
                </div>
            </div>

            <div className='grid grid-cols-2 text-slate-500'>
                {/* usage */}
                <article className=' max-h-min flex flex-col gap-2'>
                    <h1 className='text-xl font-bold text-black'>Usage</h1>
                    <p>Adding state to a component</p>
                    <p>Updating state based on the previous state</p>
                    <p>Updating objects and arrays in state</p>
                    <p>Avoiding recreating the initial state</p>
                    <p>Resetting state with a key</p>
                    <p>Storing information from previous renders</p>
                </article>
                {/* trouble shooting */}
                <article className=' max-h-min flex flex-col gap-2'>
                    <h1 className='text-xl font-bold text-black'>Troubleshooting</h1>
                    <p>I've updated the state, but logging gives me the old value</p>
                    <p>I've updated the state, but the screen doesn't update</p>
                    <p>I'm getting an error: “Too many re-renders”</p>
                    <p>My initializer or updater function runs twice</p>
                    <p>I'm trying to set state to a function, but it gets called instead</p>
                </article>
            </div>

        </div>
    )
}

export default State
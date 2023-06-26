"use client"
import React, { useState } from 'react'

const State = () => {

    const [number, setNumber] = useState(0)

    function helloWorld() {
        setNumber("Hello World")
    }

    return (
        <main className='w-full h-full flex flex-col gap-5 '>
            <h1>useState</h1>
            <div className=' h-full w-full grid grid-cols-1 bg-teal-50 border-solid border-2 border-black'>
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
        </main>
    )
}

export default State
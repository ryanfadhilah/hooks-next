"use client"
import React, { useState } from 'react'

const HookState = () => {

    const [number, setNumber] = useState(0)

    return (
        <main className='w-full h-full grid grid-cols-1 items-center'>

            {/* App */}
            <div className='w-full h-72 grid grid-cols-1 border-solid roi border-2 border-slate-700'>
                <div className='bg-teal-50 flex justify-center items-center text-2xl font-semibold'>
                    {number}
                </div>

                <div className='grid grid-cols-3'>
                    <button className='bg-teal-500 text-white font-semibold hover:bg-black transition-all ease-in-out duration-200' onClick={() => setNumber(number + 1)}>Increment</button>
                    <button className='bg-teal-500 text-white font-semibold hover:bg-black transition-all ease-in-out duration-200' onClick={() => setNumber(0)}>Reset</button>
                    <button className='bg-teal-500 text-white font-semibold hover:bg-black transition-all ease-in-out duration-200' onClick={() => setNumber(number - 1)}>Decrement</button>
                </div>
            </div>
        </main>
    )
}

export default HookState
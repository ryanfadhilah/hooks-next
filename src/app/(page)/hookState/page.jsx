"use client"
import React, { useState } from 'react'

const HookState = () => {

    const [number, setNumber] = useState(0)

    return (
        <main className='w-full h-full grid grid-cols-1 items-center'>

            {/* App */}

            <section className='w-full h-full flex flex-col border-solid roi border-2 border-slate-700'>
                <section className='flex flex-col bg-yellow-200 p-5 gap-5'>
                    <p>Use State is used to create a state that contains data</p>
                    <p>Use state has a built in function that can be used to manipulate the data of the current state</p>
                    <p>example : const [data,setData = useState(initial value)]</p>
                </section>

                <section className='h-full grid grid-cols-1 bg-pink-50'>
                    <div className='bg-teal-50 flex flex-col justify-center items-center text-2xl font-semibold gap-5'>
                        <div>Current State</div>
                        <div>{number}</div>
                    </div>

                    <div className='grid grid-cols-3'>
                        <button className='flex flex-col items-center justify-center gap-5 bg-teal-500 text-white font-semibold hover:bg-black transition-all ease-in-out duration-200' onClick={() => setNumber(number + 1)}> <p>setNumber(number + 1)</p> Increment</button>
                        <button className='flex flex-col items-center justify-center gap-5 bg-teal-500 text-white font-semibold hover:bg-black transition-all ease-in-out duration-200' onClick={() => setNumber(0)}><p>setNumber(0)</p> Reset</button>
                        <button className='flex flex-col items-center justify-center gap-5 bg-teal-500 text-white font-semibold hover:bg-black transition-all ease-in-out duration-200' onClick={() => setNumber(number - 1)}><p>setNumber(number - 1)</p> Decrement</button>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default HookState
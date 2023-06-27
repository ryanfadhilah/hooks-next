"use client"
import React, { useRef, useState } from 'react'

const hookRef = () => {

    const [name, setName] = useState("World!")
    const inputRef = useRef(null)

    function changeName() {
        setName(inputRef.current.value)
        inputRef.current.value = ""
    }

    return (
        <main className='w-full h-full grid grid-cols-1 items-center'>

            {/* App */}
            <div className='w-full h-72 grid grid-cols-1 border-solid border-2 border-slate-700'>

                <h1 className=' h-36 w-full bg-teal-50 flex justify-center items-center text-xl'>Hello, <span className=' font-semibold'>{name}</span> </h1>
                <div className='h-36 w-full flex '>
                    <input className='w-4/6 bg-slate-100 p-10' placeholder='Type your name here...' ref={inputRef}></input>
                    <button className=' w-2/6 bg-teal-500 text-white font-semibold hover:bg-black transition-all ease-in-out duration-200' onClick={changeName}>Change Name</button>
                </div>

            </div>
        </main>
    )
}

export default hookRef
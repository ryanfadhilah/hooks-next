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
        <main className='w-full h-full flex flex-col gap-5'>
            <section className='flex flex-col bg-yellow-100 text-black p-5 gap-5 rounded-xl'>
                <p> <b className='font-bold'>Use State</b> is used to create a state that contains data</p>
                <p>Use state has a built in function that can be used to manipulate the data of the current state</p>
                <p>example : const [data,setData = useState(initial value)]</p>
            </section>

            <section className='w-full flex flex-col p-5 gap-5 bg-teal-950 rounded-xl'>
                <h1 className=' rounded-xl flex justify-center items-center text-white p-10 bg-teal-900 '>Hello, <span className=' font-semibold'>{name}</span> </h1>
                <div className='flex md:h-full w-full rounded-xl'>
                    <input className='w-4/6 bg-slate-100 p-10 rounded-l-xl text-black' placeholder='Type your name here...' ref={inputRef}></input>
                    <button className='rounded-r-xl h-full w-2/6 bg-teal-500 text-white font-semibold hover:bg-black transition-all ease-in-out duration-200' onClick={changeName}>Change Name</button>
                </div>

            </section>
        </main>
    )
}

export default hookRef
"use client"

import React, { useReducer } from 'react'
import Image from 'next/image'
import cat from './cat-vibe.gif'

const HookReducer = () => {

    function reducer(state, action) {
        switch (action.type) {
            case "INCREMENT":
                return { number: state.number + 1, photo: state.photo }
                break;
            case "SHOW":
                return { number: state.number, photo: !state.photo }
                break;
            case "BOTH":
                return { number: state.number + 1, photo: !state.photo }
                break;

            default:
                return { number: 0, photo: false }
                break;
        }
    }

    const [state, dispacth] = useReducer(reducer, { number: 0, photo: false })

    return (
        <main className='w-full h-full grid grid-cols-1 items-center'>

            {/* App */}
            <div className='w-full h-72 grid grid-cols-1 border-solid border-2 border-slate-500'>
                <div className='h-36 gap-16 bg-teal-50 flex justify-center items-center text-2xl font-semibold'>
                    {state.photo ? <Image
                        src={cat}
                        width={144}
                        height={144}
                        alt="cat"
                    /> : ""}
                    {state.number}
                    {state.photo ? <Image
                        src={cat}
                        width={144}
                        height={144}
                        alt="cat"
                    /> : ""}
                </div>

                <div className='h-36 grid grid-cols-3'>
                    <button className='bg-teal-500 text-white font-semibold hover:bg-black transition-all ease-in-out duration-200' onClick={() => dispacth({ type: "INCREMENT" })} >Increment</button>
                    <button className='bg-teal-500 text-white font-semibold hover:bg-black transition-all ease-in-out duration-200' onClick={() => dispacth({ type: "SHOW" })} >{state.photo ? "Hide" : "Show"} Cats</button>
                    <button className='bg-teal-500 text-white font-semibold hover:bg-black transition-all ease-in-out duration-200' onClick={() => dispacth({ type: "BOTH" })} >Both Actions</button>
                </div>
            </div>

        </main>
    )
}

export default HookReducer
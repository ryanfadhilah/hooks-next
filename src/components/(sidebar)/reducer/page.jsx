"use client"
import React, { useReducer } from 'react'
import Image from 'next/image'
import cat from './cat.gif'
import cat1 from './cat1.gif'

const catLink = [
    {
        id: 1,
        src: cat,
        width: 100,
        height: 100,
        alt: "cat"
    },
    {
        id: 2,
        src: cat1,
        width: 100,
        height: 100,
        alt: "cat"
    },
    {
        id: 3,
        src: cat,
        width: 100,
        height: 100,
        alt: "cat"
    }
]

const Reducer = () => {

    function reducer(state, action) {
        switch (action.type) {
            case "INCREMENT":
                return { number: state.number + 1, picture: state.picture }
                break;
            case "DECREMENT":
                return { number: state.number + 1, picture: state.picture }
                break;
            case "HIDE":
                return { number: state.number, picture: !state.picture }
                break;
            case "BOTH":
                return { number: state.number + 1, picture: !state.picture }
                break;
            case "RESET":
                return { number: 0, picture: false }
                break;

            default:
                break;
        }
    }

    const [state, dispatch] = useReducer(reducer, { number: 0, picture: false })

    return (
        <main className='w-full h-full flex flex-col gap-5 '>
            <h1>useReducer</h1>

            <div className='flex flex-col gap-5 bg-white h-96'>
                <div className=' h-1/2 flex justify-center items-center'>
                    {state.picture ? catLink.map((v, i, a) => {
                        return <Image
                            src={v.src}
                            width={v.width}
                            height={v.height}
                            alt={v.alt} />
                    }) : ""}
                    <p className='text-2xl font-semibold'>
                        {state.number}
                    </p>
                    {state.picture ? catLink.map((v, i, a) => {
                        return <Image
                            src={v.src}
                            width={v.width}
                            height={v.height}
                            alt={v.alt} />
                    }) : ""}
                </div>

                <div className='w-full h-1/2 grid grid-cols-5'>
                    <button className='bg-teal-100 w-full h-full' onClick={() => dispatch({ type: "INCREMENT" })}>Increment + 1</button>
                    <button className='bg-teal-100 w-full h-full' onClick={() => dispatch({ type: "DECREMENT" })}>Dncrement - 1</button>
                    <button className='bg-teal-100 w-full h-full' onClick={() => dispatch({ type: "HIDE" })}>{state.picture ? "hide" : "show"} the cats</button>
                    <button className='bg-teal-100 w-full h-full' onClick={() => dispatch({ type: "BOTH" })}>{state.picture ? "hide" : "show"} & Increment</button>
                    <button className='bg-teal-100 w-full h-full' onClick={() => dispatch({ type: "RESET" })}>Reset</button>
                </div>
            </div>

        </main>
    )
}


export default Reducer
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
        <div className='w-full h-full'>

            <article>
                <p>"useReducer" is a React Hook that lets you add a reducer to your component.</p>
                <p>"useReducer" is usefull to create and handle multiple state at the same time</p>
                <p>reducer: The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state. State and action can be of any types.</p>
                <p>Check out example below</p>
                <p>Source code : github</p>
                <p>Official Documentation</p>
            </article>

            <div className='flex flex-col gap-5 bg-teal-50 h-96'>
                <div className=' h-1/3 flex justify-center items-center'>{state.number}</div>

                <div className='w-full h-1/3 grid grid-cols-5'>
                    <button className='bg-teal-100 w-full h-full' onClick={() => dispatch({ type: "INCREMENT" })}>Increment + 1</button>
                    <button className='bg-teal-100 w-full h-full' onClick={() => dispatch({ type: "DECREMENT" })}>Increment - 1</button>
                    <button className='bg-teal-100 w-full h-full' onClick={() => dispatch({ type: "BOTH" })}>{state.picture ? "hide" : "show"} & Increment</button>
                    <button className='bg-teal-100 w-full h-full' onClick={() => dispatch({ type: "HIDE" })}>{state.picture ? "hide" : "show"} the cats</button>
                    <button className='bg-teal-100 w-full h-full' onClick={() => dispatch({ type: "RESET" })}>Reset</button>
                </div>

                <div className='h-1/3 flex justify-center'>
                    {state.picture ? catLink.map((v, i, a) => {
                        return <Image
                            src={v.src}
                            width={v.width}
                            height={v.height}
                            alt={v.alt} />
                    }) : ""}
                </div>
            </div>

            <article>
                <div>
                    <h1>Usage</h1>
                    <p>Adding reducer to component</p>
                    <p>Writing the reducer function</p>
                    <p>Avoiding recreating inital state </p>
                </div>
                <div>
                    <h1>Troubleshooting</h1>
                    <p>Undefined data after dispatching</p>
                    <p>Re-render loop</p>
                    <p>Fail updating the state</p>
                </div>
            </article>

        </div>
    )
}


export default Reducer
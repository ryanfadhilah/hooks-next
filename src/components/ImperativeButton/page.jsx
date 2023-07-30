"use client"
import React, { forwardRef, useImperativeHandle, useState } from 'react'

const ImperativeButton = forwardRef((props, fref) => {
    const [text, setText] = useState(0)

    useImperativeHandle(fref, () => ({
        increment() {
            setText(text + 1)
        },
        decrement() {
            setText(text - 1)
        }
    }))

    return (
        <section className='flex flex-col p-5 gap-5 bg-teal-950 rounded-xl'>
            <button className='p-5 bg-teal-600 rounded-xl hover:bg-yellow-500' onClick={() => setText(text - 1)}>
                Child Button ( - 1 )
            </button>
            <div className='flex justify-center mx-5 p-5 rounded-xl bg-white text-black'>Child State : {text}</div>
        </section>

    )
})

export default ImperativeButton
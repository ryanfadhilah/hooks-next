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
        <>
            <button onClick={() => setText(text - 1)}>
                Child Button ( - 1 )
            </button>
            <>Child State : {text}</>
        </>

    )
})

export default ImperativeButton
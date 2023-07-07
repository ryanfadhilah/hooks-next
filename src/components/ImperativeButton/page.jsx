"use client"
import React, { forwardRef, useImperativeHandle, useState } from 'react'

const ImperativeButton = forwardRef((props, fref) => {
    const [text, setText] = useState(false)

    useImperativeHandle(fref, () => ({
        alternateToggle() {
            setText(!text)
        }
    }))

    return (
        <>
            <button onClick={() => setText(!text)}>
                Child Button
            </button>
            <>{text ? "child state" : ""}</>
        </>

    )
})

export default ImperativeButton
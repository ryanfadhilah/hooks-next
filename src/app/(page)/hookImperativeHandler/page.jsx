"use client"
import ImperativeButton from '@/components/ImperativeButton/page'
import React, { useRef } from 'react'

const hookImperativeHandler = () => {

    const buttonRef = useRef(null)

    return (
        <div className='grid grid-cols-1 bg-teal-100'>
            <button onClick={() => { buttonRef.current.alternateToggle() }}>Parent Button</button>
            <ImperativeButton ref={buttonRef} className="grid grid-cols-1 bg-teal-500"></ImperativeButton>
        </div>
    )
}

export default hookImperativeHandler
"use client"
import Input from '@/components/(contex)/input/page'
import Output from '@/components/(contex)/output/page'

import React, { createContext, useState } from 'react'

export const appContext = createContext(null)

const HookContext = () => {

    const [name, setName] = useState("World!")

    return (
        <appContext.Provider value={{ name, setName }} >
            <div className='grid grid-cols-1 w-full h-1/3 bg-red-100'>
                <Input></Input>
                <Output></Output>
            </div>
        </appContext.Provider>
    )
}

export default HookContext
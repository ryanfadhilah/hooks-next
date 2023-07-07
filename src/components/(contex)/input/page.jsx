import { appContext } from '@/app/(page)/hookContex/page'
import React, { useContext } from 'react'

const Input = () => {

    const { setName } = useContext(appContext)

    return (
        <input onChange={(e) => { setName(e.target.value) }} className='bg-teal-100' placeholder='type something...'></input>
    )
}

export default Input
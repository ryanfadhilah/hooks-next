import { appContext } from '@/app/(page)/hookContex/page'
import React, { useContext } from 'react'

const Output = () => {

    const { name } = useContext(appContext)

    return (
        <div className='flex items-center'>Hello,{name}</div>
    )
}

export default Output
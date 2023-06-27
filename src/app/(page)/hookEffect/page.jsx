"use client"
import React, { useEffect, useState } from 'react'
import notFound from 'next/navigation'




const HookEffect = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const result = await fetch('https://jsonplaceholder.typicode.com/comments', {
                cache: "no-store"
            })
            if (!result.ok) {
                return notFound()
            }
            const temp = await result.json()

            setData(temp)

        }
        getData()

    }, [])

    console.log(data)
    return (
        <main className='w-full h-full grid grid-cols-1 items-center'>

            {/* App */}
            <div className='w-full h-72 bg-teal-400 grid grid-cols-1 border-solid border-2 border-slate-700 overflow-y-scroll p-5 gap-5'>

                {data.map((v, i, a) => {
                    return (
                        <div className='grid grid-cols-1 bg-white p-5 rounded-md' key={i}>
                            <div>Id : {v.id}</div>
                            <div>Name : {v.name}</div>
                            <div>Email : {v.email}</div>
                        </div>)
                })}
            </div>

        </main>
    )
}

export default HookEffect
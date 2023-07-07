"use client"
import { notFound } from 'next/navigation'
import React, { useEffect, useLayoutEffect, useState } from 'react'



const HookLayoutEffect = () => {

    const [dataEffect, setDataEffect] = useState([])
    const [dataLayout, setDataLayout] = useState([])

    useLayoutEffect(() => {
        async function getData() {
            const res = await fetch('https://jsonplaceholder.typicode.com/comments', {
                cache: "no-store"
            })
            if (!res.ok) {
                return notFound()
            }
            const temp = await res.json()
            setDataLayout(temp)
        }
        getData()
    }, [])

    useEffect(() => {
        async function getData() {
            const result = await fetch('https://jsonplaceholder.typicode.com/comments', {
                cache: "no-store"
            })
            if (!result.ok) {
                return notFound()
            }
            const temp = await result.json()
            setDataEffect(temp)
        }
        getData()
    }, [])


    return (
        <main className='w-full h-full grid grid-cols-1 items-center'>

            {/* App */}
            <div>
                <h1>useEffect - slower</h1>
                <div className='w-full h-72 bg-teal-400 grid grid-cols-1 border-solid border-2 border-slate-700 overflow-y-scroll p-5 gap-5'>
                    {dataEffect.map((v, i, a) => {
                        return (
                            <div className='grid grid-cols-1 bg-white p-5 rounded-md' key={i}>
                                <div>Id : {v.id}</div>
                                <div>Name : {v.name}</div>
                                <div>Email : {v.email}</div>
                            </div>)
                    })}
                </div>
            </div>

            <div>
                <h1>useLayoutEffect  - faster</h1>
                <div className='w-full h-72 bg-teal-400 grid grid-cols-1 border-solid border-2 border-slate-700 overflow-y-scroll p-5 gap-5'>
                    {dataLayout.map((v, i, a) => {
                        return (
                            <div className='grid grid-cols-1 bg-white p-5 rounded-md' key={i}>
                                <div>Id : {v.id}</div>
                                <div>Name : {v.name}</div>
                                <div>Email : {v.email}</div>
                            </div>)
                    })}
                </div>
            </div>

        </main>
    )
}

export default HookLayoutEffect
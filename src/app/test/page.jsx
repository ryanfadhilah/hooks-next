import React from 'react'
import { notFound } from 'next/navigation'

const getData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        cache: "no-store"
    })
    if (!res.ok) {
        return notFound()
    }
    return res.json()
}

const Effect = async () => {

    const data = await getData()

    return (
        <main>Blog

            {data.map((v, i, a) => {
                return (
                    <div>
                        <div>{v.userId}</div>
                        <div>{v.id}</div>
                        <div>{v.title}</div>
                        <div>{v.body}</div>
                    </div>
                )
            })}
        </main>
    )
}

export default Effect
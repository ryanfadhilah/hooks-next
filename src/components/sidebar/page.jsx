import React from 'react'
import Link from 'next/link'

const links = [
    {
        id: 1,
        name: "useState",
        href: "/we"

    },
    {
        id: 2,
        name: "useReducer",
        href: "/"

    },
    {
        id: 3,
        name: "useEffect",
        href: "/"

    },
]

const Sidebar = () => {
    return (
        <div className=' h-full w-1/6  flex flex-col items-center py-6 rounded-md bg-teal-50 shadow-[0_3px_10px_rgb(0,0,0,0.1)]'>
            {links.map((v, i, a) => {
                return (
                    <Link key={i} href={v.href} className=' w-full h-12 flex items-center px-5 hover:bg-teal-500 hover:text-white transition-all ease-in-out duration-300 '>{v.name}</Link>
                )
            })}

        </div>
    )
}

export default Sidebar
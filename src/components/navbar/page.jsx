import React from 'react'

const Navbar = () => {
    return (
        <nav className='h-24 flex items-center justify-between'>
            <h1 className='text-2xl'>Logo</h1>

            <ul className='flex gap-5 font-semibold'>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
            </ul>
        </nav>
    )
}

export default Navbar
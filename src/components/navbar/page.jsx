import React from 'react'

const Navbar = () => {
    return (
        <nav className=' h-20 flex items-center justify-between'>
            <h1 className='text-2xl'>Logo</h1>

            <ul className='flex gap-10 font-semibold'>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
            </ul>
        </nav>
    )
}

export default Navbar
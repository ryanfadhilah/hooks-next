"use client"
import Image from 'next/image'
import Link from 'next/link'
import rimage from './rimage.png'

const pages = [
  {
    name: "useState",
    herf: "/hookState"
  },
  {
    name: "useState",
    herf: "/hookState"
  },
  {
    name: "useState",
    herf: "/hookState"
  },
  {
    name: "useState",
    herf: "/hookState"
  },
  {
    name: "useState",
    herf: "/hookState"
  },
  {
    name: "useState",
    herf: "/hookState"
  },
  {
    name: "useState",
    herf: "/hookState"
  },
  {
    name: "useState",
    herf: "/hookState"
  },
  {
    name: "useState",
    herf: "/hookState"
  },
  {
    name: "useState",
    herf: "/hookState"
  },
]

function Home() {


  return (
    <main className=" flex flex-col w-full h-full gap-5 items-center">

      <div className='flex items-center justify-center gap-2'>
        <Image
          src={rimage}
          width={65}
          height={65}
          alt="Picture of the author"
          className='animate-spin'
        />
        <h1 className='text-4xl'>React-Hooks</h1>
      </div>

      <div className='w-5/6 lg:w-3/6 h-full grid grid-cols-3 gap-3'>
        {pages.map((v, i, a) => {
          return (<Link className=' flex flex-row-reverse items-end bg-teal-400 hover:bg-orange-400 hover:shadow-lg transition-all ease-in-out duration-200' href={v.herf} key={i}>
            <p className=' text-white p-2 lg:p-5 lg:text-xl font-semibold'>{v.name}</p>
          </Link>)
        })}
      </div>



    </main>
  )
}


export default Home
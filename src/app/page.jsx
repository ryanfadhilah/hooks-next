"use client"
import Image from 'next/image'
import Sidebar from '@/components/sidebar/page'
import { useReducer } from 'react'

import State from '@/components/(sidebar)/state/page'
import Ref from '@/components/(sidebar)/ref/page'
import Reducer from '@/components/(sidebar)/reducer/effect'
import Layout from '@/components/(sidebar)/layout/page'

function Home() {

  const links = [
    {
      id: 1,
      name: "useState",
      click: { type: "STATE" }

    },
    {
      id: 2,
      name: "useRef",
      click: { type: "REF" }

    },
    {
      id: 3,
      name: "useReducer",
      click: { type: "REDUCER" }

    },
    {
      id: 4,
      name: "useLayout",
      click: { type: "LAYOUT" }

    },
  ]

  function reducer(state, action) {
    switch (action.type) {
      case "STATE":
        return { page: <State></State> }
        break;
      case "REF":
        return { page: <Ref></Ref> }
        break;
      case "REDUCER":
        return { page: <Reducer></Reducer> }
      case "LAYOUT":
        return { page: <Layout></Layout> }
        break;
      default:
        break;
    }
  }


  const [state, dispatch] = useReducer(reducer, { page: false })

  return (
    <main className='w-full h-full my-10 flex gap-10'>

      <nav className=' h-full w-1/6  flex flex-col items-center py-6 rounded-md bg-teal-50 shadow-[0_3px_10px_rgb(0,0,0,0.1)]'>
        {links.map((v, i, a) => {
          return (
            <button key={i} onClick={() => { dispatch(v.click) }} className=' w-full h-12 flex items-center px-5 hover:bg-teal-500 hover:text-white transition-all ease-in-out duration-300 '>{v.name}</button>
          )
        })}
      </nav>

      <div className='bg-teal-50 w-full h-full grid  grid-cols-1 '>
        <button className='transition ease-in-out duration-300'>
          {state.page ? state.page : ""}
        </button>
      </div>


    </main>
  )
}


export default Home
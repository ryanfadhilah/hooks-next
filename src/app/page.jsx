"use client"
import Effect from '@/components/(sidebar)/effect/page'
import Layout from '@/components/(sidebar)/layout/page'
import Reducer from '@/components/(sidebar)/reducer/page'
import Ref from '@/components/(sidebar)/ref/page'
import State from '@/components/(sidebar)/state/page'
import Image from 'next/image'
import { useReducer } from 'react'



function Home() {

  // selector 

  const links = [
    {
      id: 1,
      name: "useState",
      click: { type: "STATE" }

    },
    {
      id: 2,
      name: "useReducer",
      click: { type: "REDUCER" }

    },
    {
      id: 3,
      name: "useEffect",
      click: { type: "EFFECT" }

    },
    {
      id: 4,
      name: "useRef",
      click: { type: "REF" }

    },
    {
      id: 5,
      name: "useLayoutEffect",
      click: { type: "LAYOUT" }

    },
  ]

  function reducer(state, action) {
    switch (action.type) {
      case "STATE":
        return { page: <State></State> }
        break;
      case "REDUCER":
        return { page: <Reducer></Reducer> }
        break
      case "EFFECT":
        return { page: <Effect></Effect> }
        break
      case "REF":
        return { page: <Ref></Ref> }
        break;
      case "LAYOUT":
        return { page: <Layout></Layout> }
        break;
      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(reducer, { page: false })

  return (
    <main className='w-full h-full  flex gap-10'>
      <nav className=' h-full w-1/6  flex flex-col items-center py-6 rounded-md border-solid border-2 border-slate-200'>
        {links.map((v, i, a) => {
          return (
            <button key={i} onClick={() => { dispatch(v.click) }} className=' w-full h-12 flex items-center px-5 hover:bg-teal-500 hover:text-white transition-all ease-in-out duration-300 '>{v.name}</button>
          )
        })}
      </nav>

      <div className=' w-full h-full flex justify-center items-center rounded-md border-solid border-2 border-slate-200'>
        {state.page ? state.page : ""}
      </div>


    </main>
  )
}


export default Home
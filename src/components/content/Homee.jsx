"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const pages = [
  {
    name: "Intro",
    herf: "/intro",
  },
  {
    name: "useState",
    herf: "/hookState",
  },
  {
    name: "useReducer",
    herf: "/hookReducer",
  },
  {
    name: "useEffect",
    herf: "/hookEffect",
  },
  {
    name: "useRef",
    herf: "/hookRef",
  },
  {
    name: "useLayoutEffect",
    herf: "/hookLayoutEffect",
  },
  {
    name: "useImperative",
    herf: "/hookImperativeHandler",
  },
  {
    name: "useContex",
    herf: "/hookContex",
  },
  // {
  //   name: "useMemo",
  //   herf: "/hookContex",
  // },
  // {
  //   name: "useCallback",
  //   herf: "/hookContex",
  // },
  // {
  //   name: "useTransition",
  //   herf: "/hookContex",
  // },
];

function Homee() {
  return (
    <motion.main
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" flex flex-col w-full h-full gap-5 items-center"
    >
      <div className="flex flex-row-reverse md:flex-row items-center md:justify-center gap-2">
        <Image
          src={"/rimage.png"}
          width={35}
          height={35}
          alt="Picture of the author"
          className="animate-spin"
        />
        <h1 className="text-4xl">React-Hooks</h1>
      </div>

      <div className="w-5/6 lg:w-3/6 h-full grid grid-col-1 md:grid-cols-3 gap-3 ">
        {pages.map((v, i, a) => {
          return (
            <Link
              className="flex md:flex-row-reverse items-end rounded-md lg:text-xl bg-teal-500 hover:bg-teal-950 hover:shadow-lg shadow-black transition-all ease-in-out duration-200"
              href={v.herf}
              key={i}
            >
              <p className=" text-white p-2 lg:p-5 font-semibold">{v.name}</p>
            </Link>
          );
        })}
      </div>
    </motion.main>
  );
}

export default Homee;

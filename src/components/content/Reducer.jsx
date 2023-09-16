"use client";

import React, { useReducer } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HookReducer = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return { number: state.number + 1, photo: state.photo };
        break;
      case "SHOW":
        return { number: state.number, photo: !state.photo };
        break;
      case "BOTH":
        return { number: state.number + 1, photo: !state.photo };
        break;

      default:
        return { number: 0, photo: false };
        break;
    }
  }

  const [state, dispacth] = useReducer(reducer, { number: 0, photo: false });

  return (
    <motion.main
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-full grid grid-cols-1 items-center"
    >
      <div className="w-full h-full flex flex-col gap-5">
        <section className="flex flex-col bg-yellow-100 text-black p-5 gap-5 rounded-xl">
          <p>
            {" "}
            <b className="font-bold">Use Reducer</b> is used to create multiple
            state that contains data. It is the advanced version of useState.
          </p>
          <p>
            Use Reducer has a built in function that can be used to manipulate
            multiple the data of the current state.
          </p>
          <p>
            example : const [state, dispacth] = useReducer(reducer, any data
            type)
          </p>
        </section>

        <section className="flex flex-col p-5 gap-5  bg-teal-950 w-full h-full">
          <div className="bg-teal-900 text-white  p-5 md:gap-52 flex items-center justify-center">
            {state.photo ? (
              <Image src={"cat-vibe.gif"} width={144} height={144} alt="cat" />
            ) : (
              ""
            )}
            <p className="font-semibold gap-7 justify-center items-center flex flex-col">
              <span className=" underline">Current Number State</span>
              <span>{state.number}</span>
              <span className=" underline">Current Photo State</span>
              <span>{state.photo ? "True" : "False"}</span>
            </p>
            {state.photo ? (
              <Image src={"cat-vibe.gif"} width={144} height={144} alt="cat" />
            ) : (
              ""
            )}
          </div>

          <div className="w-full h-full grid grid-cols-3 gap-5">
            <button
              className=" bg-teal-500 text-white font-semibold hover:bg-yellow-200 hover:text-black transition-all ease-in-out duration-200"
              onClick={() => dispacth({ type: "INCREMENT" })}
            >
              Increment
            </button>
            <button
              className=" bg-teal-500 text-white font-semibold hover:bg-yellow-200 hover:text-black transition-all ease-in-out duration-200"
              onClick={() => dispacth({ type: "SHOW" })}
            >
              {state.photo ? "Hide" : "Show"} Cats
            </button>
            <button
              className=" bg-teal-500 text-white font-semibold hover:bg-yellow-200 hover:text-black transition-all ease-in-out duration-200"
              onClick={() => dispacth({ type: "BOTH" })}
            >
              Both Actions
            </button>
          </div>
        </section>
      </div>
    </motion.main>
  );
};

export default HookReducer;

"use client";
import React, { useState } from "react";

const HookState = () => {
  const [number, setNumber] = useState(0);

  return (
    <main className="w-full h-full grid grid-cols-1 items-center">
      {/* App */}

      <div className="w-full h-full flex flex-col gap-5">
        <section className="flex flex-col bg-yellow-100 text-black p-5 gap-5 rounded-xl">
          <p>
            {" "}
            <b className="font-bold">Use State</b> is used to create a state
            that contains data
          </p>
          <p>
            Use state has a built in function that can be used to manipulate the
            data of the current state
          </p>
          <p>example : const [data,setData = useState(initial value)]</p>
        </section>

        {/* App */}
        <section className="flex flex-col h-full bg-teal-950 p-5 gap-5">
          <div className=" p-5 bg-teal-900 text-white flex flex-col justify-center items-center text-2xl font-semibold gap-5">
            <div>Current State</div>
            <div>{number}</div>
          </div>

          <div className="gap-5 h-full grid grid-cols-1 md:grid-cols-3">
            <button
              className=" flex flex-col items-center justify-center gap-5 bg-teal-500 text-white font-semibold hover:bg-yellow-200 hover:text-black transition-all ease-in-out duration-200"
              onClick={() => setNumber(number + 1)}
            >
              {" "}
              <p>setNumber(number + 1)</p> Increment
            </button>
            <button
              className=" flex flex-col items-center justify-center gap-5 bg-teal-500 text-white font-semibold hover:bg-yellow-200 hover:text-black transition-all ease-in-out duration-200"
              onClick={() => setNumber(0)}
            >
              <p>setNumber(0)</p> Reset
            </button>
            <button
              className="  flex flex-col items-center justify-center gap-5 bg-teal-500 text-white font-semibold hover:bg-yellow-200 hover:text-black transition-all ease-in-out duration-200"
              onClick={() => setNumber(number - 1)}
            >
              <p>setNumber(number - 1)</p> Decrement
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HookState;

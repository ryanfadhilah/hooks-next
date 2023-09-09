"use client";
import ImperativeButton from "@/components/ImperativeButton/page";
import React, { useRef } from "react";

const HookImperativeHandler = () => {
  const buttonRef = useRef(null);

  return (
    <div className="flex flex-col w-full h-full gap-5 p-5 text-black">
      <section className="flex flex-col bg-yellow-100 text-black p-5 gap-5 rounded-xl">
        <p>
          {" "}
          <b className="font-bold">useImperativeHandle</b> is a React Hook that
          lets you customize the handle exposed as a ref
        </p>
        <p>
          It can be used to manipulate <b className="font-bold">child state</b>{" "}
          by calling out <b className="font-bold">child function</b> from{" "}
          <b className="font-bold">Parent Component</b>
        </p>
        <p>example : useImperativeHandle(ref, createHandle, dependencies?)</p>
      </section>

      <section className="flex flex-col text-white p-5 bg-teal-950 rounded-xl">
        <button
          className="p-5 bg-teal-900 hover:bg-yellow-500 rounded-xl"
          onClick={() => {
            buttonRef.current.increment();
          }}
        >
          Parent Button ( + 1 ){" "}
        </button>
        <ImperativeButton ref={buttonRef}></ImperativeButton>
      </section>
    </div>
  );
};

export default HookImperativeHandler;

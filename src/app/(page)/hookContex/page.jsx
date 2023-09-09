"use client";
import Input from "@/components/(contex)/input/page";
import Output from "@/components/(contex)/output/page";

import React, { createContext, useState } from "react";

export const appContext = createContext(null);

const HookContext = () => {
  const [name, setName] = useState("World!");

  return (
    <appContext.Provider value={{ name, setName }}>
      <div className="flex flex-col h-full gap-5">
        <section className="flex flex-col bg-yellow-100 text-black p-5 gap-5 rounded-xl">
          <p>
            <b className="font-bold">useContext</b> is a React Hook that lets
            you read and subscribe to context from your component.
          </p>
          <p>
            It allows the <b className="font-bold">Child Component</b>{" "}
            manipulate data of <b className="font-bold">Parent state</b>
          </p>
          <p>example : const value = useContext(SomeContext)</p>
        </section>

        <section className="flex flex-col bg-teal-950 rounded-xl gap-5 p-5">
          <Output></Output>

          <Input></Input>
        </section>
      </div>
    </appContext.Provider>
  );
};

export default HookContext;

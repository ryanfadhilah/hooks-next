"use client";
import { notFound } from "next/navigation";
import React, { useEffect, useLayoutEffect, useState } from "react";

const HookLayoutEffect = () => {
  const [dataEffect, setDataEffect] = useState([]);
  const [dataLayout, setDataLayout] = useState([]);

  useLayoutEffect(() => {
    async function getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
        cache: "no-store",
      });
      if (!res.ok) {
        return notFound();
      }
      const temp = await res.json();
      setDataLayout(temp);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const result = await fetch(
        "https://jsonplaceholder.typicode.com/comments",
        {
          cache: "no-store",
        }
      );
      if (!result.ok) {
        return notFound();
      }
      const temp = await result.json();
      setDataEffect(temp);
    }
    getData();
  }, []);

  return (
    <main className="w-full h-full grid grid-cols-1  items-center">
      {/* App */}
      <div className="flex flex-col gap-2">
        <span className="flex justify-between p-5 bg-yellow-100 text-black  rounded-lg">
          <h1>useEffect - slower</h1>
          <h1 className="animate-pulse font-extrabold">
            Render after everything is ready{" "}
          </h1>
        </span>
        <div className="w-full h-52 bg-teal-950 rounded-md grid grid-cols-1 border-solid border-2 border-slate-700 overflow-y-scroll p-5 gap-5">
          {dataEffect.map((v, i, a) => {
            return (
              <div
                className="grid grid-cols-1 bg-teal-900 text-white p-5 rounded-md"
                key={i}
              >
                <div>Id : {v.id}</div>
                <div>Name : {v.name}</div>
                <div>Email : {v.email}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="flex justify-between p-5 bg-yellow-100 text-black  rounded-lg">
          <h1>useLayoutEffect - faster</h1>
          <h1 className="animate-pulse font-extrabold">
            Render UI, then Wait for Data
          </h1>
        </span>
        <div className="w-full h-52 bg-teal-950 rounded-md grid grid-cols-1 border-solid border-2 border-slate-700 overflow-y-scroll p-5 gap-5">
          {dataLayout.map((v, i, a) => {
            return (
              <div
                className="grid grid-cols-1 bg-teal-900 text-white p-5 rounded-md"
                key={i}
              >
                <div>Id : {v.id}</div>
                <div>Name : {v.name}</div>
                <div>Email : {v.email}</div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default HookLayoutEffect;

"use client";
import React, { useEffect, useState } from "react";
import notFound from "next/navigation";

const HookEffect = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
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

      setData(temp);
    }
    getData();
    setLoading(false);
  }, []);

  console.log(data);
  return (
    <main className="w-full h-full flex flex-col gap-5">
      {/* App */}

      <section className="flex flex-col bg-yellow-100 text-black p-5 gap-5 rounded-xl">
        <p>
          <b className="font-bold">Use Effect</b> is used to create a Replica of
          Component Life Cycle in Functional method.
        </p>
        <p>Example : did mount/update/will un mount</p>
        <p>
          It is used to keep track the changes of a certain state, and perform a
          render whenever needed.
        </p>
      </section>

      <section className="w-full h-96 rounded-xl bg-teal-950 grid grid-cols-1 border-solid border-2 border-slate-700 overflow-y-scroll p-5 gap-5">
        {loading ? (
          <p className="text-white text-5xl">Loading...</p>
        ) : (
          <>
            {data.map((v, i, a) => {
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
          </>
        )}
      </section>
    </main>
  );
};

export default HookEffect;

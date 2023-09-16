import React from "react";

export const metadata = {
  title: "Hooks Notes - Intro",
  description: "Personal Hooks Notes for Intro",
};

function page() {
  return (
    <main className="w-full h-full flex flex-col gap-5">
      <section className="flex flex-col bg-yellow-100 text-black p-5 gap-5 rounded-xl">
        <p className="font-bold">What is a Hook?</p>
        <p>
          A Hook is a special function that lets you “hook into” React features.
        </p>
      </section>

      <section className="flex flex-col bg-yellow-100 text-black p-5 gap-5 rounded-xl">
        <p className="font-bold">When would I use a Hook?</p>
        <p>
          If you want to add a state management for adding interactivity that
          require state management
        </p>
        <p>example : Loading State, pagination and many more.</p>
        <p></p>
      </section>

      <section className="flex flex-col bg-yellow-100 text-black p-5 gap-5 rounded-xl">
        <p className="font-bold">NOTES:</p>
        <p>
          <b className="font-bold">State</b> is a data or value that exist
          within that current page.
        </p>
        <p>
          <b className="font-bold">Props</b> is a data or value that recieved
          from the parrent page.
        </p>
      </section>
    </main>
  );
}

export default page;

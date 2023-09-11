import React from "react";

function page() {
  return (
    <main className="w-full h-full flex flex-col gap-5">
      <section className="bg-yellow-100 rounded-lg p-5 gap-5 flex flex-col text-black">
        <p>
          <b className="font-bold">useMemo</b> is used to memorized data after
          computation
        </p>
        <p>
          it prevents a full render of a page if the computed output is still
          the same as before
        </p>
      </section>

      <section className="bg-emerald-900">
        <p>d</p>
        <p>d</p>
        <p>d</p>
      </section>
    </main>
  );
}

export default page;

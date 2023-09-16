import HookState from "@/components/content/State";
import React from "react";

export const metadata = {
  title: "Hooks Notes - State",
  description: "Personal Hooks Notes for state",
};

const page = () => {
  return (
    <div className="flex w-full h-full">
      <HookState></HookState>
    </div>
  );
};

export default page;

import HookReducer from "@/components/content/Reducer";
import React from "react";

export const metadata = {
  title: "Hooks Notes - Reducer",
  description: "Personal Hooks Notes for reducer",
};

const page = () => {
  return (
    <div className="flex w-full h-full">
      <HookReducer></HookReducer>
    </div>
  );
};

export default page;

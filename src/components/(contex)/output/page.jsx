import { appContext } from "@/components/content/Context";
import React, { useContext } from "react";

const Output = () => {
  const { name } = useContext(appContext);

  return (
    <div className="flex flex-col gap-5 rounded-xl w-full p-5 bg-teal-900">
      <p>Child Component</p>
      <p>Parent State: {name}</p>
    </div>
  );
};

export default Output;

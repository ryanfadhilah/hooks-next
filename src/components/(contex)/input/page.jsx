import { appContext } from "@/components/content/Context";
import React, { useContext } from "react";

const Input = () => {
  const { setName } = useContext(appContext);

  return (
    <input
      onChange={(e) => {
        setName(e.target.value);
      }}
      className="w-full p-5 rounded-xl bg-white text-black"
      placeholder="Child Input : type something..."
    ></input>
  );
};

export default Input;

import React from "react";
import Random from "./Components/Random";
import Tag from "./Components/Tag";

export default function App() {
  return (
    <div className="w-full h-full flex flex-col background">

      <h1 className="bg-white rounded-xl text-center mt-[20px] mx-7 text-3xl font-semibold py-1">Random GIFs</h1>

      <div className="flex flex-col items-center gap-y-10 mt-[30px] ">
        
        <Random/>

        <Tag/>

      </div>

    </div>
  );
}

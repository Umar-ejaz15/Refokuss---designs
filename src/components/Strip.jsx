import React from "react";

const Strip = ({ data }) => {
  const { title, number } = data;
  return (
    <>
      <div className="w-[20%] border-t-[2.2px] border-b-[.2px] border-r-[.5px] border-zinc-600">
        <div className="flex text-sm justify-between items-center px-4 py-2">
          <h1 className="font-bold">{title}</h1>
          <p>{number}</p>
        </div>
      </div>
    </>
  );
};

export default Strip;

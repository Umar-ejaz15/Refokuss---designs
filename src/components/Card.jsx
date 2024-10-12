import React from "react";

const Card = ({ data }) => {
  const { title, description, long, small } = data;
  return (
    <div
      className={`
        ${small && "w-1/2 hover:bg-zinc-700"}
        ${long && "w-2/3 hover:bg-violet-600"}
         h-[60vh] flex flex-col justify-between bg-zinc-800 
         rounded-l-xl`}
    >
      <div className="top p-4">
        <h1 className="text-sm font-thin ">{title}</h1>
        <h1 className="text-2xl font-bold ">{description}</h1>
      </div>
      <div className="bottom p-4">
        {long && (
          <>
            <div className="mb-4">
              <h1 className="text-5xl font-bold mb-2 ">lets start something</h1>
              <button className=" border-[1px] border-zinc-300 hover:text-black text-white font-bold py-2 px-10 rounded-full">
                Contact US
              </button>
            </div>
          </>
        )}
        {small && (
          <>
            <div>
              <p className="text-sm text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                ipsam facilis
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;

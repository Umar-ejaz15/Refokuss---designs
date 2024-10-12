import React from "react";
import Button from "./Button";

const Product = ({ data, count, mover }) => {
  const { title, description, cases, start } = data;

  return (
    <div
      onMouseEnter={() => mover(count)}
      className={`w-full h-[23rem] mx-auto border-b border-t border-zinc-600 flex px-10 py-10 items-center ${
        (count === 0 && "hover:bg-purple-400 ") ||
        (count === 1 && "hover:bg-green-400") ||
        (count === 2 && "hover:bg-red-400") ||
        (count === 3 && "hover:bg-blue-400")
      }`}
    >
      <div className="w-1/2 text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
      <div className="w-1/2 flex flex-col items-end text-right ">
        <div className="w-2/3 flex flex-col items-end text-right">
          <p className="mb-4">{description}</p>
          {cases === start ? (
            <div className="flex gap-3">
              <Button text="Live Demo" />
              <Button text="View Product" />
            </div>
          ) : (
            <div className="flex gap-3">
              <Button text="Live Demo" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;

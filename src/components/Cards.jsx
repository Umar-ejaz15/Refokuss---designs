import React from "react";
import Card from "./Card";

const Cards = () => {
  var data = [
    {
      title: "Up New Culture",
      description: "Who Are We",
      small: true,
    },
    {
      title: "Get In Touch",
      description: "Let's Get To It Together",
      long: true,
    },
  ];
  return (
    <div className="mt-20 flex gap-2 max-w-screen-lg mx-auto">
      {data.map((item, index) => (
        <>
          <Card data={item} key={index}  />
        </>
      ))}
    </div>
  );
};

export default Cards;

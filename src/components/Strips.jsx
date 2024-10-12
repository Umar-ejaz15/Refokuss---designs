import React from "react";
import Strip from "./Strip";

const Strips = () => {
  const data = [
    {
      title: "Designs",
      number: "43",
    },
    {
      title: "Clients",
      number: "23",
    },
    {
      title: "Projects",
      number: "34",
    },
    {
      title: "Awards",
      number: "12",
    },
    {
      title: "Hackathons",
      number: "14",
    },
  ];

  return (
    <>
      <div className="w-full flex mt-20">
        {data.map((item, index) => (
          <Strip key={index} data={item} />
        ))}   
      </div>
    </>
  );
};

export default Strips;

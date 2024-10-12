import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useState } from "react";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://cdn-eahjn.nitrocdn.com/ChEvwayTHZmZJUAdsUNMLXuXZdBprFoQ/assets/images/optimized/rev-2fa3a14/www.spinxdigital.com/app/uploads/2022/10/Best-Website-Designs_1.1.jpg",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqA7QJ_TH_j_oc8BfMWF7bgwtTgqM1MPiVRg&s",
      top: "47%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN3fkyDIoNrb6jACcmUUz9AUkjMfHbVLIS3cit0rM6QCDGkYe1fduWPa3cInfUoQBB5aI&usqp=CAU",
      top: "45%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTV-FOG_ZQgdqXzGC8v6P2xbLvdUuteYpUaQ&s",
      top: "55%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTToN2yxz87mtwQg7MmTd3tjY28iO8CorVY6eKfy0_OEkvDMVgUQ3cNjen8cqZVjOApuYg&usqp=CAU",
      top: "58%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://media.designrush.com/inspirations/232151/conversions/jagenberg-website-design-preview_mobile.jpg",
      top: "48%",
      left: "54%",
      isActive: false,
    },
  ]);

  function imagesShow(arr) {
    setImages((pre) => {
      return pre.map((item, index) => ({
        ...item,
        isActive: arr.includes(index),
      }));
    });
  }

  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (data) => {
    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 2:
        imagesShow([0, 1]);
        break;
      case 4:
        imagesShow([0, 1, 2]);
        break;
      case 6:
        imagesShow([0, 1, 2, 3]);
        break;
      case 8:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 10:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full max-w-screen-lg mx-auto relative">
      <div className="">
        <h1 className="text-[25vw] text-center select-none leading-none tracking-tighter">
          Work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (item, index) =>
              item.isActive && (
                <img
                  key={index}
                  className="absolute object-cover -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: item.top, left: item.left }}
                  width={250}
                  height={250}
                  src={item.url}
                  alt={`Work image ${index + 1}`}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;

import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import { easeIn } from "framer-motion/dom";

const Products = () => {
  const [pos, setPos] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const mover = (index) => {
    setPos(index * 23);
  };

  var ProductsData = [
    {
      title: "Arqitel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      cases: true,
      start: true,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPI_r0m6srEM5Yau1Yiz9yGlfxQC_8T6yzA&s",
    },
    {
      title: "TTR",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      cases: true,
      start: false,
      url: "https://media.licdn.com/dms/image/C4D12AQGePvNOndLFSA/article-cover_image-shrink_600_2000/0/1627284952796?e=2147483647&v=beta&t=F75pn-3YgBKjOxuKFd90lPBxDKe-rpMQiuPIDsQfYEI",
    },
    {
      title: "YIR 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      cases: true,
      start: true,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2duAvyIK0-6vELkYQRNna4fZaylpP_BP_9A&s",
    },
    {
      title: "Yahoo!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      cases: true,
      start: false,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5i1oBsZoTrilBBUaP5scVN6fuupZcDbbCWg&s",
    },
  ];

  return (
    <div 
      className="relative mt-20 flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {ProductsData.map((item, index) => (
        <>
          <Product count={index} data={item} mover={mover} />
          <motion.div
            initial={{ y: pos, opacity: 0 }}
            animate={{ y: pos + "rem", opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute w-full h-full top-0 pointer-events-none"
          >
            <div className="w-1/4 h-[23rem] overflow-hidden absolute left-[50%] -translate-x-[50%] bg-blue-700">
              {ProductsData.map((item, index) => (
                <motion.div
                  className="w-full h-full object-cover object-center rounded-2xl"
                  animate={{
                    y: -pos + "rem",
                    transition: { duration: 0.3, ease: "easeInOut" },
                  }}
                >
                  <img className="w-full h-full" src={item.url} alt="" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      ))}
    </div>
  );
};

export default Products;
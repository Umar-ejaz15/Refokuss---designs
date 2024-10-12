import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiMongoose } from "react-icons/si";
import { SiGreensock } from "react-icons/si";

const Marqee = () => {
  return (
    <Marquee speed={100} pauseOnHover={true} >
      <div className="w-screen flex justify-around " >
        <div className="marquee-item text-center">
          <FaHtml5 size={40} />
          <span>HTML5</span>
        </div>
        <div className="marquee-item text-center">
          <FaCss3 size={40} />
          <span>CSS3</span>
        </div>
        <div className="marquee-item text-center">
          <FaJs size={40} />
          <span>JavaScript</span>
        </div>
        <div className="marquee-item text-center">
          <FaReact size={40} />
          <span>React</span>
        </div>
        <div className="marquee-item text-center">
          <FaNodeJs size={40} />
          <span>Node</span>
        </div>
        <div className="marquee-item text-center">
          <SiExpress size={40} />
          <span>Express</span>
        </div>
        <div className="marquee-item text-center">
          <SiMongodb size={40} />
          <span>MongoDB</span>
        </div>
        <div className="marquee-item text-center">
          <SiMongoose size={40} />
          <span>Mongoose</span>
        </div>
        <div className="marquee-item text-center">
          <SiGreensock size={40} />
          <span>GSAP</span>
        </div>
      </div>
    </Marquee>
  );
};

export default Marqee;
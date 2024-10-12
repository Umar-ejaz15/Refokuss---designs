import React, { useState, useEffect } from "react";
import Button from "./Button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="border-b-[2px] border-zinc-600">
      <div className="max-w-screen-xl h-16 mx-auto flex justify-between items-center px-4">
        <nav className="flex gap-5 items-center">
          <h1 className="text-xl sm:text-2xl font-bold">Refkuss</h1>

          <ul
            className={`flex flex-col md:flex-row gap-5 md:gap-10 items-center ${
              isMenuOpen || !isMobile
                ? "absolute md:relative top-16 md:top-auto left-0 right-0 md:left-auto md:right-auto bg-zinc-800 md:bg-transparent shadow-md md:shadow-none p-4 md:p-0"
                : "hidden"
            }`}
          >
            {["Home ", "About", "Contact", "News"].map((item, index) => (
              <div key={index} className="flex items-center gap-1">
                {index === 2 && (
                  <span className="w-1 rounded-full inline-block h-2 p-1 bg-green-500"></span>
                )}
                {index === 3 && (
                  <span className="w-[1px] h-6 bg-zinc-300 hidden md:inline-block"></span>
                )}
                <li className="text-sm">
                  <a className={index === 3 ? "md:ml-10" : ""} href="">
                    {item}
                  </a>
                </li>
              </div>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Button text="Get Started" className="hidden sm:block" />
          {isMobile && (
            <button className="md:hidden" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="max-w-screen-lg mx-auto py-12">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl uppercase font-bold">
              Refokuss
            </h1>
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap justify-between">
            <div className="w-1/3 mb-4 md:mb-0">
              <ul className="space-y-2">
                {["Social", "Instagram", "Twitter", "LinkedIn"].map(
                  (item, index) => (
                    <li
                      key={index}
                      className={`text-sm ${index === 0 ? "mb-10" : ""}`}
                    >
                      <a href="#" className="hover:underline">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="w-1/3 mb-4 md:mb-0">
              <ul className="space-y-2">
                {["Sitemap", "Home", "Work", "Career", "Contact"].map(
                  (item, index) => (
                    <li
                      key={index}
                      className={`text-sm ${index === 0 ? "mb-10" : ""}`}
                    >
                      <a href="#" className="hover:underline">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="w-1/3">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                sapiente corrupti enim laboriosam assumenda consequuntur tempore
                quas, sequi voluptatibus velit reiciendis impedit doloribus,
                iusto unde, modi voluptates quis dolore magni.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

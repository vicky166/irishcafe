"use client";

import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Validity() {
  return (
    <section className="text-white py-8 px-4 mt-8 md:py-16 md:px-8 md:mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
          <div className="mb-8 lg:mb-0 lg:mt-12 text-center lg:text-left">
            <h2
              className={`${bebasNeue.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-10 lg:mb-20`}
            >
              100% OFF
            </h2>
            <p
              className={`${bebasNeue.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl`}
            >
              6 MONTHS VALIDITY
            </p>
          </div>

          <div className="max-w-xl mb-8 lg:mb-0 text-center lg:text-left">
            <h1
              className={`${bebasNeue.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight`}
            >
              GIVE THE GIFT OF GREAT<br />BEER, COCKTAILS & BITES!
            </h1>
            <p className="text-gray-300 text-base sm:text-lg font-bold mb-8 mt-6 lg:mt-10">
              Sagittis auctor morbi posuere ullamcorper lobortis sagittis nam id
              arcu amet lorem mauris egestas tortor mus feugiat quam eu laoreet
              dolor neque nec id. 
            </p>
            <button className="bg-[#18C67E] hover:bg-emerald-600 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-md transition-colors uppercase text-sm sm:text-base">
              Gift Your Friend
            </button>
          </div>

          <div className="flex-shrink-0 mt-8 lg:mt-0">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-[250px] xl:h-[250px]"> 
              <img
                src="/pt.svg"
                alt="SVG Icon"
                className="w-full h-full object-contain"
                style={{ transform: "rotate(25deg)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

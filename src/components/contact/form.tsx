"use client";

import { Bebas_Neue } from "next/font/google";
import { Instagram, Twitter, Facebook } from "lucide-react"; // Import icons from lucide-react

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Form() {
  return (
    <div className="ml-4 sm:ml-12 mt-16 sm:mt-32 bg-zinc-900 text-white p-6 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className={`${bebasNeue.className} text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8`}>
          CONTACT
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-12">
            <p className="text-sm sm:text-lg font-medium sm:font-bold mt-6 sm:mt-12">
              Sagittis, faucibus nibh sed rhoncus lacus, amet, quis eget tristique
              <br />
              purus faucibus orci commodo fames aliquet venenatis sed aliquet
              <br />
              purus felis congue vulputate.
            </p>

            <div>
              <h2 className={`${bebasNeue.className} text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6`}>
                SPEAK TO US
              </h2>
              <div className="space-y-2 sm:space-y-4 text-base sm:text-xl font-bold mb-12 sm:mb-20">
                <p>Call: +1 123 456 7890</p>
                <p>Event enquiry: laura@example.com</p>
                <p>Press enquiry: mark@example.com</p>
                <p>Other enquiry: mail@example.com</p>
              </div>
            </div>

            <div>
              <h2 className={`${bebasNeue.className} text-xl sm:text-2xl font-bold mb-4 sm:mb-6`}>
                FOLLOW US
              </h2>
              <div className="flex justify-center mt-6 sm:mt-12 md:justify-start gap-6">
                <a href="#" className="hover:text-emerald-400 flex items-center gap-2">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>Instagram</span>
                </a>
                <a href="#" className="hover:text-emerald-400 flex items-center gap-2">
                  <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>Twitter</span>
                </a>
                <a href="#" className="hover:text-emerald-400 flex items-center gap-2">
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full md:w-[500px] h-12 px-4 bg-white text-black rounded"
              />
            </div>

            <div>
              <label className="block mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full md:w-[500px] h-12 px-4 bg-white text-black rounded"
              />
            </div>

            <div>
              <label className="block mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full md:w-[500px] h-12 px-4 bg-white text-black rounded"
              />
            </div>

            <div>
              <label className="block mb-2">
                Comment or Message <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                className="w-full md:w-[500px] h-32 p-4 bg-white text-black rounded resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-emerald-400 hover:bg-emerald-500 text-white px-8 py-3 rounded text-lg font-semibold transition-colors"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

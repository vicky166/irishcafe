"use client";
import { Bebas_Neue } from 'next/font/google'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
})

export default function Menu() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 mt-10 lg:ml-12 lg:mt-20 gap-6 lg:gap-12">
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-screen flex justify-center items-center">
        <img
          src="/img/image7.jpg?height=800&width=600"
          alt="Bar with beer taps and coasters"
          className="w-full h-full object-cover lg:w-auto lg:h-auto max-w-md lg:max-w-none"
        />
      </div>

      <div className="p-4 sm:p-8 lg:p-1 flex flex-col justify-center">
        <div className="max-w-xl mx-auto lg:mx-0">
          <span className={`${bebasNeue.className} text-[#18C67E] uppercase lg:mb-16 tracking-wider mb-6 block text-center lg:text-left lg:text-2xl sm:text-base`}>
            Menu
          </span>

          <h1 className={`${bebasNeue.className} text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center lg:text-left leading-tight`}>
            FOOD & DRINKS
          </h1>

          <p className="text-white mb-4 font-bold text-center lg:text-left text-lg sm:text-base">
            Nunc, suspendisse nec dictum quis nisi purus fermentum<br></br>{" "}
            lobortis enim id netus a feugiat dictum suspendisse turpis<br></br>{" "}
            pulvinar mauris mi, mi, aliquam mi habitasse.
          </p>

          <p className="text-gray-300 mb-8 text-center lg:text-left text-lg sm:text-base">
            Lectus elit habitasse eu integer in gravida volutpat lacus lectus
            <br></br>
            sed tortor turpis sagittis elit tellus id senectus sit nibh habitant
            <br></br>
            nunc lectus id integer mattis amet facilisis mi sit justo, aenean
            <br></br>
            est ut massa vitae tellus sit id tempus feugiat aliquet cursus
            <br></br> quis tincidunt augue in sodales.
          </p>

          <div className="text-center lg:text-left">
            <button className=" bg-[#18C67E] hover:bg-emerald-700 text-white font-bold py-2 px-4 sm:px-6 rounded transition">
              READ MORE →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

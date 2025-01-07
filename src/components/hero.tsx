import Link from "next/link";
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img/image1.webp?height=1080&width=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/100" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <h1 className={`${bebasNeue.className} mb-8 mt-[300px] font-bold text-white sm:text-4xl md:text-5xl lg:text-8xl`}>
          WELCOME TO THE IRISH CAFE
        </h1>
        <p className="mb-12 max-w-3xl text-lg text-gray-300">
          Ut dictum pellentesque libero venenatis pharetra dapibus magna
          sagittis in amet nisl et, mauris, tincidunt amet erat sed at sit
          montes, feugiat hac velit.
        </p>
        <Link
          href="#booking"
          className="bg-[#18C67E] hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-md text-sm uppercase tracking-wide transition-colors duration-200"
        >
          BOOK A TABLE
        </Link>
      </div>
    </section>
  );
}

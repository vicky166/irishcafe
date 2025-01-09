import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Food1() {
  return (
    <section className="relative h-[500px] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img/food.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70 to-white/90"></div>
      </div>

      <div className="relative h-full flex items-center md:ml-32  px-4">
        <h1
          className={`${bebasNeue.className} text-white  md:mt-32 text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider`}
        >
          FOOD
        </h1>
      </div>
    </section>
  );
}

import { Star } from "lucide-react";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Reviews() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-16 mb-16 lg:mr-48">
          <div className="flex-1 text-center lg:text-left">
            <h3
              className={`${bebasNeue.className} text-emerald-400 text-lg tracking-wider font-medium mb-8 lg:mb-16`}
            >
              REVIEWS
            </h3>
            <h2
              className={`${bebasNeue.className} text-white text-5xl lg:text-7xl font-bold leading-tight tracking-tight`}
            >
              WHAT OUR GUESTS SAY
            </h2>
          </div>

          <div className="text-white lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="flex flex-col items-center lg:items-start">
              <span
                className={`${bebasNeue.className} text-5xl lg:text-7xl text-[#DEE3E1] font-bold leading-none`}
              >
                4.5
              </span>
              <div className="pt-4 text-center lg:text-left">
                <p className="text-lg font-bold text-[#DEE3E1]">Out of 5</p>
                <div className="flex gap-1 justify-center lg:justify-start text-emerald-400 mt-2">
                  <Star className="w-3 h-3 fill-emerald-400" />
                  <Star className="w-3 h-3 fill-emerald-400" />
                  <Star className="w-3 h-3 fill-emerald-400" />
                  <Star className="w-3 h-3 fill-emerald-400" />
                  <Star className="w-3 h-3 fill-emerald-100/90" />
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-1 text-[#DEE3E1] text-lg lg:mt-0">
              <div className="flex justify-center lg:justify-start items-center gap-3">
                <span className="text-xl">G</span>
                <span>2,394 Ratings</span>
              </div>
              <div className="flex justify-center lg:justify-start items-center gap-3">
                <span className="text-xl">🏢</span>
                <span>989 Ratings</span>
              </div>
              <div className="flex justify-center lg:justify-start items-center gap-3">
                <span className="text-xl">▶️</span>
                <span>2,574 Ratings</span>
              </div>
              <div className="flex justify-center lg:justify-start items-center gap-3">
                <span className="text-xl">👥</span>
                <span>1,293 Ratings</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="border border-gray-600 p-10 bg-transparent">
            <div className="flex gap-1 text-emerald-400 mb-6">
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
            </div>
            <p className="text-[#DEE3E1] font-bold text-lg leading-relaxed mb-8">
              "Pharetra ut commodo dui at consequat, vitae imperdiet id quisque
              faucibus erat erat nulla a amet."
            </p>
            <div className="flex items-center gap-4">
              <Image
                src="/img/photo1.jpg?height=48&width=48"
                alt="Reviewer"
                width={38}
                height={38}
                className="rounded-full"
              />
              <span className="text-[#DEE3E1] text-md font-bold tracking-wide">
                MORGAN JONATHAN
              </span>
            </div>
          </div>

          <div className="border border-gray-600 p-10 bg-transparent">
            <div className="flex gap-1 text-emerald-400 mb-6">
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
            </div>
            <p className="text-[#DEE3E1] text-lg font-bold leading-relaxed mb-8">
              "Fermentum fermentum, quam mollis molestie blandit consectetur
              tincidunt platea ornare adipiscing aliquam eget mi dictum..."
            </p>
            <div className="flex items-center gap-4">
              <Image
                src="/img/photo2.jpg?height=48&width=48"
                alt="Reviewer"
                width={38}
                height={38}
                className="rounded-full"
              />
              <span className="text-[#DEE3E1] text-md font-bold tracking-wide">
                EMILY HUNT
              </span>
            </div>
          </div>

          <div className="border border-gray-600 p-10 bg-transparent">
            <div className="flex gap-1 text-emerald-400 mb-6">
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
            </div>
            <p className="text-[#DEE3E1] text-lg font-bold leading-relaxed mb-8">
              "Proin vestibulum ultrices semper arcu facilisis vitae!"
            </p>
            <div className="flex items-center gap-4">
              <Image
                src="/img/photo3.jpg?height=48&width=48"
                alt="Reviewer"
                width={38}
                height={38}
                className="rounded-full"
              />
              <span className="text-[#DEE3E1] font-bold text-lg tracking-wide">
                JULIE ROBINSON
              </span>
            </div>
          </div>

          <div className="border border-gray-600 p-10 bg-transparent">
            <div className="flex gap-1 text-emerald-400 mb-6">
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
            </div>
            <p className="text-[#DEE3E1] text-lg font-bold leading-relaxed mb-8">
              "Vitae sapien ut laoreet nibh mauris ultrices tristique aliquet
              eros id accumsan tellus neque sed pellentesque"
            </p>
            <div className="flex items-center gap-4">
              <Image
                src="/img/photo4.jpg?height=48&width=48"
                alt="Reviewer"
                width={38}
                height={38}
                className="rounded-full"
              />
              <span className="text-[#DEE3E1] font-bold text-md tracking-wide">
                JAMES BROOK
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

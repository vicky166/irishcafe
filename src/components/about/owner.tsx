import { Facebook, Instagram, Twitter } from "lucide-react";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Owner() {
  return (
    <div className="  text-white p-6 md:p-8 md:mt-32 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <div
            className={`text-emerald-500 text-xl md:text-2xl font-medium ${bebasNeue.className}`}
          >
            OWNER OF IRISH CAFE
          </div>

          <div className="flex items-center gap-6 mr-0 sm:mr-[480px] px-6 sm:px-8 md:px-12">
            <a
              href="#"
              className="flex items-center gap-2 hover:text-emerald-400"
            >
              <Instagram className="w-5 h-5" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-emerald-400"
            >
              <Twitter className="w-5 h-5" />
              <span className="hidden sm:inline">Twitter</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-emerald-400"
            >
              <Facebook className="w-5 h-5" />
              <span className="hidden sm:inline">Facebook</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <h1
              className={`text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none tracking-tighter ${bebasNeue.className}`}
            >
              SCOTT
              <br />
              O'NEAL
            </h1>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-gray-300 text-base md:text-lg lg:text-xl">
              Sit egestas auctor morbi morbi duis erat ultrices adipiscing id
              sed id pellentesque tristique sed risus faucibus aliquet lacus,
              sagittis, lectus nec blandit pretium urna sit dignissim senectus
              arcu curabitur vulputate congue at non aliquet aenean non massa
              egestas nunc, curabitur id leo malesuada commodo, ornare
              adipiscing mauris.
            </div>
            <div className="text-gray-300 text-base md:text-lg lg:text-xl">
              Neque felis cras nunc magna turpis enim facilisi orci sed id est
              mauris felis parturient accumsan sapien nunc nibh dignissim neque
              nec, molestie vel magna at et urna vulputate ut etiam in mattis
              est egestas penatibus vitae maecenas interdum sed arcu donec risus
              vestibulum aliquet auctor quam.
            </div>
          </div>
        </div>

        <div className="fixed top-8 right-8"></div>
      </div>
    </div>
  );
}

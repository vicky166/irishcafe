import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function About2() {
  return (
    <div className="relative md:mt-32 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className={`${bebasNeue.className} text-7xl leading-none`}>
              BEST IRISH PUB & BAR IN
              <br />
              FLORIDA
            </h2>
            <div className="space-y-6 text-[#DEE3E1]">
              <p>
                Vel vestibulum phasellus elit pellentesque etiam elementum
                dictum integer orci maecenas id metus aliquam, tincidunt sit
                varius quis justo tempus id amet fermentum cursus.
              </p>
              <p>
                Neque felis cras nunc magna turpis tincidunt enim facilisi orci
                sed id est mauris felis parturient accumsan sapien nunc nibh
                dignissim neque nec, molestie vel magna at et urna vulputate ut
                etiam in mattis est egestas penatibus vitae maecenas interdum
                sed arcu donec risus vestibulum aliquet auctor quam.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/img/image3.jpg"
              alt="Irish Pub Scene"
              className="w-full  h-auto rounded-lg"
            />
            <div className="absolute -top-4 -right-4 w-24 h-24">
              <div className="relative w-full h-full">
                <div className="flex-shrink-0 mt-8 lg:mt-0">
                  <div
                    className={`relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 transform rotate-0`}
                  >
                    <img
                      src="/pt.svg"
                      alt="SVG Icon"
                      className="w-full h-full object-contain mr-[50px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customize Button */}
      <div className="absolute top-8 right-8"></div>
    </div>
  );
}


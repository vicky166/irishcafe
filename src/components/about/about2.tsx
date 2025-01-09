import { Bebas_Neue } from "next/font/google";

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
            <div className="space-y-6  font-bold">
              <p>
                Vel vestibulum phasellus elit pellentesque etiam elementum<br></br>
                dictum integer orci maecenas id metus aliquam, tincidunt sit<br></br>
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

          {/* Image Section */}
          <div className="relative">
            <img
              src="/img/image3.jpg"
              alt="Irish Pub Scene"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute -top-6 -right-1 mr-20 w-40 h-40">
              <img
                src="/pt.svg"
                alt="Irish Pub Badge"
                className="w-full h-full "
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(47%) sepia(95%) saturate(401%) hue-rotate(116deg) brightness(100%) contrast(100%)",
                  transform: "rotate(25deg)", // Rotates the SVG 25 degrees
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

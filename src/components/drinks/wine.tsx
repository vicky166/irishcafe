import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Wine() {
  return (
    <div className="md:mt-32 text-white p-8">
      <div className="text-center mb-16">
        <h1
          className={`${bebasNeue.className} text-6xl md:text-7xl font-bold mb-6`}
        >
          WINE
        </h1>
        <p className="max-w-3xl mx-auto font-bold text-gray-300 mb-4">
          Varius convallis a felis ac enim amet sit enim habitasse viverra
          mauris adipiscing eget<br></br> enim tristique dui enim ornare nulla
        </p>
        <p className="text-sm text-gray-400 italic font-bold">
          Price do not include tax
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2
            className={`${bebasNeue.className} text-4xl md:text-5xl font-bold mb-8`}
          >
            RED WINE
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <img
                src="/img/wine1.jpg?height=120&width=120"
                alt="Chenin Blanc"
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3
                  className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                >
                  CHENIN BLANC - $14.25
                </h3>
                <p className="text-gray-300">
                  Nisl orci sodales bibendum hendrerit sit auctor pharetra risus
                  nunc maecenas elit, mi velit sodales urna. 2017.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <img
                src="/img/wine2.jpg?height=120&width=120"
                alt="Chenin Blanc"
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3
                  className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                >
                  CHARDONNAY - $12.40
                </h3>
                <p className="text-gray-300">
                  Nisl orci sodales bibendum hendrerit sit auctor pharetra risus
                  nunc maecenas elit, mi velit sodales urna. 2018.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <img
                src="/img/wine3.jpg?height=120&width=120"
                alt="Chenin Blanc"
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3
                  className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                >
                  THALVIN TANDEM - $18.25
                </h3>
                <p className="text-gray-300">
                  Nisl orci sodales bibendum hendrerit sit auctor pharetra risus
                  nunc maecenas elit, mi velit sodales urna. 2015.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2
            className={`${bebasNeue.className} text-4xl md:text-5xl font-bold mb-8`}
          >
            WHITE WINE
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <img
                src="/img/wine4.jpg?height=120&width=120"
                alt="Chenin Blanc"
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3
                  className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                >
                  PINOT NOIR - $24.50
                </h3>
                <p className="text-gray-300">
                  Nisl orci sodales bibendum hendrerit sit auctor pharetra risus
                  nunc maecenas elit, mi velit sodales urna. 2010.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <img
                src="/img/wine5.jpg?height=120&width=120"
                alt="Chenin Blanc"
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3
                  className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                >
                  BORDEAUX BLEND - $14.50
                </h3>
                <p className="text-gray-300">
                  Nisl orci sodales bibendum hendrerit sit auctor pharetra risus
                  nunc maecenas elit, mi velit sodales urna. 2016.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 mt-8">
              <h2
                className={`${bebasNeue.className} text-4xl md:text-5xl font-bold mb-8`}
              >
                ROSE WINE
              </h2>
              <div className="flex gap-6">
                <img
                  src="/img/wine6.jpg?height=120&width=120"
                  alt="Chenin Blanc"
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <h3
                    className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                  >
                    BERINGER DRY ROSÉ - $12.50
                  </h3>
                  <p className="text-gray-300">
                    Nisl orci sodales bibendum hendrerit sit auctor pharetra
                    risus nunc maecenas elit, mi velit sodales urna. 2016.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

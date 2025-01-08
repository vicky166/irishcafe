import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Cocktail() {
  return (
    <div className="md:mt-32 text-white p-8">
      <div className="text-center mb-16">
        <h1
          className={`${bebasNeue.className} text-6xl md:text-7xl font-bold mb-6`}
        >
          Cocktails
        </h1>
        <p className="max-w-3xl mx-auto font-bold text-gray-300 mb-4">
          Porta sit malesuada nisl venenatis convallis cras at sit enim, lacus
          dolor vel mattis amet<br></br> massa ornare in erat elementum
        </p>
        <p className="text-sm text-gray-400 italic font-bold">
          Price do not include tax
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <div className="space-y-8">
            <div className="flex gap-6">
              <img
                src="/img/coc1.jpg?height=120&width=120"
                alt="Black Winter Daquiri"
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3
                  className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                >
                  Black Winter Daquiri - $12.50
                </h3>
                <p className="text-gray-300">
                  Bacardi Gold / Blackcurrant Liqueur / Fresh Lime / Angostura
                  Bitters.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <img
                src="/img/coc3.jpg?height=120&width=120"
                alt="Old Fashioned"
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3
                  className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                >
                  Old Fashioned - $11.00
                </h3>
                <p className="text-gray-300">
                  Homemade Bourbon / Angostura Bitters / Simple syrup & Orange
                  zest
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <img
                src="/img/coc5.jpg?height=120&width=120"
                alt="Strawberry Rhubarb Margarita"
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3
                  className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                >
                  Strawberry Rhubarb Margarita - $10.25
                </h3>
                <p className="text-gray-300">
                  Tequila / Fresh Squeezed Lime Juice / Housemade Rhubarb Syrup
                  / Strawberry Purée / On the Rocks
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="space-y-8">
            <div className="flex gap-6">
              <img
                src="/img/coc2.jpg?height=120&width=120"
                alt="The Bee Sting"
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3
                  className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                >
                  The Bee Sting - $12.00
                </h3>
                <p className="text-gray-300">
                  Espolon / Lemon Juice / Jalapeno / Honey
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <img
                src="/img/coc4.jpg?height=120&width=120"
                alt="Jam Jar Vodka Soda Or Gin & Tonic"
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3
                  className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                >
                  Jam Jar Vodka Soda Or Gin &Amp; Tonic - $11.50
                </h3>
                <p className="text-gray-300">
                  Fresh Squeezed Lime Juice / Housemade Rhubarb Syrup / Soda
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex gap-6">
                <img
                  src="/img/coc6.jpg?height=120&width=120"
                  alt="Signature Bellini"
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <h3
                    className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                  >
                    Signature Bellini - $10.25
                  </h3>
                  <p className="text-gray-300">
                    Jamaican Rum / Red Wine / Peach Schnapps / Peach Purée /
                    Raspberry Purée
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

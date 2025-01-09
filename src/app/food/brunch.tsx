import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Brunch() {
  return (
    <div className="md:mt-32 text-white p-8">
      <div className="text-center mb-16">
        <h1
          className={`${bebasNeue.className} text-6xl md:text-7xl font-bold mb-6`}
        >
          Brunch
        </h1>
        <p className="max-w-3xl mx-auto font-bold text-gray-300 mb-4">
          Augue faucibus sit convallis faucibus tortor, lacus sit venenatis nibh
          eleifend sed tincidunt<br></br> faucibus id nibh faucibus ornare leo
          cum
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
                src="/img/brunch1.jpg?height=120&width=120"
                alt="Black Winter Daquiri"
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3
                  className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                >
                  Lamarca Prosecco Italy - $12.10
                </h3>
                <p className="text-gray-300">
                  Three Eggs / Canadian Cheddar & Mozzarella / Back Bacon / Red
                  Pepper / White & Green Onions / Crispy House Potatoes /
                  Toasted Sourdough
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
                  Hudsons Caesar - $6.40
                </h3>
                <p className="text-gray-300">
                  Vodka / Hudsons Sauce / Pickle / Maple Bacon Steak Spice Rim
                  zest
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <img
                src="/img/brunch5.jpg?height=120&width=120"
                alt="Strawberry Rhubarb Margarita"
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3
                  className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                >
                  Carrot Cake Pancakes - $14.75
                </h3>
                <p className="text-gray-300">
                  4 stack / Covered with Cream Cheese Icing & Blueberry Compote
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="space-y-8">
            <div className="flex gap-6">
              <img
                src="/img/brunch2.jpg?height=120&width=120"
                alt="The Bee Sting"
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3
                  className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                >
                  Mimosas - $4.20
                </h3>
                <p className="text-gray-300">
                  Choose your juice – Orange / Grapefruit / Pineapple /
                  Cranberry{" "}
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <img
                src="/img/brunch4.jpg?height=120&width=120"
                alt="Jam Jar Vodka Soda Or Gin & Tonic"
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3
                  className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                >
                  Steak & Eggs - $19.75
                </h3>
                <p className="text-gray-300">
                  7 oz. Certified Angus Beef® Sirloin / 2 Sunny Side-Up Egg /
                  Caramelized Onions & Red Peppers / Served with Crispy House
                  Potatoes / Chimichurri Sauce{" "}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex gap-6">
                <img
                  src="/img/brunch6.jpg?height=120&width=120"
                  alt="Signature Bellini"
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <h3
                    className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                  >
                    French Toast Bites - $10.25
                  </h3>
                  <p className="text-gray-300">
                    French Bread / Cinnamon Sugar / Served with Maple Syrup /
                    Thick Cut Bacon
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

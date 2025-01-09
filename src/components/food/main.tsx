import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Main1() {
  return (
    <div className="md:mt-32 text-white p-8">
      <div className="text-center mb-16">
        <h1
          className={`${bebasNeue.className} text-6xl md:text-7xl font-bold mb-6`}
        >
Mains        </h1>
        <p className="max-w-3xl mx-auto font-bold text-gray-300 mb-4">
        Augue faucibus sit convallis faucibus tortor, lacus sit venenatis nibh eleifend sed tincidunt<br></br> faucibus id nibh faucibus ornare leo cum
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
                src="/img/main1.jpg?height=120&width=120"
                alt="Black Winter Daquiri"
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3
                  className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                >
Prairie Top Sirloin - $26.50                </h3>
                <p className="text-gray-300">
                7 oz. Certified Angus Beef® Top Sirloin / Cheddar Mash / Seasonal Veggies / Sautéed Garlic Mushrooms


                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <img
                src="/img/main3.jpg?height=120&width=120"
                alt="Old Fashioned"
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3
                  className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                >

Perogies & Sausages - $16.00                </h3>
                <p className="text-gray-300">
                Three Cheese Perogies / Lumberjack Lager Caramelized Onions / Sausage / Crispy Bacon / Sour Cream / Green Onions
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <img
                src="/img/main5.jpg?height=120&width=120"
                alt="Strawberry Rhubarb Margarita"
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3
                  className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                >
Twisted Chicken Tenders - $17.00                </h3>
                <p className="text-gray-300">
                Pretzel-Crusted Chicken Strips / Maple Whisky BBQ Sauce/ Housemade Honey Mustard / Served with Fries                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="space-y-8">
            <div className="flex gap-6">
              <img
                src="/img/main2.jpg?height=120&width=120"
                alt="The Bee Sting"
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3
                  className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                >
Bacon Grilled Cheese And Tomato Bisque Soup - $17.25                </h3>
                <p className="text-gray-300">
                Canadian Cheddar and Mozzarella / Cheese Whiz / Thick Cut Bacon / Mayonnaise / Sourdough Bread / Served with Roasted Tomato Soup
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <img
                src="/img/main4.jpg?height=120&width=120"
                alt="Jam Jar Vodka Soda Or Gin & Tonic"
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3
                  className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                >
Bale House Fish & Chips - $18.50                </h3>
                <p className="text-gray-300">
                Bale House Ale Battered MSC Certified Haddock / Served With Fries / Coleslaw / Tartar Sauce
                </p>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
}

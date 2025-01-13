import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Snacks() {
  return (
    <div className="md:mt-32 text-white p-8">
      <div className="text-center mb-16">
        <h1
          className={`${bebasNeue.className} text-6xl md:text-7xl font-bold mb-6`}
        >
          Snacks
        </h1>
        <p className="max-w-3xl mx-auto font-bold text-gray-300 mb-4">
          Augue faucibus sit convallis faucibus tortor, lacus sit venenatis nibh
          eleifend sed tincidunt faucibus id nibh faucibus ornare leo cum
        </p>
        <p className="text-sm text-gray-400 italic font-bold">
          Price does not include tax
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <div className="space-y-8">
            <div className="flex gap-6">
              <img
                src="/img/snack1.jpg"
                alt="Hummus"
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3
                  className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                >
                  Hummus - $8.50
                </h3>
                <p className="text-gray-300">
                  Traditional Hummus / Celery / Cucumbers / Red Peppers / Naan
                  Bread
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <img
                src="/img/snack3.jpg"
                alt="Pre-game Frickles"
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3
                  className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                >
                  Pre-game Frickles - $6.25
                </h3>
                <p className="text-gray-300">
                  Panko Breaded Deep-Fried Dill Pickle Spears / Served with
                  Sweet Garlic Aioli
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <img
                src="/img/snack5.jpg"
                alt="Gold ‘N Salty Pretzel Bites"
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3
                  className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                >
                  Gold ‘N Salty Pretzel Bites - $8.25
                </h3>
                <p className="text-gray-300">
                  Served with Jalapeño Beer Cheese
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="space-y-8">
            <div className="flex gap-6">
              <img
                src="/img/snack2.jpg"
                alt="Hogtown Baked Riblets"
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3
                  className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                >
                  Hogtown Baked Riblets - $9.50
                </h3>
                <p className="text-gray-300">
                  Marinated / Dry Rubbed Pork Riblets / Served with Maple Whisky
                  BBQ Sauce
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <img
                src="/img/snack4.jpg"
                alt="Onion Rings"
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3
                  className={`${bebasNeue.className} text-xl md:text-2xl font-bold mb-2`}
                >
                  Onion Rings - $8.50
                </h3>
                <p className="text-gray-300">
                  Panko Crusted / Parmesan Cheese Flakes / Served with Jalapeño
                  Beer Cheese
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

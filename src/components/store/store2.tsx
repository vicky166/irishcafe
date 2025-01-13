import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Store2() {
  return (
    <div className="mt-32 text-white p-8">
      <div className="text-center mb-16">
        <h1 className={`${bebasNeue.className} text-6xl font-bold mb-6`}>
          IRISH CAFE STORE
        </h1>
        <p className="max-w-3xl mx-auto text-gray-300">
          Aliquet faucibus aliquet fermentum ullamcorper pretium mauris, sed
          dictum donec feugiat ut vivamus quis gravida cras.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-left">
          <div className="aspect-square">
            <img
              src="/img/store1.jpg?height=400&width=400"
              alt="The Irish Cafe Beer Mug"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 space-y-2">
            <h2 className={`${bebasNeue.className} text-2xl font-bold`}>
              THE IRISH CAFE BEER MUG
            </h2>
            <p className="text-xl">${"12.00"}</p>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-md transition-colors">
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="text-left">
          <div className="aspect-square">
            <img
              src="/img/store2.jpg?height=400&width=400"
              alt="The Irish Cafe Woman T-Shirt"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 space-y-2">
            <h2 className={`${bebasNeue.className} text-2xl font-bold`}>
              THE IRISH CAFE WOMAN T-SHIRT
            </h2>
            <p className="text-xl">${"20.00"}</p>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-md transition-colors">
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="text-left">
          <div className="aspect-square">
            <img
              src="/img/store3.jpg?height=400&width=400"
              alt="The Irish Cafe Hoodie"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 space-y-2">
            <h2 className={`${bebasNeue.className} text-2xl font-bold`}>
              THE IRISH CAFE HOODIE
            </h2>
            <p className="text-xl">${"38.50"}</p>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-md transition-colors">
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="text-left">
          <div className="aspect-square">
            <img
              src="/img/store4.jpg?height=400&width=400"
              alt="The Irish Cafe Man T-Shirt"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 space-y-2">
            <h2 className={`${bebasNeue.className} text-2xl font-bold`}>
              The Irish Cafe Man T-shirt
            </h2>
            <p className="text-xl">${"22.50"}</p>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-md transition-colors">
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="text-left">
          <div className="aspect-square">
            <img
              src="/img/store5.jpg?height=400&width=400"
              alt="The Irish Cafe Beanie"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 space-y-2">
            <h2 className={`${bebasNeue.className} text-2xl font-bold`}>
              The Irish Cafe Beanie
            </h2>
            <p className="text-xl">${"16.50"}</p>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-md transition-colors">
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="text-left">
          <div className="aspect-square">
            <img
              src="/img/store6.jpg?height=400&width=400"
              alt="The Irish Cafe Cap"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 space-y-2">
            <h2 className={`${bebasNeue.className} text-2xl font-bold`}>
              The Irish Cafe Cap
            </h2>
            <p className="text-xl">${"15.00"}</p>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-md transition-colors">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

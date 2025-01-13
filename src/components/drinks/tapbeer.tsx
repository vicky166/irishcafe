import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Beer() {
  const beers = [
    {
      name: "LUMBERJACK LAGER-$6.90",
      description:
        "Nisl orci sodales bibendum hendrerit sit auctor pharetra risus nunc maecenas elit, mi velit sodales urna.",
      image: "/img/beer1.jpg?height=200&width=200",
    },
    {
      name: "CHERRY CHEESEQUAKER DEVICES-%6.50",
      description:
        "Malesuada leo id at integer dolor congue donec est pharetra commodo quisque suscipit arcu.",
      image: "/img/beer2.jpg?height=200&width=200",
    },
    {
      name: "THE CAPTAIN'S FLEET-$7.20",
      description:
        "Consectetur bibendum leo pellentesque elit lectus faucibus pellentesque commodo.",
      image: "/img/beer3.jpg?height=200&width=200",
    },
    {
      name: "TWELVE PERCENT HOUSE LAGER-$6.00",
      description:
        "Sit sit augue nulla auctor nulla sed condimentum euismod quam malesuada sagittis nec feugiat ullamcorper duis",
      image: "/img/beer4.jpg?height=200&width=200",
    },
    {
      name: "STATE OF THE ART SERIES: DOUBLE WHEAT STOUT-$7.58",
      description: "Cum etiam non phasellus in platea arcu duis mattis.",
      image: "/img/beer5.jpg?height=200&width=200",
    },
  ];

  return (
    <div className="relative   text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className={`${bebasNeue.className} text-7xl font-bold`}>
            TAP BEER
          </h2>
          <p className="text-gray-300 max-w-3xl text-xl mx-auto">
            Augue faucibus sit convallis faucibus tortor, lacus sit venenatis
            nibh eleifend <br></br>sed tincidunt faucibus id nibh faucibus
            ornare leo cum
          </p>
          <p className="text-sm text-gray-400 italic">
            Price do not include tax
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {beers.map((beer, index) => (
            <div key={index} className="flex gap-6">
              <img
                src={beer.image}
                alt={beer.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`${bebasNeue.className} text-2xl font-bold`}>
                    {beer.name}
                  </h3>
                  <span className="text-xl font-bold">{}</span>
                </div>
                <p className="text-gray-400">{beer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-8 right-8"></div>
    </div>
  );
}

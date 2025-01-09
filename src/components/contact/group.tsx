import Image from "next/image";

export default function Group() {
  const images = [
    {
      src: "/img/group1.jpg?height=600&width=800",
      alt: "Friends enjoying drinks at bar",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/img/group2.jpg?height=600&width=800",
      alt: "Bar interior with bottle display",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/img/group3.jpg?height=600&width=800",
      alt: "Bartender working",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/img/group4.jpg?height=600&width=800",
      alt: "Bar counter scene",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/img/group5.jpg?height=600&width=800",
      alt: "Kitchen staff working",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/img/group6.jpg?height=600&width=800",
      alt: "Pool table in bar",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/img/group7.jpg?height=600&width=800",
      alt: "Outdoor bar seating",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/img/group8.jpg?height=600&width=800",
      alt: "Liquor bottle display",
      className: "col-span-1 row-span-1",
    },
  ];

  return (
    <section className="mt-12">
      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative aspect-[4/3] ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 700px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

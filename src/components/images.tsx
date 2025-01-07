import Image from "next/image"

export default function Images() {
  return (
    <div className="w-full overflow-hidden bg-zinc-900 mt-32">
      <div className="flex flex-col md:flex-row gap-16"> 
        <div className="relative w-full md:w-[850px] h-[300px] md:h-[500px]">
          <Image
            src="/img/image3.jpg"
            alt="Nightclub scene with red neon lighting"
            fill
            className="object-cover transition-transform "
            priority
          />
        </div>

        <div className="relative w-full md:w-1/5 h-[300px] md:h-[480px]">
          <Image
            src="/img/image4.jpg"
            alt="Sports fans watching a game"
            fill
            className="object-cover transition-transform "
          />
        </div>

        <div className="relative w-full md:w-1/5 h-[300px] md:h-[480px]">
          <Image
            src="/img/image5.jpg"
            alt="Friends enjoying drinks at a pub"
            fill
            className="object-cover transition-transform "
          />
        </div>
      </div>
    </div>
  )
}

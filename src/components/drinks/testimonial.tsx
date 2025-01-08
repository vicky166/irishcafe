import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <div className="relative md:mt-32 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-6xl md:text-8xl">
          <Quote />
        </div>

        <blockquote className="text-xl md:text-2xl font-bold mb-8">
          "Proin vestibulum ultrices semper arcu facilisis vitae!"
        </blockquote>

        <div className="flex items-center justify-center mb-4">
          <img
            src="/img/julia.jpg?height=64&width=64"
            alt="Julie Robinson"
            className="w-12 h-12 md:w-8 md:h-8 rounded-full mr-4 -ml-4"
          />
          <h3 className="text-sm md:text-md font-medium tracking-wider mb-2">
            JULIE ROBINSON
          </h3>
        </div>

        <div className="flex gap-1 justify-center mt-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 md:w-5 md:h-5 text-[#00ff66]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      <div className="absolute top-8 right-8"></div>
    </div>
  );
}

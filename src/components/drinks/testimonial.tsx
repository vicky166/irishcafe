import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <div className="relative md:mt-32 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-6xl md:text-8xl">
        <svg 
      width="24" 
      height="24" 
      viewBox="0 0 48 36" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M0 36V24.456C0 19.608 0.664 15.416 1.992 11.88C3.32 8.28 5.256 5.208 7.8 2.664C10.408 0.055999 13.544 -1.14441e-05 17.208 -1.14441e-05L18.984 4.152C16.248 4.152 13.928 4.856 12.024 6.264C10.184 7.608 8.76 9.384 7.752 11.592C6.808 13.8 6.336 16.2 6.336 18.792H19.272V36H0ZM28.728 36V24.456C28.728 19.608 29.392 15.416 30.72 11.88C32.048 8.28 33.984 5.208 36.528 2.664C39.136 0.055999 42.272 -1.14441e-05 45.936 -1.14441e-05L47.712 4.152C44.976 4.152 42.656 4.856 40.752 6.264C38.912 7.608 37.488 9.384 36.48 11.592C35.536 13.8 35.064 16.2 35.064 18.792H48V36H28.728Z" 
        fill="white"
      />
    </svg>        </div>

        <blockquote className="text-xl md:text-2xl font-bold mb-8">
        &quot;Proin vestibulum ultrices semper arcu facilisis vitae!&quot;
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

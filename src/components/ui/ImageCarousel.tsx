import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
};

export default function ImageCarousel({ images }: Props) {
  const [index, setIndex] = useState(0);

  const total = images.length;

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        relative overflow-hidden rounded-2xl shadow-lg
        h-[310px] sm:h-[380px] md:h-[450px]
        w-full max-w-[1000px] mx-auto
        bg-white
      "
    >
      {/* Slides */}
      <motion.div
        className="flex h-full"
        animate={{ x: `-${index * 100}%` }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-full h-full flex-shrink-0 object-cover object-[60%_30%] rounded-xl"
            alt=""
          />
        ))}
      </motion.div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="
          absolute left-3 top-1/2 -translate-y-1/2
          bg-black/50 hover:bg-black/70
          text-white p-2 rounded-full
          transition
        "
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="
          absolute right-3 top-1/2 -translate-y-1/2
          bg-black/50 hover:bg-black/70
          text-white p-2 rounded-full
          transition
        "
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

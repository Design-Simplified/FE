"use client";
import { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import NextImage from "@/components/NextImage";
import Button from "@/components/buttons/Button";

const images = ["/ContentsHub/swapImage.png", "/ContentsHub/swapImage.png"];

export default function SwappableImage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Fungsi untuk berpindah gambar manual
  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // Gambar otomatis berganti setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Handle swipe gesture
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe kiri (next image)
      nextImage();
    } else if (touchEnd - touchStart > 50) {
      // Swipe kanan (prev image)
      prevImage();
    }
  };

  return (
    <div
      className="relative w-full h-full mx-auto overflow-hidden grow rounded-lg xl:min-w-[927px] min-h-[100px] min-[300px]:min-h-[150px] min-[390px]:min-h-[210px] min-[500px]:min-h-[240px] xl:min-h-[496px] lg:min-h-[448px] md:min-h-[380px] sm:min-h-[210px]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: direction * 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 100 }}
          transition={{ duration: 0.3 }}
          className="absolute w-full h-full top-0 left-0"
        >
          <NextImage
            src={images[currentIndex]}
            className="w-full h-full rounded-lg md:w-[140%] lg:w-[120%] xl:w-full"
            imgClassName="object-cover w-full"
            alt="Banner Image"
            width={368}
            height={213}
            loading="lazy"
          />
        </motion.div>
      </AnimatePresence>

      {/* Tombol Navigasi (Desktop) */}
      <Button
        variant="green"
        onClick={prevImage}
        className="hidden sm:flex absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full"
      >
        <MdKeyboardArrowLeft color="white" size={35} />
      </Button>

      <Button
        variant="green"
        onClick={nextImage}
        className="hidden sm:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full"
      >
        <MdKeyboardArrowRight color="white" size={35} />
      </Button>

      {/* Pagination Dots */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            } transition-colors duration-300`}
          />
        ))}
      </div>
    </div>
  );
}

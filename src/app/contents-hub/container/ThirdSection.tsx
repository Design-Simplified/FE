"use client";
import { useState, useEffect } from "react";
import Button from "@/components/buttons/Button";
import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";
import { IoOptionsSharp } from "react-icons/io5";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/Paginations";

const Images = [
  {
    image: "/ContentsHub/sampleImage1.png",
    title: "Sample Image 1",
    tier: "Free",
  },
  {
    image: "/ContentsHub/sampleImage2.png",
    title: "Sample Image 2",
    tier: "Exclusive",
  },
  {
    image: "/ContentsHub/sampleImage3.png",
    title: "Sample Image 3",
    tier: "Premium",
  },
  {
    image: "/ContentsHub/sampleImage4.png",
    title: "Sample Image 4",
    tier: "Bundle",
  },
];

export default function ThirdSection() {
  const [imagesPerPage, setImagesPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const updateImagesPerPage = () => {
      if (window.innerWidth >= 1024) {
        setImagesPerPage(32);
      } else if (window.innerWidth >= 640) {
        setImagesPerPage(24);
      } else {
        setImagesPerPage(16);
      }
    };

    updateImagesPerPage();
    window.addEventListener("resize", updateImagesPerPage);
    return () => window.removeEventListener("resize", updateImagesPerPage);
  }, []);

  const duplicatedImages = Array.from(
    { length: (imagesPerPage * 2) / Images.length },
    () => Images,
  ).flat();
  const totalPages = Math.ceil(duplicatedImages.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const paginatedImages = duplicatedImages.slice(
    startIndex,
    startIndex + imagesPerPage,
  );

  return (
    <section className="w-full relative background-gray px-3 xl:px-8 lg:px-6 md:px-4 pb-6 xl:pb-9 lg:pb-8 md:pb-7">
      <div className="w-full flex flex-col lg:gap-20 md:gap-16 sm:gap-12 xl:gap-24 gap-8 pt-8 xl:pt-16 lg:pt-14 md:pt-12 sm:pt-10 px-3.5 xl:px-7 lg:px-6 md:px-5 sm:px-4 bg-white">
        <div className="w-full flex flex-row gap-4 justify-between items-center">
          <Typography
            variant="h1"
            weight="semibold"
            className="text-sm xl:text-4xl lg:text-2xl md:text-lg sm:text-base"
          >
            Exclusively Chosen For You
          </Typography>
          <Button variant="grey" type="button" className="p-2 rounded-lg">
            <IoOptionsSharp
              color="#525B44"
              size={19}
              className="xl:size-8 lg:size-7 md:size-6 sm:size-5"
              strokeWidth={2}
            />
          </Button>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5">
          {paginatedImages.map((image, index) => (
            <div
              key={index}
              className="w-full relative h-48 xl:h-[460px] lg:h-[400px] md:h-[340px] sm:h-[280px] min-[500px]:h-[250px]"
            >
              {image.tier === "Exclusive" && (
                <NextImage
                  width={160}
                  height={172}
                  src="/ContentsHub/ExclusiveBadge.png"
                  alt="Exclusive Badge"
                  className="absolute -top-7 -left-9 z-20"
                />
              )}
              {image.tier === "Free" && (
                <NextImage
                  width={71}
                  height={45}
                  src="/ContentsHub/FreeBadge.png"
                  alt="Free Badge"
                  className="absolute top-3 -left-2.5 z-20"
                />
              )}
              {image.tier === "Bundle" && (
                <NextImage
                  width={160}
                  height={172}
                  src="/ContentsHub/BundleBadge.png"
                  alt="Bundle Badge"
                  className="absolute -top-[37px] -left-[30px] z-20"
                />
              )}
              <NextImage
                width={160}
                height={195}
                src={image.image}
                alt={image.title}
                className="w-full h-full overflow-hidden rounded-lg"
                imgClassName="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <Pagination className="mt-6 mb-16 xl:mb-40 lg:mb-32 md:mb-28 sm:mb-24">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <Button
                  variant={i + 1 === currentPage ? "green" : "white"}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </Button>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import Image from "next/image";

interface ImageFrameProps {
  imageSrc: string;
  alt: string;
  caption?: string;
}

export default function ImageFrame({ imageSrc, alt, caption }: ImageFrameProps) {
  return (
    <section className="py-24 bg-[#FDF8E8] flex justify-center px-4">
      <div className="bg-[#F26645] rounded-2xl shadow-lg p-10 sm:p-12 md:p-16 lg:p-20 xl:p-24 max-w-md sm:max-w-xl md:max-w-4xl lg:max-w-5xl w-full flex flex-col items-center">
        {/* Image */}
        <Image
          src={imageSrc}
          alt={alt}
          width={1000}
          height={1000}
          className="rounded-xl shadow-md object-cover w-full h-auto"
        />

        {/* Optional caption */}
        {caption && (
          <p className="mt-6 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-[#861F41]">
            {caption}
          </p>
        )}
      </div>
    </section>
  );
}
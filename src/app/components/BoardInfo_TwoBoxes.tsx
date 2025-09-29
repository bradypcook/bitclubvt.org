"use client";
import React, { ReactNode, useState } from "react";
import Image from "next/image";

interface ExecMember {
  name: string;
  position: string;
  imageSrc: string;
  bio: ReactNode;
  degree: string;
  linkedin?: string;
}

interface Box {
  title: string;
  members: ExecMember[];
}

interface TwoBoxesProps {
  boxes: Box[]; // Instead of one "title + members", now you pass multiple boxes
}

export default function TwoBoxes({ boxes }: TwoBoxesProps) {
  const [selected, setSelected] = useState<ExecMember | null>(null);

  return (
    <section className="py-20 bg-[#FdF8E8] flex justify-center px-4">
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl lg:items-start">
        {boxes.map((box, i) => (
          <div
            key={i}
            className="bg-[#F26645] rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 flex-1 min-w-0"
          >
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10 text-[#861F41]">
              {box.title}
            </h2>

            {/* Member Cards */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
              {box.members.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col items-center min-w-[240px] max-w-[280px] flex-grow basis-[240px]"
                >
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover rounded-full border-4 border-[#F26645] cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => setSelected(member)}
                  />
                  <h4 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-[#861F41] text-center">
                    {member.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#F26645] text-center">
                    {member.position}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div
            className="bg-white rounded-2xl shadow-xl max-w-3xl w-full flex flex-col md:flex-row p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Large Image */}
            <div className="flex-shrink-0 md:mr-6 mb-4 md:mb-0">
              <Image
                src={selected.imageSrc}
                alt={selected.name}
                width={300}
                height={300}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Bio */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#861F41]">
                {selected.name}
              </h3>
              <p className="text-[#F26645] font-medium mb-4">{selected.degree}</p>
              <p className="text-gray-700 mb-4">{selected.bio}</p>
              {selected.linkedin && (
                <a
                  href={selected.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#F26645] text-white px-4 py-2 rounded-lg hover:bg-[#d94c30] transition"
                >
                  View LinkedIn
                </a>
              )}
            </div>

            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl font-bold"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
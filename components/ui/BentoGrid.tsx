"use client";

import { cn } from "@/utils/cn";
import Image from "next/image"; // Import Next.js Image component

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto",
        // Adjust the auto-rows for vertical arrangement
        "auto-rows-[20rem] sm:auto-rows-[24rem] md:auto-rows-[28rem] overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  img,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-3 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col w-full",
        className
      )}
    >
      {header}
      {img && (
        <div className="relative w-full h-[22rem] overflow-hidden rounded-lg mb-4">
          {" "}
          {/* Set a fixed height for visibility */}
          {/* Use Next.js Image component */}
          <Image
            src={img} // Ensure images are in the public folder or adjust path as needed
            alt={typeof title === "string" ? title : "Bento item"} // Fallback alt text
            layout="fill" // Cover the parent div
            objectFit="cover" // Maintain aspect ratio and cover the area
          />
          {/* Overlay content (icon, title, description) */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 mt-48">
            {icon && <div className="text-white mb-2">{icon}</div>}
            {title && (
              <div className="text-lg font-bold text-white mb-1">{title}</div>
            )}
            {description && (
              <div className="text-sm font-normal text-white">
                {description}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

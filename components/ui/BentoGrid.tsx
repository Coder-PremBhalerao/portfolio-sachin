"use client";

import { cn } from "@/utils/cn";

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
        <div className="relative w-full h-50 overflow-hidden rounded-lg mb-4">
          {/* Image */}
          <img
            src={img}
            alt={title}
            className={cn(
              "w-full h-full object-cover",
              // For mobile view, increase height for the first and second items
              (title === "The Power of Communication" ||
                title === "Passionate Developer") &&
                "h-[22rem] sm:h-[24rem]"
            )}
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

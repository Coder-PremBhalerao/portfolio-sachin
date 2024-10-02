"use client";

import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { GlobeDemo } from "./ui/GridGlobe";
import { BackgroundGradientAnimation } from "./ui/Gradientbg";
import Lottie from "react-lottie";

import animationData from "@/data/confetti.json";
import MagicButton from "./ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 h-[22rem] sm:h-[45rem] md:h-[30rem]"></div>
);
const items = [
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    img: "/b1.svg",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Passionate Developer",
    description: "Join the quest for understanding and enlightenment.",
    img: "/b5.svg",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Background Gradient Animation with Lottie and MagicButton inside */}
        <BackgroundGradientAnimation className="absolute inset-0 z-0 flex items-center justify-center text-white font-bold">
          <div className="flex flex-col items-center justify-center z-10 mb-32">
            {/* Lottie Animation */}
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={100}
              width={100}
            />

            {/* Magic Button */}
            <MagicButton
              title="Copy my email"
              icon={<IoCopyOutline />}
              position="left"
              otherClasses="!bg-[#161a31]"
              handleClick={() => {
                navigator.clipboard.writeText("bhaleraoprem198@gmail.com");
                alert("Email copied!");
              }}
            />
          </div>
        </BackgroundGradientAnimation>
      </div>
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <GlobeDemo />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

const Whychoose = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("bhaleraoprem198@gmail.com");
    setCopied(true);
  };

  return (
    <BentoGrid className="max-w-6xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          img={item.img}
          className={i === 1 || i === 2 ? "md:col-span-1" : "md:col-span-2"}
        />
      ))}
    </BentoGrid>
  );
};

export default Whychoose;

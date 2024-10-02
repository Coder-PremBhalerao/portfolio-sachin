"use client";

import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../Data/index"; // Import styles, you can add or adjust accordingly.
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./hoc/index.js";

// Dummy services data for 4 cards
const services = [
  { title: "Quality Assurance Engineer", img: "./web.png" },
  { title: "Embeded Device", img: "./mobile.png" },
  { title: "Web and Mobile Applications", img: "./backend.png" },
  { title: "Cloud Services", img: "./creator.png" },
];

const ServiceCard = ({ index, title, img }) => {
  // Define different shadow colors for each card
  const shadows = [
    "shadow-[0_20px_23px_rgba(0,0,255,0.5)]", // Red shadow
    "shadow-[0_20px_23px_rgba(0,0,255,0.5)]", // Green shadow
    "shadow-[0_20px_23px_rgba(0,0,255,0.5)]", // Blue shadow
    "shadow-[0_20px_23px_rgba(0,0,255,0.5)]", // Yellow shadow
  ];

  return (
    <Tilt className="lg:w-[200px] sm:w-[250px] w-full" id="about">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className={`w-full p-[1px] rounded-[20px] ${
          shadows[index % shadows.length]
        }`} // Use shadow from the array
        style={{
          background: "linear-gradient(to right, #caf0f8, #caf0f8)", // 1px gradient border
        }}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="rounded-[20px] py-5 px-12 min-h-[240px] flex justify-evenly items-center flex-col"
          style={{
            backgroundColor: "#03002e", // Navy blue background
          }}
        >
          <img src={img} alt={title} className="w-16 h-16 object-contain" />

          <h3 className="text-white text-[17px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Overview = () => {
  return (
    <>
      <motion.div className="mt-14" variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-400 text-[17px] max-w-2xl leading-[30px] text-justify"
      >
        over 10 years of experience in software testing, I am a Senior QA
        Engineer at Microsoft, where I work on the Supervisor module for an
        AI-based chatbot application. I am certified in Microsoft Azure
        Fundamentals, ISTQB Foundation Level, and TOSCA Automation Specialist
        Level 1 and 2. I have extensive knowledge and skills in various testing
        tools and technologies, such as Playwright, Cypress, Selenium, Azure,
        Robot framework, Java, JavaScript, and TypeScript. I have led and
        coordinated testing teams and activities different domains, such as
        healthcare, cloud services, embedded devices, web and mobile
        applications.
      </motion.p>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-6 lg:mr-60">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Overview, "overview");

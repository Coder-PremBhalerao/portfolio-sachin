"use client";

import { experiences } from "@/Data";
import { motion } from "framer-motion";
import React from "react";

const Experience = () => {
  return (
    <div>
      <motion.div className="mt-20 text-center">
        <p className="section-sub-text text-sm font-semibold ">
          What I have done so far
        </p>
        <h2 className="section-head-text text-6xl font-bold">
          Work <span className="text-purple">Experience</span>
        </h2>
      </motion.div>

      <div className="timeline" id="experience">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`container ${
              index % 2 === 0 ? "left-container" : "right-container"
            }`}
          >
            <img src={experience.icon} alt={experience.company_name} />
            <div className="text-box">
              <h1 className="text-white text-2xl font-bold">
                {experience.title}
              </h1>
              <h2>{experience.company_name}</h2>
              <small>{experience.date}</small>
              <div className="text-justify">
                {experience.points.map((point, pointIndex) => (
                  <p key={pointIndex}>{point}</p>
                ))}
              </div>
              <span
                className={`${
                  index % 2 === 0
                    ? "left-container-arrow"
                    : "right-container-arrow"
                }`}
              ></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

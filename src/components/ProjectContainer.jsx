import React from "react";
import TagContainer from "./TagContainer";
import { motion } from "framer-motion";
import { TextFade } from "./animation/TextFade";

function ProjectContainer({tags, src,title ,description, site, github, ascent, alternate = false}) {
  return (
    <div className="relative flex items-center">
      <div className="bg-gradient-to-r opacity-20 from-[#8847b4] via-[#43b0ff] to-[#d1f310] blur-[292.40px] absolute w-full h-full lg:h-[433px] md:blur-[80px] lg:blur-[108.20px]"></div>
      <div className={`my-10 lg:my-0 relative flex flex-col gap-10 lg:gap-20 ${alternate ? "lg:flex-row-reverse" : "lg:flex-row"} items-center w-full h-full justify-between z-10`}>
        <div className="h-full w-[110%] md:w-[100%] lg:w-[50%]">
          <img
            src={src}
            alt="this is a img"
            className="lg:h-[368px] lg:w-full border-8 border-white rounded-3xl bg-white object-cover object-center"
          />
        </div>

        <div className="flex gap-5 md:gap-10 lg:gap-0 flex-col items-center lg:items-start justify-between text-start lg:h-[368px] lg:py-5">
          <TextFade className="flex items-center gap-3">
            {tags.map((tag, index) => (
                <div key={index}>
                    <TagContainer text={tag} />
                </div>
            ))}
          </TextFade>
          <div className="space-y-2 text-center lg:text-start">
            <div className="text-2xl md:text-4xl">{title}</div>
            <div className="text-lg md:text-2xl text-pgray">
              {description}
            </div>
          </div>
          <div className="flex items-center text-base md:text-xl lg:text-2xl text-white gap-4 lg:gap-8">
            <motion.a
              whileHover={{ background: "#0066ff"}}
              whileTap={{ scale: 0.90 }}
              transition={{ type: "spring"}}
              href={site}
              className="lg:w-[145px] text-center px-5 py-1 lg:py-2 rounded-md bg-dp"
              target="_blank"
            >
              Explore
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectContainer;

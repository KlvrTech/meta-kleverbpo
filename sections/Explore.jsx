"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { exploreWorlds } from "../constants";
import { staggerContainer } from "../utils/motion";
import { ExploreCard, TitleText, TypingText } from "../components";
import Cards from "../components/Cards";

const Explore = () => {
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Services" textStyles="text-center" />
        <TitleText
          title={<>Here is what we can do for your business to grow</>}
          textStyles="text-center"
        />
      </motion.div>
      <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
        <Cards />
      </div>
    </section>
  );
};

export default Explore;

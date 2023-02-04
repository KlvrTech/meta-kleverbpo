"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { startingFeatures } from "../constants";
import { StartSteps, TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import Features from "../components/Features";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <div className="flex flex-col">
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center items-center flex-col"
        >
          <TypingText title="| Skill Showcase" />
          <TitleText
            title={
              <>We help our employees develop these life and business skills.</>
            }
          />
          <Features />
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default GetStarted;

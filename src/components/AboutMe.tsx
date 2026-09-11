import{ motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import AboutText from "./AboutText"; 

function AboutMe() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0,1], [250,0]);
  const scale = useTransform(scrollYProgress, [0,1], [1.1, 1]);
  
  return (
    <section id="aboutme"
    ref={ref}
    className="relative h-[150vh]"
    >
      <motion.h1
      style={{y, scale}}
      className="top-8 z-10 mt-10 text-center font-[Cormorant_Garamond] text-5xl font-bold">
        About Me
      </motion.h1>

      <AboutText />
    </section>
  );
}

export default AboutMe;
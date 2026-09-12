import{ motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import AboutText from "./AboutText"; 

function AboutMe() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  //Move About Me from lower position to the top
  const y = useTransform(scrollYProgress, [0, 0.5], [500, 0]);

  //Slightly reduce its size while moving
  const scale = useTransform(scrollYProgress, [0, 0.35], [1.1, 1]);
  
  return (
    <section 
    id="aboutme"
    ref={ref}
    className="relative h-[200vh]"
    >
      {/* This is the position where the heading will stay */}
    <div className="sticky top-8 z-20">
      <motion.h1
      style={{y, scale}}
      className="text-center font-[Cormorant_Garamond] text-5xl font-bold">
        About Me
      </motion.h1>
    </div>

      <AboutText />
    </section>
  );
}

export default AboutMe;
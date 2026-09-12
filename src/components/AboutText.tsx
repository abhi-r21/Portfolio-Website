import { motion, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";

interface AboutTextProps {
  scrollYProgress: MotionValue<number>;
}

function AboutText({scrollYProgress}: AboutTextProps) {

  //Text appears
  const opacity = useTransform(
    scrollYProgress, [0.2, 0.35, 0.5, 0.65], [ 0, 1, 1, 0]
  );
  
  //Blur only while disappearing
  const blur = useTransform(
    scrollYProgress, [0.5, 0.65], [0, 10]
  );

  const filter = useTransform(
    blur, (value) => `blur(${value}px)`
  );


  return (
    <div className="sticky top-0 flex h-screen items-center justify-center px-6">
      <motion.p 
      style = {{
         opacity,
         filter
        }}
      className="max-w-5xl text-center text-2xl leading-relaxed text-white-400"
      >
        I'm a developer who enjoys turning ideas into clean, functional
        digital experiences. I like experimenting with new technologies,
        building projects, and constantly finding better ways to solve
        problems.
      </motion.p>
    </div>
  )
}
  


export default AboutText;

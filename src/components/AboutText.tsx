import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function AboutText() {
  const ref =useRef<HTMLDivElement>(null);

  const{ scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });
  
  const opacity = useTransform(
    scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0]
  )

  const blur = useTransform(
    scrollYProgress, [0, 0.6, 1], [0, 0, 8]
  );

  const filter = useTransform(
    blur, 
    (value) => `blur(${value}px)`
  );

  return (
    <div 
    ref={ref} 
    className="flex min-h-screen items-center justify-center px-6"
    >
      <motion.p
      style = {{ opacity, filter }}
      className="max-w-5xl text-center text-2xl leading-relaxed text-gray-400"
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

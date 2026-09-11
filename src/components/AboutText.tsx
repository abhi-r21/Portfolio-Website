import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function AboutText() {
  const textRef =useRef<HTMLDivElement>(null);

  const{ scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start center", "end center"]
  });
  const opacity = useTransform(
    scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress, [0,1], [100, -100]
  )

  return (
    <section 
    ref={textRef} 
    className="flex min-h-screen items-center justify-center px-6"
    >
      <motion.div
      style = {{ opacity, y }}
      className="max-w-5xl text-center text-2xl leading-relaxed"
      >
        I'm a developer who enjoys turning ideas into clean, functional
        digital experiences. I like experimenting with new technologies,
        building projects, and constantly finding better ways to solve
        problems.
      </motion.div>
    </section>
  )
}

export default AboutText;

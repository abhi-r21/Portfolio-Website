import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import { useRef } from "react";

function CurrentlyLearning() {
  const technologies = [
    "Node.js",
    "Express",
    "MongoDB",
    "REST API",
    "AWS"
  ];

  const x = useMotionValue(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta)=> {
    const speed = 0.06;

    let newX = x.get() - delta * speed;
    const width = contentRef.current?.offsetWidth ?? 0;

    if (Math.abs(newX) >= width) {
      newX = 0;
    }

    x.set(newX);
  });

  return (
    <section className="overflow-hidden py-20">
      <h2 className="mb-16 text-center font-[Cormorant_Garamond] text-4xl font-bold">Currently Exploring</h2>
        <div className="overflow-hidden">
          <motion.div 
          style={{ x }}
          className="flex w-max"
          >
            {/* First set */}
            <div ref={contentRef} className="flex shrink-0 gap-16 pr-16">
              {technologies.map((technology) => ( 
            <div 
              key={technology}
              className="flex h-20 w-20 shrink-0 items-center justify-center">
              <span className="text-3xl">
                {technology === "Node.js" && "⬢"}
                {technology === "Express" && "E"}
                {technology === "MongoDB" && "🍃"}
                {technology === "REST API" && "⚡"}
                {technology === "AWS" && "☁"}
              </span>
            </div>
          ))}
        </div>
            
            {/* Duplicate set for continuous loop */ }
          <div className="flex shrink-0 gap-16 pr-16">
            {technologies.map((technology) => ( 
            <div 
            key={`duplicate-${technology}`}
            className="flex h-20 w-20 shrink-0 items-center justify-center">
              <span className="text-3xl">
                {technology === "Node.js" && "⬢"}
                {technology === "Express" && "E"}
                {technology === "MongoDB" && "🍃"}
                {technology === "REST API" && "⚡"}
                {technology === "AWS" && "☁"}
              </span>
            </div>
          ))}
        </div> 

      </motion.div>
    </div>

    </section>
  );
}

export default CurrentlyLearning;

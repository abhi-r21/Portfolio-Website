import { SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaAws } from "react-icons/fa6";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import { useRef } from "react";

function CurrentlyLearning() {
  const technologies = [
    {name:"Node.js", icon: SiNodedotjs, color:"#5FA04E" },
    {name:"Express", icon: SiExpress, color:"#FFFFFF" },
    {name:"MongoDB", icon: SiMongodb, color:"#47A248" },
    {name:"REST API", icon: TbApi, color:"#FFFFFF" },
    {name:"AWS", icon: FaAws, color:"#FF9900" }
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
              {technologies.map((technology) => { 
                const Icon = technology.icon;
              return(
                <div 
              key={technology.name}
              className="flex h-20 w-20 shrink-0 items-center justify-center">
              <Icon 
                className="text-3xl"
                color={technology.color}
              />
            </div>
              );
        })}
        </div>
            
            {/* Duplicate set for continuous loop */ }
          <div className="flex shrink-0 gap-16 pr-16">
            {technologies.map((technology) => {
              const Icon = technology.icon;
            return( 
             <div 
            key={`duplicate-${technology.name}`}
            className="flex h-20 w-20 shrink-0 items-center justify-center">
              <Icon
                className="text-3xl"
                color={technology.color}
              />
            </div>
            );
            })}
        </div> 

      </motion.div>
    </div>

    </section>
  );
}

export default CurrentlyLearning;

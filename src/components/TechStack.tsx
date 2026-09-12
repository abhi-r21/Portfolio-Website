import { SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss, SiTailwindcss, SiNodedotjs, SiMongodb, SiGit, SiGithub} from "react-icons/si"; 
function TechStack() {
  const technologies = [
    { name:"React", icon: SiReact, color:"#61DAFB" },
    { name:"TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name:"JavaScript", icon: SiJavascript, color: "#F7DF1E"},
    { name:"HTML", icon: SiHtml5, color:"#E34F26" },
    { name:"CSS", icon: SiCss, color: "#1572B6"},
    { name:"Tailwind CSS", icon: SiTailwindcss, color:"#06B6D4" }, 
    { name:"Node.js", icon:SiNodedotjs, color:"#5FA04E" },
    { name:"MongoDB", icon:SiMongodb, color:"#47A248" },
    { name:"Git", icon: SiGit, color:"#F05032" },
    { name:"GitHub", icon: SiGithub, color:"#FFFFFF" },
  ];

  return (
    <section className="overflow-hidden px-6">
      <h2 className="text-center font-[Cormorant_Garamond] text-5xl font-bold">
        Tech Stack
      </h2>

      <div className="mx-auto mt-16 flex max-w-6xl flex-wrap justify-center gap-12">
        {technologies.map((technology) => {
          const Icon = technology.icon;

          return (
          <div 
            key={technology.name}
            className="flex h-24 w-24 items-center justify-center"
          >
            <Icon 
              className="text-4xl"
              color={technology.color}
             />
          </div>
          );
    })}
      </div>

    </section>
  );
}

export default TechStack;
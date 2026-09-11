import ProjectCard from "./ProjectCard";
function Projects(){
  return(
    <section id="projects" className="px-6 py-20">
      <h2 className="text-center font-[Cormorant_Garamond] text-5xl font-semibold ">
        Projects
      </h2>
      <div className="mx-auto mt-12 grid w-full max-w-4xl grid-cols-2 justify-items-center gap-x-8 gap-y-10">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </section>
  );
}
export default Projects;
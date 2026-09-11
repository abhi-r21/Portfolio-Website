function ProjectCard() {
  return(
    <div className="group w-[445px] rounded-2xl border border-white/20 bg-[#151515] p-4
    transition-all duration-300 ease-out hover: -translate-y-2 hover:scale-[1.02] hover:border-white/50 hover: shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]"
    >

        {/* Project image */}
        <div className="h-64 w-full overflow-hidden rounded-2xl">
          <img src="/images/Ethereal Purple Canyon Landscape.jpg" alt="Project-1"
           className="h-full w-full object-cover blur-[1px] transition-transform duration-500 ease-out hover:scale-110 hover: brightness-110"/>
        </div>
        
        {/* Project information */}
        <div className="mt-5 flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-semibold transition-transform duration-300 group-hover:translate-x-1">
              Project 1
            </h3>
            
            <p className="mt-2 text-gray-400">
              Discription 
            </p>
          </div>
          {/* Year */}
          <span className="text-gray-500">
            present
          </span>
        </div>
      </div>
  );
}

export default ProjectCard;
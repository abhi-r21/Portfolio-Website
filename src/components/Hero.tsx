import { FaGithub, FaLinkedin } from "react-icons/fa"; 
import { SiX } from "react-icons/si";
import { LuRepeat } from "react-icons/lu";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-video">
      <video src="/videos/Video Project 5.mp4" autoPlay loop muted playsInline></video>
      </div>

      <img src="/toji.jpeg" alt="Profile" className="profile-pic"/>

      <div className="portfolio-info">
          <h1 className="name">Abhiram Bojja</h1>
          
          <div className="social-icons">
            <a href="http://github.com/abhi-r21" target="_blank">
            <FaGithub />
            </a>
            <a href="https://x.com/Ab_hiii21" target="_blank">
            <SiX/>
            </a>
            <a href="https://www.linkedin.com/in/abhiram-bojja/" target="_blank">
            <FaLinkedin/>
            </a>
          </div>
      </div>
      <div className="hero-content">
        <p>
          Hilo! I'm a <span className="text-blue-400"> Full-stack developer</span>{" "} crafting clean, functional, and thoughtful digital experiences. Currently turning ideas into products and learning something new along the way.
          <div className="mt-6 flex items-center justify-center gap-2" >
            <span className="text-cyan-400">Code,</span>{" "} 
            create, 
            <span className="text-lime-400"> experiment, </span>{" "} 
            repeat.<LuRepeat className="text-red-400" />
          </div>
        </p>
      </div>
    </section>
  );
}

export default Hero;
import { FaGithub, FaLinkedin } from "react-icons/fa"; 
import { SiX } from "react-icons/si";

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
    </section>
  );
}

export default Hero;
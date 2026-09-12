import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="flex items-center gap-6">
      <a 
      href="https://github.com/abhi-r21"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      >
        <FaGithub className="text-2xl" />
      </a>

      <a 
      href="https://www.linkedin.com/in/abhiram-bojja/"
      target="_blank"
      rel="noopener noreferrer" 
      aria-label="LinkeIn"
      >
        <FaLinkedin className="text-2xl" />
      </a>

      <a href="mailto:abhirambojja765@gmail.com" aria-label="Email">
        <FaEnvelope className="text-2xl" />
      </a>
    </div>
  );
}

export default SocialLinks;
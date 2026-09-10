import MusicPlayer from "./Musicplayer";

function Navbar() {
  return(
    <nav className="font-[Space_Grotesk] flex items-center justify-end px-8 py-4 pr-16">
      {/* Navigation + Music */}
      <div className="flex h-full items-center gap-8">
        {/* Music Icon */}
        <div className="flex items-center">
          <MusicPlayer />
        </div>
        <a href="#home" className="transition-colors duration-300 hover:text-gray-400">Home</a>
        <a href="#about" className="transition-colors duration-300 hover:text-gray-400">About</a>
        <a href="#projects" className="transition-colors duration-300 hover:text-gray-400">Projects</a>
        <a href="#contact" className="transition-colors duration-300 hover:text-gray-400">Contact</a>

      </div>
    </nav>
  );
}

 export default Navbar;
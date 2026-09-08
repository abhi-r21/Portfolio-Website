function Hero() {
  return (
    <section className="hero">
      <div className="hero-video">
      <video src="/videos/Video Project 5.mp4" autoPlay loop muted playsInline></video>
      <img src="/toji.jpeg" alt="Profile" className="profile-pic"/>
      </div>
      <div>
      <h1 className="name">Abhi Ram</h1>
      </div>
    </section>
  );
}

export default Hero;
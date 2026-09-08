function Hero() {
  return (
    <section className="hero">
      <div className="hero-video">
      <video src="/videos/Video Project 5.mp4" autoPlay loop muted playsInline></video>
      <img src="/toji.jpeg" alt="Profile" className="profile-pic"/>
      </div>
    </section>
  );
}

export default Hero;
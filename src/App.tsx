import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import './App.css'
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />

      <Hero/>
      <Projects/>
      <AboutMe />
      <Contact />
      <Footer />
  </>
  );
}

export default App;

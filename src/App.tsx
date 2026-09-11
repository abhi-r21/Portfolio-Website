import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <Hero/>
      <Projects/>
      <AboutMe />
  </>
  );
}

export default App;

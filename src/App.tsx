import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero/>
        <Projects/>
      </main>
  </>
  );
}

export default App;

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MusicPlayer from './components/Musicplayer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      
      <MusicPlayer />

      <main>
        <Hero/>
      </main>
  </>
  );
}

export default App;

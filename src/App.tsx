import Hero from './components/Hero';
import Bio from './components/Bio';
import Divider from './components/Divider';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-gray-900 max-screen mx-auto text-white">
      <Hero />
      <Divider />
      <Bio />
      <Divider />
      <Projects />
    </div>
  );
}

export default App;

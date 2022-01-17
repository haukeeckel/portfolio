import Hero from './components/Hero';
import Bio from './components/Bio';
import Divider from './components/Divider';

function App() {
  return (
    <div className="bg-gray-900 max-screen mx-auto">
      <Hero />
      <Divider />
      <Bio />
    </div>
  );
}

export default App;

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] bg-[radial-gradient(circle_at_20%_0%,#1A1A1A_0%,transparent_35%),radial-gradient(circle_at_80%_0%,#1A1A1A_0%,transparent_35%)] text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  );
}

export default App;

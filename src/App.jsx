import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Product from './components/Product';
import Testimoni from './components/Testimoni';

function App() {
  return (
    <div className="min-h-screen bg-[#F7F3F0] overflow-auto no-scrollbar">
      <Navbar />
      <Home  />
      <About />
      <Product />
      <Testimoni />
      <Gallery />
      <Contact />
      <Footer/>
    </div>
  );
}


export default App
import './App.css'
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-[#F7F3F0] overflow-auto no-scrollbar h-screen">
      <Navbar />
      <Home/>
      <About/>
    </div>
  );
}


export default App
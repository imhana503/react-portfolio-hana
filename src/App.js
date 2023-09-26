import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';

//components
import Nav from './components/Nav/Nav';  
  
function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Nav/>
    </BrowserRouter>
    
  );
}

export default App;

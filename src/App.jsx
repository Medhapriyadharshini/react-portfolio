import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Mode from './Components/Mode';

function App() {
  return (
    <div className="App">
      <div>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='skills' element={<Skills/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes> */}
      <Footer/>
      </div>
     
    </div>
  );
}

export default App;

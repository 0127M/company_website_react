import './App.css';
import About from './components/About/About';
import ClientView from './components/ClientView/ClientView';
import Contact from './components/Contact/Contact';
import Heading from './components/Heading/Heading';
import Navbar from './components/Navbar/Navbar';
import ServicesComp from './components/ServicesComp/ServicesComp';
// import TestComp from './components/TestComp/TestComp';
import Workexp from './components/Workexp/Workexp';

// import Slider from './components/Slider/Slider';
// import Heading from './components/Heading/Heading';





function App() {
  return (
    <div className="App">
      <Navbar />
      <Heading />
      <About />
      <ServicesComp />
      <Workexp />
      <ClientView />
      <Contact />
    </div>  
  );
}

export default App;

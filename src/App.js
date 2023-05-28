import './App.css';
import Home from './components/Home/home';
import About from './components/About/about';
import Experience from './components/Experience/experience'; 
import Services from './components/Services/services';
import Testimonial from './components/Testimonial/testimonial';
import Contact from './components/Contact/contact';
import Footer from  './components/Footer/footer';
function App() {
  return (
   <div>
    
    <Home />  
    <About /> 
    <Experience />
    <Services />
    <Testimonial />
    <Contact /> 
    <Footer/>
   </div>
  );
}

export default App;

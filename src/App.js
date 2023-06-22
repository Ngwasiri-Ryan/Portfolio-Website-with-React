import './App.css';
import Home from './components/Home/home';
import About from './components/About/about';
import Experience from './components/Experience/experience'; 
import Services from './components/Services/services';
import Testimonial from './components/Testimonial/testimonial';
import Contact from './components/Contact/contact';
import Footer from  './components/Footer/footer';
import { createContext ,useState} from 'react';   

export const ThemeContext = createContext(null);
function App() {
   const [theme , setTheme] = useState('light')

   const toggleTheme = () => {
     setTheme((curr)=>( curr === 'light' ? 'dark' : 'light'));
   };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
   <div className='app' id={theme}>
    
    <Home />  
    <About /> 
    <Experience />
    <Services />
    <Testimonial />
    <Contact /> 
    <Footer/>
   </div>
   </ThemeContext.Provider>
  );
}

export default App;

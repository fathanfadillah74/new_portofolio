import './App.css';
import About from './components/about';
import ContactFooter from './components/contact';
import Experience from './components/experience';
import Navbar from './components/navbar';
import ScrollToTop from './components/scrollToTop';
import Skills from './components/skills';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <ContactFooter />
      <ScrollToTop />
    </>
  );
}

export default App;

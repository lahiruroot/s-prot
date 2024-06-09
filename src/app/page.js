import './page.css';
import About from '../app/components/About';
//import Contact from '../app/components/Contact';
import Education from '../app/components/Education';
import Experinces from '../app/components/Experinces';
import Footer from '../app/components/Footer';
import Hello from '../app/components/Hello';
import Projects from '../app/components/Projects';
import Qualification from '../app/components/Qualification';
import Tech from '../app/components/Tech';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div id='home'>
      <Navbar />
      <Tech />
      <About />
      <Experinces />
      <Education />
      <Qualification />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

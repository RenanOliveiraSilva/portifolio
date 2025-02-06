import Header from './screens/Header.tsx';
import Works from './screens/Works.tsx';
import About from './screens/About.tsx';
import Contact from './screens/Contact.tsx';
import Footer from './screens/Footer.tsx';
import { Analytics } from "@vercel/analytics/react"
// import Award from './screens/Award.tsx';

function App() {
  return (
    <div className="bg-backgroundColor text-white min-h-screen">
      <Analytics/>
      
      <section id='header' className='relative h-screen w-full bg-gray-900'>
        <Header />

      </section>

      <section id='works'>
        <Works />

      </section>

      <section id='about'>
        <About />
      </section>

      {/* <section id='award'>
        <Award />
      </section> */}

      <section id='about'>
        <Contact />
      </section>


      <section id='footer'>
        <Footer />
      </section>
    </div>
  );
}

export default App;

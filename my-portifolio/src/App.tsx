import Header from './screens/Header.tsx';
import Works from './screens/Works.tsx';
import About from './screens/About.tsx';
import Contact from './screens/Contact.tsx';
import Footer from './screens/Footer.tsx';

function App() {
  return (
    <div className="bg-backgroundColor text-white min-h-screen">
      <section id='header' className='relative h-screen w-full bg-gray-900'>
        <Header />

      </section>

      <section id='works'>
        <Works />

      </section>

      <section id='about'>
        <About />
      </section>

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

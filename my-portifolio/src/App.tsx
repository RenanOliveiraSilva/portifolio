import Header from './screens/Header.tsx';
import Works from './screens/Works.tsx';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-backgroundColor text-white min-h-screen">
      <section id='header'>
        <Header />

      </section>

      <section id='works'>
        <Works />

      </section>

      {/* <Footer /> */}
    </div>
  );
}

export default App;

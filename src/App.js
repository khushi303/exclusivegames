import './App.css';
import Header from './components/Header';
import Mision from './components/Mision';
import Atributos from './components/Atributos';
import Potenciando from './components/Potenciando';
import Casino from './components/Casino';
import Razones from './components/Razones';
import Nuestras from './components/Nuestras';
import Ellos from './components/Ellos';
import LanzaTu from './components/LanzaTu';
import Footer from './components/Footer';
import Backtotop from './assets/images/png/backtotop1.png';
import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Preguntas from './components/Preguntas';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  // ----------back-to-top------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // --------------------preloader-------------------
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2500);
  }, []);
  // ------------aos-------
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1300,
      }
    );
    Aos.refresh()
  });
  return (
    <div className='overflow-x-hidden'>
      {screenLoading ? (
        <Preloader />
      ) : (
        <div className=' overflow-hidden'>
          <Header />
          <Mision />
          <Atributos />
          <Potenciando />
          <Casino />
          <Razones />
          <Nuestras />
          <Ellos />
          <Preguntas />
          <LanzaTu />
          <Footer />
          <div className=''>
            <div className={backToTop ? 'back_to_top' : 'hidden'} onClick={() => top()}>
              <img src={Backtotop} alt="Backtotop" className=' w-100 mw_35' />
            </div>
          </div>
        </div>
      )
      }
    </div >
  );
}

export default App;

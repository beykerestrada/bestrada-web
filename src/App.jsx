import { Hero, Tech, About, Portfolio, Contact, Interests, Footer, GoToTop } from './components'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  useEffect(() => {
    // Asegúrate de que Tally.loadEmbeds está disponible
    if (window.Tally) {
      window.Tally.loadEmbeds();
    } else {
      // Carga el script de Tally si no está disponible
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      script.onload = () => {
        window.Tally.loadEmbeds();
      };
      document.body.appendChild(script);
    }
  }, []); // El array vacío asegura que esto solo se ejecute una vez cuando el componente se monta

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <Tech />
            <About />
            <Portfolio />
            <Interests />
            <Contact />
            <GoToTop />
          </>
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

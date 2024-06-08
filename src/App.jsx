import { Hero, Tech, About, Portfolio, Contact, Interests, Footer, GoToTop } from './components'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  

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

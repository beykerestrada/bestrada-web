import { Hero, Tech, About, Portfolio, Contact, Thankyou, Interests, Footer } from './components'

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
          </>
        } />
        <Route path='/thankyou' element={<Thankyou />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

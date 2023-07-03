import { Navbar, Hero, Tech, About, Portfolio, Contact, Footer } from './components'

import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
      <Hero/>
      <Tech/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

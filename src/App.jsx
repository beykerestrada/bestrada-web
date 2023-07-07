import { Hero, Tech, About, Portfolio, Contact, Services, Interests, Footer } from './components'

import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
      <Hero/>
      <Tech/>
      <About/>
      <Portfolio/>
      <Interests/>
      <Contact/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

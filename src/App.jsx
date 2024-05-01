import { Container } from 'react-bootstrap'
import './App.css'
import { Banner } from './Components/Banner'
import { Description } from './Components/Description'
import { Header } from './Components/Header'
import { Services } from './Components/Services'
import { Footer } from './Components/Footer'

function App() {


  return (
    <> 
     <Header />
     <Description />
     <Banner />
     <Services />
     <Footer/>
    </>
  )
}

export default App

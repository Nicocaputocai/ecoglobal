import { Container } from 'react-bootstrap'
import './App.css'
import { Banner } from './Components/Banner'
import { Description } from './Components/Description'
import { Header } from './Components/Header'
import { Services } from './Components/Services'
import { Footer } from './Components/Footer'

function App() {


  return (
    <div style={{maxWidth:"100vw"}}> 
     <Header />
     <Description />
     <Banner />
     <Services />
     <Footer/>
    </div>
  )
}

export default App

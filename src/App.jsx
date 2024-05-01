import { Container } from 'react-bootstrap'
import './App.css'
import { Banner } from './Components/Banner'
import { Description } from './Components/Description'
import { Header } from './Components/Header'
import { Services } from './Components/Services'

function App() {


  return (
    <> 
     <Header />
     <Description />
     <Banner />
     <Services />
    </>
  )
}

export default App

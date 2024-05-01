import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Empresas from "../assets/huella-de-carbono-que-es-768x447.jpg"
import Gobiernos from "../assets/sustainable-development-goals-still-life2.jpg"
import Educacion from "../assets/arbolitos.jpg"
export const Services = () => {
  return (
    <Container>
        <h2 style={{textAlign:"center"}}>Nuestras soluciones</h2> <hr />
        <Row>

        <Col xs="12" md= "4">
        <Image fluid src={Educacion}/> 
        <p style={{fontSize:"1.15rem", paddingTop:"1.9vh"}}>Mide y compensa tu huella | Diseña tu transición hacia la neutralidad | Consigue financiamiento | Verifica tu proyecto | Certifica Bonos de Carbono/ Presenta tu reporte de sostenibilidad.</p>
        </Col>

        <Col xs="12" md= "4">
            <br />
        <p style={{fontSize:"1.2rem"}}>Contamos con programas educativos y de acción climática para empresas e instituciones que buscan generar un impacto social positivo.</p>
            <Image fluid src={Empresas}/>
            
        </Col>

        <Col xs="12" md= "4">  
        <Image fluid src={Gobiernos}/>
        <p style={{fontSize:"1.05rem"}}>Asesoramiento en Acción Climática/ Evaluación de la vulnerabilidad climática/ Planes de mitigación y adaptación/Marcos regulatorios/ Consultoría en Mercados de Carbono, Capacitación y Sensibilizació/ gobernanza ambiental.</p>
        </Col>
        </Row>
    </Container>
  )
}

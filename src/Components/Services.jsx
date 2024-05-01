import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Empresas from "../assets/huella-de-carbono-que-es-768x447.jpg";
import Gobiernos from "../assets/sustainable-development-goals-still-life2.jpg";
import Educacion from "../assets/arbolitos.jpg";
export const Services = () => {
  return (
    <Container fluid>
      <h2 style={{ textAlign: "center" }}>Nuestras soluciones</h2> <hr />
      <Row md="12">
        <Col xs="12" md={{ span:4}}>
          <Image fluid src={Gobiernos} />
          <h3 style={{textAlign:"center"}}>Gobiernos</h3> <hr />
          <p style={{ fontSize: "1.05rem", textAlign: "right" }}>
            
            Asesoramiento en Acción Climática/ Evaluación de la vulnerabilidad
            climática/ Planes de mitigación y adaptación/Marcos regulatorios/
            Consultoría en Mercados de Carbono, Capacitación y Sensibilizació/
            gobernanza ambiental.
          </p>
        </Col>

        <Col xs="12" md={{ span:4 }}>
        <Row>
            
            </Row>
        <h3 style={{textAlign:"center"}}>Impacto social</h3> <hr />
          <p style={{ fontSize: "1.2rem", textAlign: "left" }}>
          
            Contamos con programas educativos y de acción climática para
            empresas e instituciones que buscan generar un impacto social
            positivo.
          </p>
          <br /><br /><br /><br /><br /><br /><br />
          <Row>
          <Image fluid src={Empresas} />
            </Row>
          
        </Col>

        <Col xs="12" md={{ span:4 }}>

          <Image fluid src={Educacion} />
          <h3 style={{textAlign:"center"}}>Empresas</h3> <hr />
          <p
            style={{
              fontSize: "1.15rem",
              paddingTop: "1.9vh",
              textAlign: "left",
            }}
          >
            
            Mide y compensa tu huella | Diseña tu transición hacia la
            neutralidad | Consigue financiamiento | Verifica tu proyecto |
            Certifica Bonos de Carbono/ Presenta tu reporte de sostenibilidad.
          </p>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
};

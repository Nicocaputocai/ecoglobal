import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Empresas from "../assets/huella-de-carbono-que-es-768x447.jpg";
import Gobiernos from "../assets/sustainable-development-goals-still-life2.jpg";
import Educacion from "../assets/arbolitos.jpg";

export const Services = () => {
  return (
    <Container fluid style={{ maxWidth: "90vw", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center" }}>Nuestras soluciones</h2>
      <hr />
      <Row>
        <Col xs={12} md={4} className="d-flex flex-column justify-content-end mb-3 mb-md-0">
          <Image fluid src={Gobiernos} />
        </Col>
        <Col xs={12} md={4} className="d-flex flex-column justify-content-center mb-3 mb-md-0">
          <div>
            <h3 style={{ textAlign: "center" }}>Impacto social</h3>
            <hr />
            <p style={{ fontSize: "1.2rem", textAlign: "left" }}>
              Contamos con programas educativos y de acción climática para
              empresas e instituciones que buscan generar un impacto social
              positivo.
            </p>
          </div>
        </Col>
        <Col xs={12} md={4} className="d-flex flex-column justify-content-end mb-3 mb-md-0">
          <Image fluid src={Empresas} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4} className="d-flex flex-column justify-content-center mb-3 mb-md-0">
          <h3 style={{ textAlign: "center" }}>Gobiernos</h3>
          <hr />
          <p style={{ fontSize: "1.2rem", textAlign: "right" }}>
            Asesoramiento en Acción Climática/ Evaluación de la vulnerabilidad
            climática/ Planes de mitigación y adaptación/Marcos regulatorios/
            Consultoría en Mercados de Carbono, Capacitación y Sensibilización/
            gobernanza ambiental.
          </p>
        </Col>
        <Col xs={12} md={4} className="mb-3 mb-md-0">
          <Image fluid src={Educacion} />
        </Col>
        <Col xs={12} md={4} className="d-flex flex-column justify-content-center mb-3 mb-md-0">
          <h3 style={{ textAlign: "center" }}>Empresas</h3>
          <hr />
          <p style={{ fontSize: "1.2rem", textAlign: "left" }}>
            Mide y compensa tu huella | Diseña tu transición hacia la
            neutralidad | Consigue financiamiento | Verifica tu proyecto |
            Certifica Bonos de Carbono/ Presenta tu reporte de sostenibilidad.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

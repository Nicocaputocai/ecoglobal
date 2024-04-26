import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ".././App.css";
import Logo from "../assets/ECO GLOBAL_COLOR.png";

export const Description = () => {
  return (
    <Container>
      <br />
<div className="text-container">
  <h2 className="verdeIntermedio">Quienes somos</h2> <hr />
  <div>
    <Row>
      <Col xs="12" md="4">
      <Image src={Logo} fluid></Image>
      </Col>
      <Col xs="12" md="8">
    <p className="main-text gris"  style={{fontSize:"1.3rem", paddingTop:"4vh"}}>
        Somos una consultora especializada en abordar el desafío del cambio climático con un enfoque que se centra en brindar soluciones ambientales innovadoras y sostenibles tanto para el sector público como para el privado y en desarrollar alternativas para hacer más eficientes los procesos productivos considerando los aspectos económicos, sociales y ambientales.

Tenemos un compromiso ético y profesional con el desarrollo sostenible y nos centramos en la innovación y la creatividad como fuente principal en la resolución de problemas con un enfoque en el futuro y una visión a largo plazo.

Centramos nuestros esfuerzos en asesorar a agencias gubernamentales, sindicatos, empresas privadas, organizaciones sin fines de lucro y cualquier entidad comprometida con la lucha contra el cambio climático y la promoción del desarrollo sostenible.
        </p>
    </Col>
  

    </Row>
    </div>
        
      </div>
    </Container>
  );
};

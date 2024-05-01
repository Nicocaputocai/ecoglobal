import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ".././App.css";
import Logo from "../assets/ECO GLOBAL_COLOR.png";
import Dados from "../assets/bodegon-objetivos-desarrollo-sostenible_23-2150196695.jpg";

import Paneles from "../assets/3d-solar-pannels-project-energy-saving.jpg"

export const Description = () => {
  return (
    <Container>
      <br />
      <div className="text-container">
        
        <div>
          <Row>
           
            <Col xs="12" md="7">
              <p
                className="main-text gris"
                style={{ fontSize: "1.1rem", paddingTop: "10vh", textAlign:"justify"}}
              >
                <h2 className="verdeIntermedio">Quienes somos</h2> <hr />
                Somos una consultora especializada en abordar el desafío del
                cambio climático con un enfoque que se centra en brindar
                soluciones ambientales innovadoras y sostenibles tanto para el
                sector público como para el privado y en desarrollar
                alternativas para hacer más eficientes los procesos productivos
                considerando los aspectos económicos, sociales y ambientales.
                Tenemos un compromiso ético y profesional con el desarrollo
                sostenible y nos centramos en la innovación y la creatividad
                como fuente principal en la resolución de problemas con un
                enfoque en el futuro y una visión a largo plazo. Centramos
                nuestros esfuerzos en asesorar a agencias gubernamentales,
                sindicatos, empresas privadas, organizaciones sin fines de lucro
                y cualquier entidad comprometida con la lucha contra el cambio
                climático y la promoción del desarrollo sostenible.
              </p>
            </Col>
            <Col xs="12" md="5">
              <Image src={Logo} fluid></Image>
            </Col>
          </Row>
        </div>
      </div>
      <br />
      {/* Mision */}
      <div>
        <Row>
        <Col>
          <Image fluid src={Paneles} />
          </Col>
          <Col><br /> <br />
          <p style={{fontSize:"1.3rem"}}>
          <h2 className="verdeIntermedio">Misión</h2> <hr />
          En ECO global trabajamos para desmitificar la brecha entre el crecimiento productivo y la sostenibilidad, contribuyendo al mejoramiento de las condiciones que provocan el cambio climático y reduciendo las emisiones de gases de efecto invernadero (GEI) haciendo que la acción climática se integre a la acción de gobierno o al plan de negocio.
          </p>

          </Col>
          
        </Row>
      </div>
      <br />
      {/* enfoque */}
      <div >
        <Row>
          
          
          <Col xs="12" md="6" >
          <p style={{fontSize:"1.2rem", paddingTop:10}}>
          <h3>Enfoque</h3>
          <hr />
              {" "}
              Para cumplir con nuestra visión, desarrollamos una estrategia de enfoque público + privado. Asesoramos a empresas en el diseño e implementación de proyectos, facilitando el acceso a programas de financiamiento e instrumentos financieros para la transición hacia prácticas sustentables que les permitan participar en los mercados voluntarios y regulados derivados del comercio de emisiones y remociones de gases de efecto invernadero (GEI). Además, asistimos a gobiernos en el diseño de políticas públicas y programas para cumplir con las metas asumidas por los Estados Nacionales en el marco de la Convención Marco de las Naciones Unidas sobre el Cambio Climático, el Acuerdo de París y la Agenda de Desarrollo Sostenible 2030.
            </p>
          </Col>
          <Col xs="12" md="6">
            <Image fluid src={Dados}/>
          </Col>
        </Row>
      </div> 
      <br />
      {/* Banner */}

    </Container>
    
  );
};

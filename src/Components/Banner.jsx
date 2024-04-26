import React, { useEffect, useState } from "react";
import { Button, Container, Image, Navbar } from "react-bootstrap";
import Argentina from "../assets/Argentina.jpeg";
import Camino from "../assets/camino3.jpg";
import energia from "../assets/windmills-5767549.jpg";
import Molinos1 from "../assets/molino camino.jpg";
import MolinosGira from "../assets/sunflowers-1853323_19202.jpg";
// import MolinosGira2 from "../assets/IMG_0873.png";
import Logo from "../assets/ECO GLOBAL_COLOR.png";
export const Banner = () => {
  const [scrolled, setScrolled] = useState(false);

  //   // Función para manejar el desplazamiento de la página
  //   const handleScroll = () => {
  //     // Verificar si la página ha sido desplazada más allá de cierta cantidad de píxeles
  //     if (window.scrollY > 100) {
  //       // Si se ha desplazado, establecer el estado de 'scrolled' a true
  //       setScrolled(true);
  //     } else {
  //       // Si no se ha desplazado, establecer el estado de 'scrolled' a false
  //       setScrolled(false);
  //     }
  //   };

  //   // Agregar un event listener para escuchar el evento de desplazamiento
  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  return (
    <div>
      <Container fluid>
        <div
          style={{
            position: "absolute",
            // top: "5vw", // Ajusta la posición superior según necesites
            // left: "15vh", // Ajusta la posición izquierda según necesites
            width: "95vw",
            zIndex: 999,
            backgroundColor: "rgba(255, 255, 255, 0)", // Fondo completamente transparente
            textAlign: "left",
            // paddingTop: "2vw",
            // paddingLeft:"10vw"
          }}
        >
          <Image src={Logo} style={{ width: "23vw", position: "sticky" }} />
          {/* <div style={{ marginBottom: "0.1rem" }}>
            <span style={{ color: "#BFD247", fontSize: "4rem" }}>eco</span>
            <span style={{ color: "#1B5147", fontSize: "4rem" }}>global</span>
          </div>
          <div style={{ marginTop: "-0.8rem" }}>
            <span style={{ color: "#C8C8C8", fontSize: "1.65rem" }}>
              Soluciones ambientales
            </span>
          </div> */}
        </div>
      </Container>

      {/* Imagen */}
      <Image
        src={MolinosGira}
        fluid
        style={{ width: "100vw", maxHeight: "100vh" }}
      />
    </div>
  );
};

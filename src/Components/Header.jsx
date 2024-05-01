import React from 'react'
import { Container, Nav } from 'react-bootstrap'

export const Header = () => {
    return (
      <>
        <Container fluid style={{ position: "sticky", top: 0, zIndex: 1000, backgroundColor: "white" }}>
          <Nav className="justify-content-start" activeKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                <div style={{ marginBottom: "0.1rem" }}>
                  <span style={{ color: "#BFD247", fontSize: "4rem", fontWeight:600 }}>eco</span>
                  <span style={{ color: "#1B5147", fontSize: "4rem", fontWeight:600 }}>global</span>
                </div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </>
    );
  };

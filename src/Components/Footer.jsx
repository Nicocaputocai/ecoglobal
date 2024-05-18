import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export const Footer = () => {
  return (
<Navbar bg="light" variant="light">
          <Container >
          <Nav className="m-auto">
            <Nav.Item>
              <Nav.Link href="https://www.instagram.com/" target="_blank">
                <span>Diseño &copy; 2024 Mariana Santillan</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                |
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link href="https://www.divisioncode.net.ar/" target="_blank">

                <span>Desarrollo &copy; 2024 The Division Code</span>
              </Nav.Link>
            </Nav.Item>
            </Nav>
          </Container>

        </Navbar>
  )
}

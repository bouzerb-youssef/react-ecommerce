import React from 'react'
import {Container ,Navbar,Nav  } from 'react-bootstrap'
export default function Header() {
  return (
    <header >
      
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Our Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
              <Nav.Link className='p-3' href="#home">Cart</Nav.Link>
              <Nav.Link href="#link">Sing</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </header>
  )
}

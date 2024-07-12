import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand'
import Nav from 'react-bootstrap/Nav'
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'


import '../App.css';

export const NavBarComponent = () => {
  return (
    <div >
     
      <Navbar className='navbar navbar-expand-lg navbar-light bg-white py-3'>
        <Container>
          <Navbar.Brand className='navbar-brand' href="/">
            <span className="fw-bolder text-primary">My Resume</span>
          </Navbar.Brand>
          <NavbarToggle className='navbar-toggler collapsed' type='button' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </NavbarToggle>
          <NavbarCollapse className='navbar-collapse' id="navbarSupportedContent">
            <Nav className='navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder'>
                <Nav.Link className='nav-item' href="/">Home</Nav.Link>
                <Nav.Link className='nav-item' href="/Resume">Resume</Nav.Link>
                <Nav.Link className='nav-item' href="/Project">Projects</Nav.Link>
              </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
     

    </div>
  )
}

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/logo.webp"
import './Navbar.css'

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg navbar-height fixed-top bg-body-tertiary custom-navbar mt-2"
    style={{ maxHeight: '75px' }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="Logo do site"
            style={{
              width: '65px', 
              height: '65px',
              borderRadius: '35px' 
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Sobre mim</Nav.Link>
            <Nav.Link href="#action2">Projetos</Nav.Link>
            <Nav.Link href="#action3">Currículo</Nav.Link>
            <Nav.Link href="#action4">Contatos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

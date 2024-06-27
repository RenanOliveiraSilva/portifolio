import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/logo.webp"

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
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
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Sobre mim</Nav.Link>
            <Nav.Link href="#action2">Projetos</Nav.Link>
            <Nav.Link href="#action2">Currículo</Nav.Link>
            <Nav.Link href="#action2">Contatos</Nav.Link>  
          
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Pesquise algo"
              className="me-2"
              aria-label="Pesquise algo"
            />
            <Button variant="outline-success">Pesquisar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
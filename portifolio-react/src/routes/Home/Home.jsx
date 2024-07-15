import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import avatar from '../../assets/b.png'
import teste from '../../assets/a.gif'
import './Home.css'

function Home() {
  return (
    <Container fluid="md" className='p-2 pt-4 mt-5'>
      <Row>
      <Col className='d-flex justify-content-center position-relative'>
          <Image
            src={teste}
            style={{ width: '350px', height: '350px' }}
            roundedCircle
          />
          <Image
            src={avatar}
            className="overlay-image" // Classe para o hover
            style={{
              width: '350px',
              height: '350px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              
              transition: 'transform 0.3s' // Transição suave
            }}
          />
        </Col>
        <Col>
          <Badge pill bg="light" text="dark">
            Olá, que bom te conhecer
          </Badge>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

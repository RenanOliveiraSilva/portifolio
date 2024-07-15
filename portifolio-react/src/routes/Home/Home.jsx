import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import avatar from '../../assets/013.jpg'

function Home() {
  return (
    <Container fluid="md" className='p-2 pt-4 mt-5'>
      <Row>
        <Col className='d-flex' style={{alignItems: 'center', justifyContent: 'center' }}>
          <Image
            src={avatar}
            style={{
              width: '350px', 
              height: '350px',
              
            }}
            roundedCircle 
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

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

function Home() {
  return (
    <Container fluid="md" className='p-2'>
      <Row>
        <Col>
          <Image src="holder.js/171x180" roundedCircle />
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

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Home() {
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <Image src="holder.js/171x180" roundedCircle />
        </Col>
        <Col>bbbbbb</Col>
      </Row>
    </Container>
  );
}

export default Home;

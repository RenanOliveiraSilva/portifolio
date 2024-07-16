import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import avatar from '../../assets/avatar1.png';
import teste from '../../assets/a.gif';
import './Home.css';
import Car from '../../components/Carousel/Carousel';

import git from '../../assets/git.png';
import linkedIn from '../../assets/linkedIn.png';
import google from '../../assets/google.png';
import whats from '../../assets/whatsapp.png';
import Card from '../../components/Card/Card';

function Home() {
  return (
    <>
      <Container fluid className='p-2 pt-4 mt-5 custom-container' id="section1">
        <Row className='mb-2'>
          <Col xs={6} md={6} sm={12} className='p-2 pb-2'>
            <Row className='d-flex justify-content-center position-relative '>
              <Image
                src={teste}
                style={{ width: '350px', height: '350px' }}
                className='blur-border'
                roundedCircle
              />
              <Image
                src={avatar}
                className="overlay-image"
                style={{
                  width: '300px',
                  height: '300px',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  transition: 'transform 0.3s'
                }}
              />
            </Row>
            <Row className='custom-text-redes'>
              <p>
                <strong>
                  Minhas Redes Sociais
                </strong>
              </p>
            </Row>
            <Row className='d-flex custom-images pr-15 pl-15 pt-4' style={{ justifyContent: 'space-around' }}>
              <Image
                src={git}
                style={{ width: '100px', height: '76px' }}
                roundedCircle
              />
              <Image
                src={linkedIn}
                style={{ width: '100px', height: '76px' }}
                roundedCircle
              />
              <Image
                src={google}
                style={{ width: '100px', height: '76px' }}
                roundedCircle
              />
              <Image
                src={whats}
                style={{ width: '100px', height: '76px' }}
                roundedCircle
              />
            </Row>
          </Col>
          
          <Col xs={6} md={6} sm={12} className='p-2 pb-2'>
            
              <Badge pill className='custom-badge' style={{ fontSize: '1.2em'}}>
                <i className="fa-solid fa-hand-peace" style={{ color: '#FFD43B', paddingRight: '10px', paddingLeft: '5px' }}></i> Olá, que bom te conhecer
              </Badge>
           
            <div className='custom-text pt-3'>
              <strong>
                Eu me chamo Renan!<br />
                Seja bem vindo a minha Página
              </strong>
              
            </div>
            
            
              <div className="subT">
                Programador Front-End
              </div>
            
            
            <Row className='mt-5'>
              <Car />
            </Row>
          </Col>
        </Row>
        <Row>
          <div className="academico">
            <Card />
          </div>
          <hr/>
        </Row>
      </Container>
    </>
  );
}

export default Home;

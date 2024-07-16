import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import avatar from '../../assets/avatar1.png'
import teste from '../../assets/a.gif'
import './Home.css'
import Car from '../../components/Carousel/Carousel'

import git from '../../assets/git.png'
import linkedIn from '../../assets/linkedIn.png'
import google from '../../assets/google.png'
import whats from '../../assets/whatsapp.png'

function Home() {
  return (
    <>
    <Container fluid="md" className='p-2 pt-4 mt-5 d-flex custom-container' id="section1">
    
      <Col xs={6} md={6} sm={12}>
        <Row className='d-flex justify-content-center position-relative '>
            <Image
              src={teste}
              style={{ width: '350px', height: '350px' }}
              className='blur-border'
              roundedCircle
            />
            <Image
              src={avatar}
              className="overlay-image" // Classe para o hover
              style={{
                width: '300px',
                height: '300px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                
                transition: 'transform 0.3s' // Transição suave
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
          <Row className='d-flex pl-15 pr-15' style={{ justifyContent: 'space-around'}}>
          
            <Image
              src={git}
              style={{ width: '68px', height: '68px' }}
              roundedCircle
            />
            <Image
              src={linkedIn}
              style={{ width: '65px', height: '65px' }}
              roundedCircle
            />
            <Image
              src={google}
              style={{ width: '65px', height: '65px' }}
              roundedCircle
            />
            <Image
              src={whats}
              style={{ width: '65px', height: '65px' }}
              roundedCircle
            />

        </Row>
      </Col>
      <Col xs={6} md={6} sm={12}>
        <Row>
          <Badge pill className='custom-badge' style={{ fontSize: '1.2em' }}>
            <i className="fa-solid fa-hand-peace" style={{ color: '#FFD43B', paddingRight: '10px', paddingLeft: '5px' }}></i> Olá, que bom te conhecer
          </Badge>
          <Row className='custom-text mt-4'>
            <strong>
              Eu me chamo Renan!<br/>
              Seja bem vindo a minha Página
            </strong>
            <div className="subT mt-3">
              PROGRAMADOR FRONTEND
            </div>
          </Row>
        </Row>
        <Row className='mt-5'>
       
                <Car />
          
        </Row>
      </Col>
      

    </Container>
    
  </>
  );
}

export default Home;

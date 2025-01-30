import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { send } from '@emailjs/browser';
import { 
  Container, 
  Row, 
  Col, 
  Button, 
  Card, 
  Carousel, 
  Form, 
  Modal 
} from 'react-bootstrap';

function App() {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert]= useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit =(event)=>{
    event.preventDefault();

    const templateParams={
        from_name: event.target.formBasicName.value,
        from_email: event.target.formBasicEmail.value,
        message: event.target.formBasicMessage.value,
        to_email: "info@autosfcm.com"
    };

    send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_USER_ID'
    ).then((response) => {
        console.log('Correo electrónico enviado con éxito!', response.status, response.text);
        setShowAlert(true); // Mostrar alerta de éxito
        event.target.reset(); // Limpiar el formulario
      })
      .catch((err) => {
        console.error('Error al enviar el correo electrónico:', err);
    
  });



  return (
    <div>
      {/* Hero */}
      <Container 
        fluid 
        className="py-5" 
        style={{ 
          backgroundImage: "url('img/hero.jpg')", 
          backgroundSize: 'cover', 
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          color: 'white' 
        }}
      >
        <Container>
          <h1 className="display-4">Encuentra tu vehiculo ideal en nuestra Importadora de vehiculos FCM </h1>
          <p className="lead">
            Tenemos una amplia selección de vehiculos. Nos especialimos en pickups 4x4 ideal para tus aventuras off-road.
          </p>
          <Button variant="primary" size="lg" onClick={handleShow}>Ver modelos</Button>
        </Container>
      </Container>

      {/* Características */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Características que te encantarán</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="img/seguridad.jpg" />
              <Card.Body>
                <Card.Title>Seguridad</Card.Title>
                <Card.Text>
                  Nuestros vehículos cuentan con los sistemas de seguridad más avanzados para protegerte a ti y a tu familia.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="img/tecnologia.jpg" />
              <Card.Body>
                <Card.Title>Tecnología</Card.Title>
                <Card.Text>
                  Disfruta de la última tecnología en conectividad, entretenimiento y asistencia al conductor.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="img/diseno.jpg" />
              <Card.Body>
                <Card.Title>Diseño</Card.Title>
                <Card.Text>
                  Vehículos con un diseño moderno y elegante que te harán destacar en la carretera.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="img/diseno.jpg" />
              <Card.Body>
                <Card.Title>Financiamento</Card.Title>
                <Card.Text>
                  Te ofrecemos varias opciones de financiamiento ya sea propio o por medio de nuestros bancos
                  BAC La vivienda. Para mas informacion visitanos en nuestras sucursal.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Modelos (Modal) */}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Nuestros Modelos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn-api.toyotacr.com/toyotacr_website/uploads/gallery/08d58a04d32a65ec3999406f1a28675241f3e690.png"
                alt="Modelo 1"
              />
              <Carousel.Caption sx={{color: "#000000"}} >
                <h3>Hilux</h3>
                <p>Hilux 2.8L 2025</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2023/10/isuzu-d-max-2024-3191156.jpg?tf=1200x"
                alt="Modelo 2"
              />
              <Carousel.Caption>
                <h3>Isuzu D-Max</h3>
                <p>Isuzu D-Max 2024</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://mitsubishi.cr/wp-content/uploads/2020/03/1-621x386-Negro-1.png"
                alt="Modelo 3"
              />
              <Carousel.Caption>
                <h3>L200</h3>
                <p>Totalmente Nuevo L200 MODO Bestia</p>
              </Carousel.Caption>
            </Carousel.Item> 

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn-api.toyotacr.com/toyotacr_website/uploads/gallery/d1ef79d8b2f17a810dc88f0b6bb9541f643be593.png"
                alt="Modelo 4"
              />
              <Carousel.Caption>
                <h3>Land Cruiser Pickup Hard Top 2025</h3>
                <p>Un pickup diferente, único en su especie, con una línea ruda y un formidable desempeño.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://dercocenter-api.s3.us-east-1.amazonaws.com/images/carcontent/1708115681-injjTdwkUK.webp"
                alt="Modelo 5"
              />
              <Carousel.Caption>
                <h3>Suzuki Jimny</h3>
                <p>rojo techo negro</p>
              </Carousel.Caption>
            </Carousel.Item>

        
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Contacto */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Contáctanos</h2>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu nombre" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formBasicMessage">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
    </div>
  );
}};

export default App;
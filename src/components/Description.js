import React from 'react';
import '../style/Description.css';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
export const Description = (props) => {
const {tittle,Descripcion} = props


  return(

<div className="Description">
<div className="Menu">
<>
  
  <br />
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/Description"> <img className="Logo" src="../img/Yeah2.jpg" alt="Logo"/></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/Description">Inicio</Nav.Link>
      <Nav.Link href="/Restaurantes">Restaurantes</Nav.Link>
      <Nav.Link href="/TipoPedido">Tipo de pedido</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Nombre del producto" className="mr-sm-2" />
      <Button variant="outline-light">Buscar</Button>
    </Form>
  </Navbar>
</>
</div>
<div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
<img className="Logo5" src="http://www.pngmart.com/files/8/Menu-PNG-Transparent.png" alt="Logo5" />
  <h1 className="display-4">¡Disfruta Smart Menú!</h1>
  <p className="lead">
  Haz tu pedido en linea y tu mesa
  </p>
  <div>
  <Link to="/TipoPedido" ><button className= "btn btn-dark" type="submit" href="https://x5ccd.csb.app/tipopedido" >
        Pedir
      </button></Link>
    </div>
</div>
<div className="Footer">
       <footer className="container">
  <div className="row">
    <div className="col-12 col-md">
    <img className="Logo4" src="./img/Yeah2.jpg" alt="Logo4" />
    <img className="Logo4" src="https://www.technoscore.com/images/services/react-js-icon.png" alt="Logo4" />
    <img className="Logo4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" alt="Logo4" />
    <img className="Logo4" src="https://www.jcmunera.com/wp-content/uploads/2018/04/9FAD5BD7-14DD-4B44-8250-E65F9EDDFC8A.png" alt="Logo4" />
    </div>
    <div className="col-6 col-md">
      <h4>Integrantes</h4>
      <ul className="list-unstyled text-small">
        <li><a className="text-light" href="/">*Jorge Grisales</a></li>
        <li><a className="text-light" href="/">*Mariana Herrera</a></li>
        <li><a className="text-light" href="/">*Mateo Guillen</a></li>
        <li><a className="text-light" href="/">*Miguel Angel Tamayo</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h4>Redes sociales</h4>
      <ul className="list-unstyled text-small">
      <img className="Logo3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="Logo3" /> <li><a className="text-light" href="/">Instagram: Smart_Menu</a></li>
      <img className="Logo3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png" alt="Logo3" /> <li><a className="text-light" href="/">Facebook: Smart Menu</a></li>
      <img className="Logo3" src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png" alt="Logo3" /> <li><a className="text-light" href="/">Google: smartmenuservices@gmail.com</a></li>
      <img className="Logo3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/1200px-WhatsApp_logo-color-vertical.svg.png" alt="Logo3" /> <li><a className="text-light" href="/">WhatsApp: +57 345 2345674</a></li>
      <img className="Logo3" src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-6.png" alt="Logo3" /> <li><a className="text-light" href="/">Twitter: Smart Menu</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h4>Información</h4>
      <ul className="list-unstyled text-small">
        <li><a className="text-light" href="/">Somos un grupo de estudiantes que busca actuar de manera visionaria con un servicio unico y diferente, para los establecimientos de comida y su publico. Orientados a la mejora de la metodologia de los restaurantes, brindamos algoritmos de gran rapidez y eficacia para una mejor experiencia en pedidos y entregas.            </a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h4>Términos y Condiciones</h4>
      <ul className="list-unstyled text-small">
        <li><a className="text-light" href="/">Protegido por QR y @#</a></li>
        <li><a className="text-light" href="/">Politica de Datos seguros</a></li>
        <li><a className="text-light" href="/">Privacidad y anonimato</a></li>
        <li><a className="text-light" href="/">E-Commerce terms</a></li>
        <li><a className="text-light" href="/">Binding Contract</a></li>
        <li><a className="text-light" href="/">PayPal terms</a></li>
        <li><a className="text-light" href="/">Google Maps terms</a></li>
      </ul>
    </div>
  </div>
</footer>
    </div>
</div>
  
)
};
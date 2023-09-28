import './App.css';

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav  from 'react-bootstrap/Nav';
import NavDropdown  from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/esm/Card';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Write } from './components/Write.js';
import "bootstrap/dist/css/bootstrap.min.css";
import bug from './assets/bug.jpg'
import write from './assets/WRITE.jpg'
import spell from './assets/SPELL.jpg'
import wordlist from './assets/WORDLIST.jpg'
import flashcardspic from './assets/flashcards.jpg'
import test from './assets/TEST.jpg'

function App() {
  return (
    
  
    <div className="App">  
      <header>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav hidden className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </header>   
        <main>
        



        


        <Container className='pb-5'>
      <Row className="px-4 my-5">
        <Col sm={6}>
          <Image
          src={bug}
          fluid
          rounded
          />
        </Col>
        <Col sm={6}>
          <h1 class="slideInRight font-weight-heavy">Efficient Learning Sanctuary</h1>
          <p class="slideInRight mt-4">Each module below is a different activity that can be used to take in and retain knowledge regarding the subject of Biology</p>
        </Col>
      </Row>
      </Container>
      
  <Container className='pb-5'>
  <Row className="px-4 my-5">
      <Col className="px-4 my-5">
      <Card className = 'text-center' style={{ width: '25rem', background: 'transparent', border: 'transparent'}}>
      <a href="/Write" ><Card.Img class="rounded fimage"  variant="top" src={write} />
      </a>
      <Card.Body>
        <Card.Title>WRITE</Card.Title>
      </Card.Body>
    </Card>
      </Col>
    
      <Col className="px-4 my-5">
      <Card className = 'text-center' style={{ width: '25rem', background: 'transparent', border: 'transparent'}}>
      <a href="/List"><Card.Img class="rounded fimage" variant="top" src={wordlist} />
      </a>
      <Card.Body>
        <Card.Title>WORD LIST</Card.Title>
      </Card.Body>
    </Card>
      </Col>
     
      <Col className="px-4 my-5">
      <Card className = 'text-center' style={{ width: '25rem', background: 'transparent',  border: 'transparent'}}>
      <a href="/Spell"><Card.Img class="rounded fimage" variant="top" src={spell} />
      </a>
      <Card.Body>
        <Card.Title>SPELL</Card.Title>
      </Card.Body>
    </Card>
      </Col>


      <Col className="px-4 my-5">
      <Card className = 'text-center' style={{ width: '25rem', background: 'transparent', border: 'transparent'}}>
      <a href="/Flashcards" ><Card.Img class="rounded fimage" variant="top" src={flashcardspic} />
      </a>
      <Card.Body>
        <Card.Title>FLASHCARDS</Card.Title>
      </Card.Body>
    </Card>
      </Col>

      <Col className="px-4 my-5">
      <Card className = 'text-center' style={{ width: '25rem', background: 'transparent', border: 'transparent'}}>
      <a href="/Test" ><Card.Img class="rounded fimage" variant="top" src={test} />
      </a>
      <Card.Body>
        <Card.Title>TEST</Card.Title>
      </Card.Body>
    </Card>
      </Col>
</Row>
    </Container>
    </main>
    </div>


  );
}

export default App;

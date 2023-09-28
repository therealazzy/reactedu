import './Flashcard.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav  from 'react-bootstrap/Nav';
import NavDropdown  from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Card from 'react-bootstrap/card';
import data from "../data/FlashcardData";
import { useState, useEffect } from 'react';
import FlashcardList from './FlashcardList';
import CountDown from './CountDown.js';






export function Flashcards(){


    const [flashcards, setFlashcards] = useState(data)
    const [flip, setFlip] = useState(false)
    
    return(
        <div className="Write">
      <header>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav hidden className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </header>
      <main>
      <p className='count' ><CountDown href='/' seconds={1200}/></p>
      <Col class="cardcol"className="align-items-end px-4 my-5" style={{background: '#ffe4c4'}}>
        
        <FlashcardList flashcards={flashcards}/>
        
        
      </Col>
      
        
      </main>


       </div>
    );
}


export default Flashcards;
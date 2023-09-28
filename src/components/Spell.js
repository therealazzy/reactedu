import './Write.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav  from 'react-bootstrap/Nav';
import NavDropdown  from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Card from 'react-bootstrap/card';
import data from "../data/write-data";
import { useState, useEffect } from 'react';
import CountDown from './CountDown.js';


export function Spell(){

    const [userAnswer, setUserAnswer] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    let rand
    let correctAnswer = data[currentQuestion].title
  
    const buttonAllowed = async () => {
      if (userAnswer.length > 0) {
        const checkButton = await document.querySelector(".check-button");
  
        checkButton.style.cursor = "pointer";
        checkButton.style.color = "#fff";
        checkButton.style.backgroundColor = "#58cc02";
        checkButton.style.borderColor = "#58a700";
      } else {
        const checkButton = await document.querySelector(".check-button");
  
        checkButton.style.cursor = "auto";
        checkButton.style.color = "#afafaf";
        checkButton.style.backgroundColor = "#EFEFEF";
        checkButton.style.borderColor = "transparent";
      }
    };
  
  
    const checkComplete = async () => {
      if (userAnswer.length > 0 && userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        const tryAgainTxt = await document.querySelector(".try-again-txt");
  
        setIsOpen(true);
        tryAgainTxt.style.display = "none";
        rand = Math.floor(Math.random() * 10);
        setCurrentQuestion(rand)
        setUserAnswer('')
  
        
  
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
      } else if (userAnswer.length > 0) {
        const tryAgainTxt = await document.querySelector(".try-again-txt");
        tryAgainTxt.style.display = "block";
      }
    };
  
    
  
    useEffect(() => {
      buttonAllowed();
    }, [userAnswer]);
  
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
        <Row className="align-items-end px-4 my-5 ">
          <Col>
            <Card className = 'text-center ' style={{ width: '50rem', background: 'transparent', border: '2 solid black', margin: 'auto'}}>
              <Card.Body>
                <Card.Title>{data[currentQuestion].title}</Card.Title>
                
                <textarea className="text-box"
                placeholder={data[currentQuestion].title}
                value={userAnswer}
                onChange={(e) =>
                  setUserAnswer((prev) => (prev = e.target.value))
                }
                ></textarea>
                 <p className="try-again-txt">Try again.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <button size="lg" onClick={checkComplete} className="check-button">Complete</button>
          </Row>
          <Row>
          <p className='count' ><CountDown seconds={1200}/></p>
        </Row>
          
        </main>
  
  
         </div>
      );


}


export default Spell;
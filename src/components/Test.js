import './Test.css'
import Navbar from 'react-bootstrap/Navbar'
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Nav  from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Card from 'react-bootstrap/card';
import data from "../data/write-data";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import questions from '../data/Questions';
import CountDown from './CountDown.js';

export function Test(){
    const form = useRef();
    let inputs = document.querySelectorAll('input');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c3uvcrf', 'template_e99f7li', form.current, 'r2Q0HF7doOnX9c_37')
          .then((result) => {
              console.log(result.text);
              inputs.forEach(input => input.value='')


          }, (error) => {
              console.log(error.text);
          });
        }

    return(
        <div className='Test'>
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

                <p className='count' ><CountDown seconds={1200}/></p>

                <form className='tForm' autocomplete='off' ref={form} onSubmit={sendEmail}>
                    <input id='lab' type="text" placeholder="name" name="user_name" />
                    <label className='lab'>{questions[0].question}</label>
                    <input className='box' id='lab' type="text" name="ans1" />
                    <label className='lab'>{questions[1].question}</label>
                    <input className='box' id='lab' type="text" name="ans2" />
                    <label className='lab'>{questions[2].question}</label>
                    <input className='box' id='lab' type="text" name="ans3" />
                    <label className='lab'>{questions[3].question}</label>
                    <input className='box' id='lab' type="text" name="ans4" />
                    <label className='lab'>{questions[4].question}</label>
                    <input className='box' id='lab' type="text" name="ans5" />
                    <label className='lab'>{questions[5].question}</label>
                    <input className='box' id='lab' type="text" name="ans6" />
                    <label className='lab'>{questions[6].question}</label>
                    <input className='box' id='lab' type="text" name="ans7" />
                    <label className='lab'>{questions[7].question}</label>
                    <input className='box' id='lab' type="text" name="ans8" />
                    <label className='lab'>{questions[8].question}</label>
                    <input className='box' id='lab' type="text" name="ans9" />
                    <label className='lab'>{questions[9].question}</label>
                    <input className='box' id='lab' type="text" name="ans10" />
                    <label className='lab'>{questions[10].question}</label>
                    <input className='box' id='lab' type="text" name="ans11" />
                    <label className='lab'>{questions[11].question}</label>
                    <input className='box' id='lab' type="text" name="ans12" />
                    <label className='lab'>{questions[12].question}</label>
                    <input className='box' id='lab' type="text" name="ans13" />
                    <label className='lab'>{questions[13].question}</label>
                    <input className='box' id='lab' type="text" name="ans14" />
                    <label className='lab'>{questions[14].question}</label>
                    <input className='box' id='lab' type="text" name="ans15" />
                    <label className='lab'>{questions[15].question}</label>
                    <input className='box' id='lab' type="text" name="ans16" />
                    

                    
         </form>
                    <button href="/" size="lg" onClick={sendEmail} className="check-button">Submit</button>


                </main>
        </div>
    )


}





export default Test;
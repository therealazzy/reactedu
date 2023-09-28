import './List.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav  from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Card from 'react-bootstrap/card';
import data from "../data/write-data";




export function List(){


    return(
        <div className="List">

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

            <Row className='px-4 my-5'>

                {data.map(data=>{
                    return(

                <Card class="cards" className='text-center' style={{width: '30rem', background: "transparent"}}>
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>{data.info}</Card.Text>
                    </Card.Body>
                </Card>


                    )

                

                })}




            </Row>



       















        </main>
        </div>
    )



}




export default List;
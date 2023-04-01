import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function ColorSchemesExample() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="home">AI CONTEST</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="product-description">Product Description</Nav.Link>
            <Nav.Link href="cold-emails">Cold Emails</Nav.Link>
            <Nav.Link href="tweets">Tweets</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        

      
    </div>
  );
}

export default ColorSchemesExample;
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

export const NavBar = ({children}) => 
{
    return (
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/test-app/">Torben Bernhard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/test-app/about">About Me</Nav.Link>
            <Nav.Link href="/test-app/work">My Work</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
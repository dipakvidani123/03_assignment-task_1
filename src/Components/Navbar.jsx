import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ChevronDown, Info } from "lucide-react";


export default function My_Navbar() {
    
    return (
        <>
            <Navbar className='bg-light shadow-sm py-2' expand="lg">
                <Container className=' fw-bold text-dark'>
                    <Navbar.Brand className='fw-bold' style={{cursor:'pointer'}}>
                        INFOLABZ
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto text-dark">

                            <Nav.Link href="#home" className='text-dark fw-medium'>Home</Nav.Link>

                            <NavDropdown
                                title={<span className='text-dark fw-medium'>Company <ChevronDown size={16} />  </span>}
                                className="text-secondary"
                                id="company-nav-dropdown"
                                
                            >
                                <NavDropdown.Item href="#about">About Us</NavDropdown.Item>
                                <NavDropdown.Item href="#services">Our Services</NavDropdown.Item>
                                <NavDropdown.Item href="#testimonials">Testimonials</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#contact">Contact Us</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="#link" className="fw-medium text-dark">Services</Nav.Link>
                            <Nav.Link href="#link" className="fw-medium text-dark">Technologies</Nav.Link>
                            <Nav.Link href="#link" className="fw-medium text-dark">Portfolio</Nav.Link>
                            <Nav.Link href="#link" className="fw-medium text-dark">Careears</Nav.Link>

                        </Nav>
                        <Nav className='"ms-auto"'>
                            <Nav.Link href="#link" className="fw-medium text-dark">Internship<Info size={16} className="ms-1 text-dark"     /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
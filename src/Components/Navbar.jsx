import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ChevronDown, Info } from "lucide-react";


export default function My_Navbar() {
    
    return (
        <>
            <Navbar className='navbar bg-white  border-body' expand="lg">
                <Container className='text-dark'>
                    <Navbar.Brand className='fw-bold' style={{cursor:'pointer'}}>
                        INFOLABZ
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-5 text-dark">

                            <Nav.Link href="#home" className='text-dark'>Home</Nav.Link>

                            <NavDropdown
                                title={<span>Company <ChevronDown size={16} />  </span>}
                                className="text-secondary"
                                id="company-nav-dropdown"
                                
                            >
                                <NavDropdown.Item href="#about">About Us</NavDropdown.Item>
                                <NavDropdown.Item href="#services">Our Services</NavDropdown.Item>
                                <NavDropdown.Item href="#testimonials">Testimonials</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#contact">Contact Us</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="#link" className='text-secondary'>Services</Nav.Link>
                            <Nav.Link href="#link" className='text-secondary'>Technologies</Nav.Link>
                            <Nav.Link href="#link" className='text-secondary'>Portfolio</Nav.Link>
                            <Nav.Link href="#link" className='text-secondary'>Careears</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#link" className='text-dark mx-5'>Internship<Info size={16} className="ms-2 text-dark" /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
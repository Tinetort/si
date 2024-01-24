import { FaPhoneAlt } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Image from 'react-bootstrap/Image'
import Simon from '../images/simon-picture.png'

function NavbarSimon() {
    return (
        <>
            {['sm'].map((expand) => (
                <Navbar
                    key={expand}
                    expand={expand}
                    className="bg-body-tertiary mb-3 sticky-top border border-warning"
                    bg="light"
                    data-bs-theme="light"
                >
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <Image className="ms-4" src={Simon} width="35px" />{' '}
                            <span className="text-warning fw-bold">
                                BETTER CALL
                            </span>{' '}
                            <span className="text-black fw-bold">Simon</span>
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                        />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                >
                                    <Image src={Simon} width="35px" /> Simon
                                    Handyman
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link
                                        className="text-dark fw-bold"
                                        href="#services"
                                    >
                                        Services
                                    </Nav.Link>
                                    <Nav.Link
                                        className="text-dark fw-bold"
                                        href="#gallery"
                                    >
                                        Gallery
                                    </Nav.Link>
                                    <Nav.Link
                                        className="text-dark fw-bold"
                                        href="#faq"
                                    >
                                        FAQ
                                    </Nav.Link>
                                    <Nav.Link
                                        className="text-dark fw-bold"
                                        href="#contact"
                                    >
                                        Contact Us
                                    </Nav.Link>
                                    <Nav.Link>
                                        <a
                                            className="text-decoration-none fs-4 mx-2 text-black"
                                            href="https://www.instagram.com/simonhandyman_sd/"
                                        >
                                            <FaInstagram />
                                        </a>{' '}
                                        <a
                                            className="text-decoration-none fs-4 mx-2 text-black"
                                            href="tel:+1(619)657-6172"
                                        >
                                            <FaPhoneAlt />
                                        </a>
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default NavbarSimon

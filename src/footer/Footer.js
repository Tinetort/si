import { FaInstagram } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import Simon from '../images/simon-picture.png'

function Footer() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#">
                    <Image className="ms-4 fs-1" src={Simon} width="60px" />{' '}
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="m-2">
                    </Navbar.Text>
                    <Navbar.Text className="m-2">
                        <FaInstagram className="fs-4" />{' '}
                        <a
                            className="text-decoration-none"
                            href="https://www.instagram.com/simonhandyman_sd/"
                        >
                            Instagram
                        </a>
                    </Navbar.Text>
                    <Navbar.Text className="m-2">
                        <FaPhoneAlt />{' '}
                        <a
                            className="text-decoration-none"
                            href="tel:+1(619)657-6172"
                        >
                            +1(619)657-6172
                        </a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Footer

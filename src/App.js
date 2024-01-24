import { HelmetProvider } from 'react-helmet-async'
import { Helmet } from 'react-helmet-async'
import './App.css'
import Navbar from './navbar/Navbar'
import MainImg from './mainImg/MainImg'
import Services from './services/Services'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CarouselGal from './carousel/Carousel'
import Faq from './faq/Faq'
import Footer from './footer/Footer'
import { Container } from 'react-bootstrap'
import ContactForm from './contactForm/ContactForm'

function App() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Simon Handyman</title>
                <meta
                    name="description"
                    content="Your local handyman. Proudly work in San Diego, CA."
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Simon Handyman" />
                <meta
                    property="og:description"
                    content="Your local handyman. Proudly work in San Diego, CA."
                />
            </Helmet>
            <Navbar />
            <Row>
                <Col>
                    <MainImg />
                    <section id="services">
                        <Services />
                    </section>
                    <Container>
                        <section id="gallery">
                            <CarouselGal />
                        </section>
                    </Container>
                    <section id="faq" className="p-4">
                        <Faq />
                    </section>
                    <section id="contact" className="p-4">
                        <ContactForm />
                    </section>
                </Col>
            </Row>
            <Footer />
        </HelmetProvider>
    )
}

export default App

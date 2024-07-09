import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ServAccordion from './Accordion'

function Services() {
    return (
            <Row className='d-flex flex-column mt-5 border border-warning p-4 m-4 rounded-top'>
                <Col className='d-flex justify-content-center align-items-center flex-column'>
                    <p className="service text-center fs-2"> Our Services</p>
                    <p className='rate text-center fs-3 mb-4'>$75 hourly rate</p>
                </Col>
                <Col>
                    <ServAccordion />
                </Col>
            </Row>
    )
}

export default Services

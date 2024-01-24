import { Container, Row, Col, Image } from 'react-bootstrap'
import bgImage from '../images/visitka.png'

function MainImg() {
    return (
        <Container fluid>
            <Row>
                <div className="position-relative text-center cover no-repeat">
                    <Col className="text-center">
                        <Image className='rounded' fluid src={bgImage} alt="simon" width="100%" />
                        <div className="position-absolute top-50 start-50 translate-middle text-white">
                            {/* <h1>Simon Handyman</h1>
                            <h3>Your local handyman.</h3>
                            <p>Proudly work in San Diego, CA</p> */}
                        </div>
                    </Col>
                </div>
            </Row>
        </Container>
    )
}

export default MainImg

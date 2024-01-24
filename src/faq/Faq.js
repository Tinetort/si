import Accordion from 'react-bootstrap/Accordion'
import faqData from '../data/faqData'


function Faq() {
    return (
      <>
        <p className="fs-1 text-center m-2">- FAQ -</p>
        <Accordion defaultActiveKey="0">
          {faqData.map((item, index) => (
            <Accordion.Item key={index} eventKey={index.toString()}>
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>{item.answer}</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </>
    );
  }
  
  export default Faq;
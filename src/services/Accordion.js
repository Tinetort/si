import Accordion from 'react-bootstrap/Accordion'
import accordionData from '../data/accordionData'

function DataAccordionItem({ header, items }) {
    return (
      <Accordion.Item eventKey={header}>
        <Accordion.Header>{header}</Accordion.Header>
        <Accordion.Body>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    );
  }

function ServAccordion() {
    return (
        <Accordion>
             {accordionData.map((dataItem) => (
        <DataAccordionItem key={dataItem.header} header={dataItem.header} items={dataItem.items} />
      ))}
        </Accordion>
    )
}

export default ServAccordion

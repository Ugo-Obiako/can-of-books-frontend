import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';





export default function Book(props) {
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://placehold.co/600x400" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
            </Card.Body>
        </Card>

    )
}



import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';





export default function Book(props) {
    return (
        <Carousel.Item>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Carousel.Item>
    )
}



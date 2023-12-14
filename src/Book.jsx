import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';





export default function Book(props) {

    function handleDelete() {
        props.onDelete(props.id);
        console.log(props.id)
    }

    function handleUpdate() {
        props.onUpdate();
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://placehold.co/600x400" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Button onClick={handleDelete}>Delete Book</Button>
                <Button onClick={handleUpdate}>Update Book</Button>
                <Card.Text>
                    {props.description} 
                </Card.Text>
            </Card.Body>
            <Card.Footer>


            </Card.Footer>
        </Card>

    )
}



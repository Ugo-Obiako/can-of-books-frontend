import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';




export default function Book(props) {

    function handleDelete() {
        props.onDelete(props.id);
        console.log(props.id)
    }

    function handleUpdate() {
        props.onUpdate(props.book);
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://placehold.co/600x400" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Stack direction='horizontal' gap={1}>
                    <Button onClick={handleDelete}>Delete Book</Button>
                    <Button onClick={handleUpdate}>Update Book</Button>
                </Stack>
                <Card.Text>
                    {props.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer>


            </Card.Footer>
        </Card>

    )
}



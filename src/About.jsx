import ListGroup from 'react-bootstrap/ListGroup';

function Profile() {
  return (
    <ListGroup>
      <ListGroup.Item variant='primary'>Developed By:</ListGroup.Item>
      <ListGroup.Item action href='https://github.com/Ugo-Obiako' target='_blank'>Ugo Obiako</ListGroup.Item>
      <ListGroup.Item action href='https://github.com/kaylubh' target='_blank'>Caleb Hemphill</ListGroup.Item>
      <ListGroup.Item variant='primary'>GitHub Repos:</ListGroup.Item>
      <ListGroup.Item action href='https://github.com/Ugo-Obiako/can-of-books-frontend' target='_blank'>App Client</ListGroup.Item>
      <ListGroup.Item action href='https://github.com/kaylubh/can-of-books-backend' target='_blank'>App Server</ListGroup.Item>
    </ListGroup>
  )
}

export default Profile;

import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';




export default function Book (props) {
    return ( 
      <Carousel.Item>
        <Carousel.Caption>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    )
}



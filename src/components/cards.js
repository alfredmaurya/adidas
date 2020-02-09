
import React, {useState}from 'react';
import {Carousel} from 'react-bootstrap';
function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };

   
  
    return (
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://content.adidas.co.in/static/hero/SUPERSTAR_1366x677_26th_Jan_A.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://content.adidas.co.in/static/hero/HOC_1366x677_16th_Jan.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://content.adidas.co.in/static/hero/MUTATOR_1366x677_28th_Jan_A.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }


    
      
     // render(<ControlledCarousel />);
   
 export default ControlledCarousel;

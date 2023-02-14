import React from 'react';
import { Carousel } from 'react-bootstrap';
import Brand1 from '../../../assests/Brand/Brand1.jpeg'
import Brand2 from '../../../assests/Brand/Brand2.png'

const BrandCarosel = () => {
    return (
        <div>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Brand1}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Brand2}
          alt="Second slide"
        />

    
      </Carousel.Item>
    
    </Carousel>
        </div>
    );
};

export default BrandCarosel;
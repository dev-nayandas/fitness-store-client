import React from 'react';
import { Carousel } from 'react-bootstrap';
import { createRoutesFromChildren } from 'react-router-dom';


// carusole used here

const Banner = () => {
  return (
    <div className='banner '>
      <Carousel fade>
        <Carousel.Item>
          <img style={{ height: '500px' }}
            className="d-block w-100"
            src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Largest Stock</h3>
            <p>We have largest stock of world famous Gym eqruipment</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: '500px' }}
            className="d-block w-100"
            src="https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Manage Your Store</h3>
            <p>You can manage your items easily. Our company offer you best deals for you</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: '500px' }}
            className="d-block w-100"
            src="https://images.pexels.com/photos/4164510/pexels-photo-4164510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import logo from './assets/logogencives.png';
import somnanbule from './assets/images/somnanbule.jpg';
import shycat from './assets/images/shycat.jpg';
import waterhouse from './assets/images/waterhouse.jpg';
import leanne from './assets/images/leanne.jpg';
import fastbraces from './assets/images/fastbraces.jpg';


function App() {
  const [activeIndex, setActiveIndex] = useState(0); // First carousel active index
  const [activeIndex2, setActiveIndex2] = useState(0); // Second carousel active index

  useEffect(() => {
    const handleScroll = (event) => {
      const delta = Math.sign(event.deltaY);
      const newIndex = (activeIndex + delta + 5) % 5;

      setActiveIndex(newIndex);
      setActiveIndex2(newIndex);
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [activeIndex, activeIndex2]);

  const handlePrevious = () => {
    const newActiveIndex = activeIndex === 0 ? 4 : activeIndex - 1;
    setActiveIndex(newActiveIndex);
    setActiveIndex2(newActiveIndex);
  };

  const handleNext = () => {
    const newActiveIndex = (activeIndex + 1) % 5;
    setActiveIndex(newActiveIndex);
    setActiveIndex2(newActiveIndex);
  };

  return(
    <Container fluid className="custom-container main-zone">
      <Row>
        <Col sm={8} className="d-flex align-items-center justify-content-center">
          <img src={logo} alt="Logo" className="logo" />
          {/* Custom previous and next indicators */}
          <div className="mt-3 previousnext">
            <button className="btn btn-primary" onClick={handlePrevious}>
              previous
            </button>
            <button className="btn btn-primary" onClick={handleNext}>
              next
            </button>
          </div>
          <Carousel
            interval={null}
            activeIndex={activeIndex}
            indicators={false}
            onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
          >
            {/* Slides */}
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                style={{ objectFit: 'contain' }}
                src={somnanbule}
                alt="Slide 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                style={{ objectFit: 'contain' }}
                src={shycat}
                alt="Slide 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                style={{ objectFit: 'contain' }}
                src={waterhouse}
                alt="Slide 3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                style={{ objectFit: 'contain' }}
                src={leanne}
                alt="Slide 4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                style={{ objectFit: 'contain' }}
                src={fastbraces}
                alt="Slide 5"
              />
            </Carousel.Item>
          </Carousel>
          
        </Col>

        <Col sm={4} className="d-none d-lg-block">
          {/* Touch zone for the second carousel */}
          <div className="touch-zone">
            <Carousel
              interval={null}
              activeIndex={activeIndex2}
              indicators={false}
              onSelect={(selectedIndex) => setActiveIndex2(selectedIndex)}
            >{/* Your content for the second column */}
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                style={{ objectFit: 'contain' }}
                src={somnanbule}
                alt="Slide 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                style={{ objectFit: 'contain' }}
                src={shycat}
                alt="Slide 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                style={{ objectFit: 'contain' }}
                src={waterhouse}
                alt="Slide 3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                style={{ objectFit: 'contain' }}
                src={leanne}
                alt="Slide 4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                style={{ objectFit: 'contain' }}
                src={fastbraces}
                alt="Slide 5"
              />
            </Carousel.Item>
            </Carousel></div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;






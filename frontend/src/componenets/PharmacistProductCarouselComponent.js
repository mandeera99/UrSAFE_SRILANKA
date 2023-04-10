import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const PharmacistProductCarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src="/images/carousel/carousel-1.jpg"
          alt="First slide"
        />

        <Carousel.Caption>
          <LinkContainer to="/product-details">
            <h3>Best seller in panadol</h3>
          </LinkContainer>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src="/images/carousel/carousel-2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <LinkContainer to="/product-details">
            <h3>Best seller in C vitamin</h3>
          </LinkContainer>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src="/images/carousel/carousel-3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <LinkContainer to="/product-details">
            <h3>Best seller in penadeen</h3>
          </LinkContainer>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default PharmacistProductCarouselComponent;

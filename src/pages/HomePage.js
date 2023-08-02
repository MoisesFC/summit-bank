import { Carousel } from "react-bootstrap"
import coinImage from '../img/moneyCoins.jpg';
import houseImage from '../img/houseWide.jpg';
import creditCardImage from '../img/creditCardWide.jpg'

const HomePage = () => {
    return (
        <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img src={coinImage} className="carousel-image" alt="Coin" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={houseImage} className="carousel-image" alt="House" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={creditCardImage} className="carousel-image" alt="Credit Card" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
};

export default HomePage;
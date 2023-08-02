import {
    Carousel,
    Row,
    Col,
    Card,
    Container
} from "react-bootstrap";
import { Button } from "react-bootstrap";
import coinImage from '../img/moneyCoins.jpg';
import houseImage from '../img/houseWide.jpg';
import creditCardImage from '../img/creditCardWide.jpg'
import carImg from '../img/car.jpg';
import piggieImg from '../img/piggie.jpg';
import checkingImg from '../img/checking.jpg';

const HomePage = () => {
    return (
        <Container fluid className="p-0">
        <div >
            <Carousel className="mx-0">
                <Carousel.Item>
                    <img src={coinImage} className="carousel-image" alt="Coin" />
                    <Carousel.Caption className="carousel-caption-content">
                        <h3>High Yield CDs Accounts</h3>
                        <p className="hide-on-small-screen">Grow your savings with our high-yield CD rates, featuring guaranteed returns and flexible terms to fit your financial goals.</p>
                    </Carousel.Caption >
                </Carousel.Item>
                <Carousel.Item>
                    <img src={houseImage} className="carousel-image" alt="House" />
                    <Carousel.Caption className="carousel-caption-content">
                        <h3>Home Mortgage</h3>
                        <p className="hide-on-small-screen">Make your dream home a reality with our home mortgage offer, featuring competitive rates, flexible payment options, and expert guidance from start to finish.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={creditCardImage} className="carousel-image" alt="Credit Card" />
                    <Carousel.Caption className="carousel-caption-content">
                        <h3>Summit Platinum Card</h3>
                        <p className="hide-on-small-screen">Get the financial freedom you deserve with our credit card, featuring low introductory interest rates, rewards for every purchase, and worldwide fraud protection.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br />
            <Row className="cards-row px-0 px-md-4">
                <Col xs={12} md={4}>
                    <Card className="mb-4">
                        <Card.Img variant="top" src={checkingImg} />
                        <Card.Body>
                            <Card.Title>Checking</Card.Title>
                            <Card.Text>
                            Simplify your finances and take control of your money with our checking account offer, featuring no monthly fees, free online banking and bill pay, and access to over thousands of ATMs nationwide. With our account, you can manage your money with ease and enjoy the convenience of banking on your terms.
                            </Card.Text>
                            <Button variant="primary">Open Account</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card className="mb-4">
                        <Card.Img variant="top" src={piggieImg} />
                        <Card.Body>
                            <Card.Title>Savings</Card.Title>
                            <Card.Text>
                            Start saving for your future today with our savings account offer, featuring competitive interest rates and no monthly fees, plus easy access to your funds whenever you need them. With our account, you can achieve your financial goals and enjoy peace of mind knowing your money is safe and secure.
                            </Card.Text>
                            <Button variant="primary">Start Saving</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card className="mb-4">
                        <Card.Img variant="top" src={carImg} />
                        <Card.Body>
                            <Card.Title>Car Loans</Card.Title>
                            <Card.Text>
                            Start saving for your future today with our savings account offer, featuring competitive interest rates and no monthly fees, plus easy access to your funds whenever you need them. With our account, you can achieve your financial goals and enjoy peace of mind knowing your money is safe and secure.
                            </Card.Text>
                            <Button variant="primary">Check Rates</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
        </Container>
    )
};

export default HomePage;
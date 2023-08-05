import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import creditCardYellowImg from "../img/creditCardYellow.jpg";
import creditCardYellowWideImg from "../img/creditCardYellowHorizontal.jpg"

const CreditCardPage = () => {
    return (
        <Container fluid className="p-0">
            <div className="container-fluid text-dark p-3 jumbotron">
                <div className="container p-3">
                    <h1 className="display-3" ><strong>Summit Platinum® Credit Card</strong></h1>
                    <hr />
                    <a href="#" className="btn btn-success">Open Account</a>
                </div>
            </div>
            <img className="d-md-none" style={{width: "100%"}} src={creditCardYellowWideImg}/>
            <Container className="mx-auto mw-200 mw-md-200">
                <Row className="pt-5">
                    <Col className="d-none d-md-block md-4"></Col>
                    <Col className="md-4 text-center">
                        <strong>Cashback</strong>
                        <p className="p-4">With our credit card, you can earn cashback rewards on every purchase you make, putting money back in your pocket while enjoying the convenience of a credit card. Don't miss out on this opportunity to earn rewards while you spend! Check our cashback categories <a href="#cashback">Here</a></p>
                    </Col>
                    <Col className="d-none d-md-block md-4"></Col>
                </Row>
                <Row className="md-4 d-none d-md-flex  align-items-center text-center pb-5">
                    <Col className="md-4 d-flex flex-column justify-content-center align-items-center text-center">
                        <strong>Build your credit</strong>
                        <p className="p-4">Our credit card with a credit builder program can help you improve your credit score over time by reporting your responsible credit use to the credit bureaus. Take control of your credit and build a stronger financial future with our credit card.</p>
                    </Col>
                    <Col className="md-4 d-none d-md-flex flex-column justify-content-center align-items-center text-center">
                        <img src={creditCardYellowImg} height={450} alt="Credit Card" />
                    </Col>
                    <Col className="md-4 d-flex flex-column justify-content-center align-items-center text-center">
                        <strong>Purchase Protection</strong>
                        <p className="p-4">Protect your purchases with our credit card's purchase protection feature, which offers reimbursement for eligible items in the event of theft or accidental damage within a specified period of time after purchase. Don't let unexpected incidents ruin your shopping experience - shop with confidence knowing your purchases are protected.</p>
                    </Col>
                </Row>
                <Row className=" d-md-none ">
                <Col className="md-4 text-center">
                        <strong>Build your credit</strong>
                        <p className="p-4">Our credit card with a credit builder program can help you improve your credit score over time by reporting your responsible credit use to the credit bureaus. Take control of your credit and build a stronger financial future with our credit card.</p>
                    </Col>
                </Row>
                <Row className="d-md-none"> 
                <Col className="md-4 text-center">
                        <strong>Purchase Protection</strong>
                        <p className="p-4">Protect your purchases with our credit card's purchase protection feature, which offers reimbursement for eligible items in the event of theft or accidental damage within a specified period of time after purchase. Don't let unexpected incidents ruin your shopping experience - shop with confidence knowing your purchases are protected.</p>
                    </Col>
                </Row>
                <Row className="pb-5">
                    <Col className="d-none d-md-block md-4"></Col>
                    <Col className="md-4 text-center">
                        <strong>0% Interest for 18 Months</strong>
                        <p className="p-4">With our credit card, you can enjoy 0% interest on purchases and balance transfers for the first 18 months, giving you more time to pay off your balance without accruing interest charges. Take advantage of this opportunity to save money and get your finances on track with our credit card.</p>
                    </Col>
                    <Col className="d-none d-md-block md-4"></Col>
                </Row>
            </Container>
            <hr/>
        <h3 className="text-center p-3">Casback Categories</h3>

            <Accordion id="cashback" className="container" defaultActiveKey={['0']} >
      <Accordion.Item eventKey="0">
        <Accordion.Header>5% Cashback on Travel</Accordion.Header>
        <Accordion.Body>
        Our credit card offers a lucrative 5% cashback benefit on travel purchases, including flights, hotels, and rental cars. Whether you're a frequent traveler or planning a vacation, this benefit can help you save money and earn rewards on your travel expenses. Plus, with no annual fee, this credit card is a no-brainer for savvy travelers looking to maximize their rewards.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>3% On Dining and Entertainment</Accordion.Header>
        <Accordion.Body>
        Our credit card offers a generous 3% cashback benefit on dining and entertainment purchases, including restaurants, bars, movie theaters, and more. Whether you're a foodie or a fan of live events, this benefit can help you earn rewards on your favorite pastimes. Plus, with no foreign transaction fees, this credit card is perfect for those who love to dine and entertain both locally and abroad.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>1% On Everything Else</Accordion.Header>
        <Accordion.Body>
        With our credit card, you can earn 1% cashback on every purchase that doesn't fall into a specific rewards category, providing a simple and easy way to earn rewards on your everyday spending. This benefit is perfect for those who want to earn rewards on all their purchases without having to keep track of complicated rewards categories. Plus, with no annual fee, this credit card is a great option for anyone looking to earn rewards on their daily purchases.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Container>
    )
};

export default CreditCardPage;


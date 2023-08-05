import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import creditCardYellowImg from "../img/creditCardYellow.jpg";

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
            <img />
            <Container className="mx-auto mw-200 mw-md-200">
                <Row className="pt-5">
                    <Col className="d-none d-md-block md-4"></Col>
                    <Col className="md-4 text-center">
                        <strong>Cashback</strong>
                        <p className="p-4">With our credit card, you can earn cashback rewards on every purchase you make, putting money back in your pocket while enjoying the convenience of a credit card. Don't miss out on this opportunity to earn rewards while you spend! Check our cashback categories <a href="#">Here</a></p>
                    </Col>
                    <Col className="d-none d-md-block md-4"></Col>
                </Row>
                <Row>
                    <Col className="md-4 d-flex flex-column justify-content-center align-items-center text-center">
                        <strong>Build your credit</strong>
                        <p className="p-4">Our credit card with a credit builder program can help you improve your credit score over time by reporting your responsible credit use to the credit bureaus. Take control of your credit and build a stronger financial future with our credit card.</p>
                    </Col>
                    <Col className="md-4 d-flex flex-column justify-content-center align-items-center text-center">
                        <img src={creditCardYellowImg} height={450} alt="Credit Card" />
                    </Col>
                    <Col className="md-4 d-flex flex-column justify-content-center align-items-center text-center">
                        <strong>Purchase Protection</strong>
                        <p className="p-4">Protect your purchases with our credit card's purchase protection feature, which offers reimbursement for eligible items in the event of theft or accidental damage within a specified period of time after purchase. Don't let unexpected incidents ruin your shopping experience - shop with confidence knowing your purchases are protected.</p>
                    </Col>
                </Row>
                <Row className="pt-5 pb-5">
                    <Col className="d-none d-md-block md-4"></Col>
                    <Col className="md-4 text-center">
                        <strong>0% Interest for 18 Months</strong>
                        <p className="p-4">With our credit card, you can enjoy 0% interest on purchases and balance transfers for the first 18 months, giving you more time to pay off your balance without accruing interest charges. Take advantage of this opportunity to save money and get your finances on track with our credit card.</p>
                    </Col>
                    <Col className="d-none d-md-block md-4"></Col>
                </Row>
            </Container>
        </Container>
    )
};

export default CreditCardPage;


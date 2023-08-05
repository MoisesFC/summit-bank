import React from "react";
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { FaPercent } from 'react-icons/fa';
import { RiMap2Line } from 'react-icons/ri';
import { ImBlocked } from 'react-icons/im';
import { BsGift } from 'react-icons/bs';
import highIntImage from "../img/highInterest.jpg";
import usMapImg from "../img/usBannk.jpg";
import zeroFeeImage from "../img/zeroFees.jpg";
import rewardDollarImg from "../img/rewards.jpg";


const CheckingPage = () => {
    return (
        <Container fluid className="p-0">
            <div className="container-fluid text-dark p-3 jumbotron">
                <div className="container p-3" style={{ maxWidth: '1100px' }}>
                    <h1 className="display-3" ><strong>Summit Premium® Checking</strong></h1>
                    <hr />
                    <a href="#" className="btn btn-success">Open Account</a>
                </div>
            </div>
            <Container style={{ maxWidth: '1100px' }}>
            <Row className="container p-3 m-auto" >
                <Col col={3} className="text-center">
                    <a href="#" className="no-underline">
                        <FaPercent />
                        <br className="brIcon" />
                        High Interest Checking
                    </a>
                </Col>
                <Col col={3} className="text-center">
                    <a href="#" className="no-underline">
                        <RiMap2Line />
                        <br className="brIcon" />
                        Nationwide ATM Access
                    </a>
                </Col>
                <Col col={3} className="text-center">
                    <a href="#" className="no-underline">
                        <ImBlocked />
                        <br className="brIcon" />
                        No Fees Ever
                    </a>
                </Col>
                <Col col={3} className="text-center">
                    <a href="#" className="no-underline">
                        <BsGift />
                        <br className="brIcon" />
                        Checking Rewards
                    </a>
                </Col>
            </Row>

            <Card className="custom-card container border-0">
                <Card.Body className="custom-card-body">
                    <Row>
                        <Col md={4} className="text-left align-self-center">
                            <img
                                src={highIntImage}
                                alt="Sample"
                                className="img-fluid custom-image"
                            />
                        </Col>
                        <Col md={8} className="text-left align-self-center">
                            <Card.Title>High Interests</Card.Title>
                            <Card.Text>
                                Looking for a checking account that not only helps you manage your finances, but also earns you money? Our checking account offers a competitive interest rate that can help you make the most of your money. Unlike traditional checking accounts that offer little or no interest, our account is designed to help you earn more on the money you keep in your account. With no minimum balance requirement, you can start earning interest right away.
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
                <hr />
            </Card>
            <Card className="custom-card container border-0">
                <Card.Body className="custom-card-body">
                    <Row>
                        <Col md={4} className="text-center d-md-none">
                            <img
                                src={usMapImg}
                                alt="Sample"
                                className="img-fluid custom-image"
                            />
                        </Col>
                        <Col md={8} className="text-left align-self-center">
                            <Card.Title>Nationide ATM Access</Card.Title>
                            <Card.Text>
                                With access to a large network of ATMs across the country, you can easily withdraw cash, check your account balance, and make deposits wherever you are, without worrying about ATM fees or out-of-network charges. This means you can manage your finances and access your money from virtually anywhere, whether you're traveling, moving to a new city, or simply running errands around town. Additionally, many checking accounts with nationwide ATM access offer other benefits such as mobile banking, online bill pay, and overdraft protection.
                            </Card.Text>
                        </Col>
                        <Col md={4} className="text-left align-self-center">
                            <img
                                src={usMapImg}
                                alt="Sample"
                                className="img-fluid custom-image"
                            />
                        </Col>
                    </Row>
                </Card.Body>
                <hr />
            </Card>
            <Card className="custom-card container border-0">
                <Card.Body className="custom-card-body">
                    <Row>
                        <Col md={4} className="text-left align-self-center">
                            <img
                                src={zeroFeeImage}
                                alt="Sample"
                                className="img-fluid custom-image"
                            />
                        </Col>
                        <Col md={8} className="text-left align-self-center">
                            <Card.Title>No Fees Ever!</Card.Title>
                            <Card.Text>
                                With no monthly maintenance fees, overdraft fees, or ATM fees, you can keep more of your hard-earned money in your pocket. This means you can focus on your financial goals and not worry about unexpected costs or hidden fees. Plus, many checking accounts with zero fees offer other benefits such as mobile banking, online bill pay, and access to a large network of ATMs. With a checking account that provides zero fees, you can enjoy the convenience and security of a traditional checking account without the added costs.
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
                <hr />
            </Card>
            <Card className="custom-card container border-0">
                <Card.Body className="custom-card-body">
                    <Row>
                        <Col md={4} className="text-center d-md-none">
                            <img
                                src={rewardDollarImg}
                                alt="Sample"
                                className="img-fluid custom-image"
                            />
                        </Col>
                        <Col md={8} className="text-left align-self-center">
                            <Card.Title>Awesome Rewards</Card.Title>
                            <Card.Text>
                            By choosing our checking account, you will be taking advantage of our rewards program, you can earn cashback on debit card purchases, bonus interest rates, or other rewards for meeting certain requirements. This means you can earn money on your spending and put those rewards towards your financial goals. Additionally, many checking accounts with rewards programs also offer other benefits such as low fees, ATM access, and online banking features. With a checking account that provides rewards, you can enjoy the convenience and security of a traditional checking account, while also earning additional benefits.
                            </Card.Text>
                        </Col>
                        <Col md={4} className="text-center d-none d-md-flex align-items-center">
                            <img
                                src={rewardDollarImg}
                                alt="Sample"
                                className="img-fluid custom-image"
                            />
                        </Col>
                    </Row>
                </Card.Body>
                <hr />
            </Card>
            <Row>
                <Col md={12} className="text-center">
                    <Button color="success">Open Account Now!</Button>
                </Col>
            </Row>
            </Container>
        </Container>
    )
};

export default CheckingPage;
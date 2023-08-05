import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import retiredImg from "../img/james-hose-jr-6D58t6uZT5M-unsplash.jpg";

const RetirementPage = () => {

    const [currentAge, setCurrentAge] = useState('');
    const [retireAge, setRetireAge] = useState('');
    const [currentAmount, setCurrentAmount] = useState('');
    const [monthlyContribution, setMonthlyContribution] = useState('');
    const [annualRate, setAnnualRate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform retirement fund calculation here using the provided inputs
        // You can use the formulae for compound interest or any other method you prefer

        // Display or return the calculated retirement funds
    };

    return (
        <Container fluid className="p-0" >
            <div className="container-fluid text-dark p-3 jumbotron" >
                <div className="container p-3" style={{ maxWidth: '1100px' }}>
                    <h3 className="display-4" ><strong>Summit Max® Retirement Plan</strong></h3>
                    <hr />
                    <a href="#" className="btn btn-success">Schedule a call<br /> with an expert</a>
                </div>
            </div>
            <Container style={{ maxWidth: '1100px' }}>
                <Row className="pt-5">
                <Col className="text-center p-3" xs={12} md={4} style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <h4>Retirement Calculator</h4>
                        <p>Planning for retirement can be overwhelming, especially if you're not sure how much you need to save. This online retirement calculator can simplify the process by providing personalized estimates and helping you make informed decisions about your retirement savings.</p>
                        <hr />
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="currentAge" className="p-2">
                                <Form.Label >Current Age</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={currentAge}
                                    onChange={(e) => setCurrentAge(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="retireAge" className="p-2">
                                <Form.Label>Age Planning to Retire At</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={retireAge}
                                    onChange={(e) => setRetireAge(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="currentAmount" className="p-2">
                                <Form.Label>Current Amount Saved for Retirement</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={currentAmount}
                                    onChange={(e) => setCurrentAmount(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="monthlyContribution" className="p-2">
                                <Form.Label>Monthly Contribution</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={monthlyContribution}
                                    onChange={(e) => setMonthlyContribution(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="annualRate" className="p-2">
                                <Form.Label>Expected Annual Rate of Return (%)</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={annualRate}
                                    onChange={(e) => setAnnualRate(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Calculate Retirement Funds
                            </Button>
                        </Form>
                    </Col>
                    <Col xs={12} md={8}>
                        <img src={retiredImg} style={{width: "100%"}} className="pb-5"/>
                        <p>Many people put off planning for retirement, assuming they have plenty of time to save, but time has a way of flying by faster than we expect. This is why it's important to start planning as early as possible. Retirement planning is about setting goals for the future and taking steps to achieve those goals. The earlier you start planning, the more time your money has to grow, which can make a significant difference in your retirement savings.
Our retirement plan is designed to help you achieve your retirement goals by providing personalized investment options tailored to your individual needs. We understand that everyone has different financial goals, so we offer a variety of investment options to help you create a retirement plan that's right for you. Our experienced financial advisors are available to answer any questions you may have and help you make informed decisions about your retirement savings.
In short, planning for retirement is crucial for financial security in your golden years. Our retirement plan offers a range of investment options and expert advice to help you achieve your retirement goals. Don't wait until it's too late to start planning for your future; schedule an appointment with one of our financial advisors today to get started on your retirement plan.</p>
                    <Button className="success">
                        Brighten your future<br/>Schedule a call
                    </Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default RetirementPage;
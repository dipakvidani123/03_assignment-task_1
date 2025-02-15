import { Col, Container, Row } from "react-bootstrap";

export default function Full_w_cont() {
    return (
        <>
            <Row className="h-100  mb-3">
                <Col style={{ height: '50%' }} >
                    <img
                        src="https://png.pngtree.com/png-clipart/20231016/original/pngtree-professional-web-developer-3d-illustration-png-image_13322701.png"
                        style={{ height: '20rem',width:'100%' }}
                        className=" rounded-3 shadow-lg"
                        alt="" />
                </Col>
                <Col className="bg-secondary rounded-3 shadow-lg">
                    {/* <Container className=""> */}
                        <div className=" p-5 text-center d-flex flex-column text-light justify-content-center align-items-center " style={{height:'100%'}}>
                            <p className="fst-italic">
                                “I'd like to express my appreciation to Infolabz for the services they've provided.
                                Working with Infolabz has been a pleasure as they are highly professional and timely people.”
                            </p>
                            <p className="fw-bold">
                                Jainam Shah <br />
                                <span className="text-light fw-normal">Assistant General Manager</span>
                            </p>
                        </div>
                    {/* </Container> */}
                </Col>
            </Row>
        </>
    );

}
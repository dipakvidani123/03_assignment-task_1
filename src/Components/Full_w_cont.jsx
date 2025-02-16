import { Col, Row } from "react-bootstrap";

export default function Full_w_cont() {
    return (
        <>
            <Row className="h-100 mb-3 d-flex align-items-center flex-column flex-md-row">
                <Col md={6} className="bg-light rounded-3 shadow-lg d-flex">
                    {/* Image Section */}
                    <img
                        src="https://png.pngtree.com/png-clipart/20231016/original/pngtree-professional-web-developer-3d-illustration-png-image_13322701.png"
                        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                        className="rounded-3 shadow-lg"
                        alt=""
                    />
                </Col>
                <Col md={6} className="d-flex">
                    {/* Text Section */}
                    {/* <Container className=""> */}
                    <div className="p-4 p-md-5 text-center d-flex flex-column text-dark justify-content-center align-items-center w-100">
                        <p className="fst-italic">
                            “I'd like to express my appreciation to Infolabz for the services they've provided.
                            Working with Infolabz has been a pleasure as they are highly professional and timely people.”
                        </p>
                        <p className="fw-bold">
                            Jainam Shah <br />
                            <span className="text-dark fw-normal">Assistant General Manager</span>
                        </p>
                    </div>
                    {/* </Container> */}
                </Col>
            </Row>
        </>
    );
}

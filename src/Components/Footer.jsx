import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
    const quickLinks = [
        "Website Templates",
        "Website Builder",
        "Website Design",
        "Wix Features",
        "App Market",
        "Web Hosting"
    ];

    const solutions = [
        "Online Store",
        "Online Booking",
        "Restaurant Website",
        "Blog Website",
        "Portfolio Website",
        "eCommerce Website"
      ];

      
    return (
        <>
            <footer className="bg-dark text-light text-center  p-3">
                <Container>
                    <Row className="text-start">
                        <Col>
                            <p className="h5 fw-bold">Quick Links</p>

                            {quickLinks.map((item, index) => (
                                <li key={index} className='text-light text-start' style={{ listStyleType: "none" }}>
                                    {item}
                                </li>
                            ))}

                        </Col>

                        <Col>
                            <p className="text-light h5 fw-bold">Solutions</p>

                                {solutions.map((item, index) => (
                                    <li key={index} className='text-light' style={{ listStyleType: "none" }}>
                                        {item}
                                    </li>
                                ))}
                         
                        </Col>
                        <Col>
                            <p className="h5 fw-bold">Address</p>

                            <p className="py-3 ">405 Vraj Avenue, Above SAM'S Pizza,<br /> Nr Commerce Six Road, Navrangpura Ahmedabad, 380009    </p>


                        </Col>
                        <Col className="d-flex flex-column justify-content-center">
                            <p className="h5 text-center fw-bold">Connect With Us</p>
                            <Row className="my-2">
                                <Col><img style={{ height: "2rem", cursor: "pointer" }} src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png" alt="" /></Col>
                                <Col><img style={{ height: "2rem", cursor: "pointer" }} src="https://static.vecteezy.com/system/resources/thumbnails/017/743/717/small_2x/instagram-icon-logo-free-png.png" alt="" /></Col>
                                <Col><img style={{ height: "2rem", cursor: "pointer" }} src="https://www.pngkey.com/png/full/178-1787508_github-icon-download-at-icons8-white-github-icon.png" alt="" /></Col>
                                <Col><img style={{ height: "2rem", cursor: "pointer" }} src="https://freelogopng.com/images/all_img/1656996409linkedin-symbol.png" alt="" /></Col>
                            </Row>
                            <p className="h5 text-center mt-2 fw-bold">Download InfoLabZ</p>
                            <Row className="my-2">
                                <Col>
                                    <img style={{height:'100%',width:'100%',cursor:"pointer"}} src="https://jep-asset.akamaized.net/jio/svg/android-ios-logo/G-Play.svg" alt="" />
                                </Col>
                                <Col>
                                    <img style={{height:'100%',width:"100%",cursor:"pointer"}} src="https://jep-asset.akamaized.net/jio/svg/android-ios-logo/AppStore.svg" alt="" />
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>

                <p>© 2025 InfoLabZ <br />
                    @made with &#x1F496; from Dipak </p>

            </footer>
        </>
    );
}
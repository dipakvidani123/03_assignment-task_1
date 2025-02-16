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

    let Social_icon_links= [
        {platform: "Facebook", url: "https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png" },
        {platform: "Instagram", url: "https://static.vecteezy.com/system/resources/thumbnails/017/743/717/small_2x/instagram-icon-logo-free-png.png" },
        {platform: "GitHub", url: "https://www.pngkey.com/png/full/178-1787508_github-icon-download-at-icons8-white-github-icon.png" },
        {platform: "LinkedIn", url: "https://freelogopng.com/images/all_img/1656996409linkedin-symbol.png" }
        ]


    return (
        <>
            <footer className="bg-dark text-light text-center  p-3">
                <Container>
                    <Row className="text-start">
                        <Col>
                            <p className="h5 fw-bold">Quick Links</p>
                            <ul className="list-unstyled">
                                {quickLinks.map((item, index) => (
                                    <li key={index} className="text-light">{item}</li>
                                ))}
                            </ul>
                        </Col>

                        <Col>
                            <p className="h5 fw-bold">Solutions</p>
                            <ul className="list-unstyled">
                                {solutions.map((item, index) => (
                                    <li key={index} className="text-light">{item}</li>
                                ))}
                            </ul>
                        </Col>

                        <Col>
                            <p className="h5 fw-bold">Address</p>
                            <p className="py-3">
                                405 Vraj Avenue, Above SAM'S Pizza,<br />
                                Nr Commerce Six Road, Navrangpura,<br />
                                Ahmedabad, 380009
                            </p>
                        </Col>

                        <Col className="d-flex flex-column align-items-center text-start">
                            <p className="h5 fw-bold">Connect With Us</p>
                            <Row className="my-2  d-flex  flex-nowrap gap-3">
                                {Social_icon_links.map((platform, index) => (
                                    <Col key={index} xs="auto">
                                        <img
                                            style={{ height: "2rem", width: "2rem", objectFit: "contain", cursor: "pointer" }}
                                            src={platform.url} 
                                            alt={platform.platform}
                                        />
                                    </Col>
                                ))}
                            </Row>
                            <p className="h5 text-center mt-2 fw-bold">Download InfoLabZ</p>
                            <Row className="my-2">
                                <Col>
                                    <img
                                        style={{ height: "100%", width: "100%", cursor: "pointer", objectFit: "contain" }}
                                        src="https://jep-asset.akamaized.net/jio/svg/android-ios-logo/G-Play.svg"
                                        alt="Google Play"
                                    />
                                </Col>
                                <Col>
                                    <img
                                        style={{ height: "100%", width: "100%", cursor: "pointer", objectFit: "contain" }}
                                        src="https://jep-asset.akamaized.net/jio/svg/android-ios-logo/AppStore.svg"
                                        alt="App Store"
                                    />
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>

                <p className="text-center text-light opacity-50  mt-3">
                    © 2025 InfoLabZ <br />
                    Made with ❤️ by Dipak
                </p>

            </footer>
        </>
    );
}
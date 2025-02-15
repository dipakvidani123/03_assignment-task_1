import { Button, Card, Col, Row } from "react-bootstrap"

export default function Service_and_compny() {

    const service = [
        {
            "title": "Custom Web Development",
            "image": "https://source.unsplash.com/600x400/?coding,website",
            "description": "We build fast, scalable, and secure websites tailored to your business needs, using modern web technologies.",
            "link": "/services/custom-web-development"
        },
        {
            "title": "E-Commerce Solutions",
            "image": "https://source.unsplash.com/600x400/?ecommerce,online",
            "description": "Develop powerful and user-friendly e-commerce platforms with seamless payment integration and high performance.",
            "link": "/services/ecommerce-solutions"
        },
        {
            "title": "SEO & Digital Marketing",
            "image": "https://source.unsplash.com/600x400/?seo,marketing",
            "description": "Boost your online visibility with our expert SEO strategies, PPC campaigns, and content marketing solutions.",
            "link": "/services/seo-digital-marketing"
        },
        {
            "title": "UI/UX Design & Branding",
            "image": "https://source.unsplash.com/600x400/?design,ux",
            "description": "Create visually stunning and user-friendly designs that enhance engagement and strengthen your brand identity.",
            "link": "/services/ui-ux-design-branding"
        },
        {
            "title": "Website Maintainance",
            "image": "https://source.unsplash.com/600x400/?security,technology",
            "description": "Ensure your website remains updated, secure, and optimized for performance with our maintenance services.",
            "link": "/services/website-maintenance-security"
        }
        ,
        {
            "title": "UI/UX Design & Branding",
            "image": "https://source.unsplash.com/600x400/?design,ux",
            "description": "Create visually stunning and user-friendly designs that enhance engagement and strengthen your brand identity.",
            "link": "/services/ui-ux-design-branding"
        },
    ]



    return (
        <>
            <Row className="mb-3"> 
                        <p className="h2 fw-bold text-center">Services</p>
                <Col className="col-8">
                    {/* <div className="d-flex flex-column justify-content-center" style={{ height: '60%' }}> */}
                        <Row>
                            {service.map((service) => (
                                <Col key={service.CardTitle} >
                                    <Card style={{ minWidth: '10rem',minHeight:'8rem' }} className='my-1 text-center bg-white text-dark  '>
                                        <Card.Body>
                                            <Card.Title>{service.title}</Card.Title>
                                            <Button variant="primary">Know More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                            )
                            }
                        </Row>

                    {/* </div> */}
                </Col>
                <Col className="col-4 d-flex justify-content-center align-items-center"> 
                    
                        <img
                            style={{ height: '80%', width: '100%', borderRadius: '.5rem' }}
                            className="shadow-lg"
                            src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg" alt="" />
                        {/* <img
                            style={{ height: '50%', width: '100%' }}
                            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1510&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}

                    
                </Col>
            </Row>
        </>
    )
}
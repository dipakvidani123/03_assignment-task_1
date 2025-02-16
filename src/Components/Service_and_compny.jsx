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
                <Col xs={12} md={8}>
                    <Row className="justify-content-center">
                        {service.map((service) => (
                            <Col key={service.title} xs={12} sm={6} md={4} className="mb-2 d-flex">
                                <Card className="my-2  text-center bg-white text-dark shadow-sm w-100 d-flex flex-column h-100">
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title className="fw-semibold">{service.title}</Card.Title>
                                        <Button variant="primary" className="mt-auto">Know More</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xs={12} md={4} className="d-flex justify-content-center align-items-center">
                    <img
                        className="shadow-lg rounded w-100"
                        style={{ height: "80%", objectFit: "cover" }}
                        src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Service Illustration"
                    />
                </Col>
            </Row>
        </>
    )
}
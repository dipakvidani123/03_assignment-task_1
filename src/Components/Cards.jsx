import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cards() {
  const cardData = [
    {
      "imgUrl": "https://img.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg?semt=ais_hybrid",
      "CardTitle": "Custom Web Development",
      "cardText": "Fast, secure, and scalable websites tailored to your business goals and needs."
    },
    {
      "imgUrl": "https://img.freepik.com/free-vector/seo-optimization-banner_33099-1690.jpg?ga=GA1.1.1536213168.1739519685&semt=ais_hybrid",
      "CardTitle": "SEO Optimization",
      "cardText": "Boost rankings and attract organic traffic with expert SEO strategies and tools."
    },
    {
      "imgUrl": "https://img.freepik.com/free-photo/cropped-image-woman-inputting-card-information-key-phone-laptop-while-shopping-online_1423-68.jpg?ga=GA1.1.1536213168.1739519685&semt=ais_hybrid",
      "CardTitle": "E-commerce Solutions",
      "cardText": "Deliver smooth, secure, and engaging shopping experiences for your customers."
    },
    {
      "imgUrl": "https://img.freepik.com/free-vector/gradient-ui-ux-landing-page-template_23-2149024126.jpg?ga=GA1.1.1536213168.1739519685&semt=ais_hybrid",
      "CardTitle": "Branding & UI/UX Design",
      "cardText": "Create stunning, intuitive, and impactful designs to enhance your brand identity."
    },
    {
      "imgUrl": "https://img.freepik.com/free-photo/server-cloud-data-storage-concept-cloudscape-digital-online-service-global-network-web-database-backup-computer-infrastructure_90220-1318.jpg?ga=GA1.1.1536213168.1739519685&semt=ais_hybrid",
      "CardTitle": "Cloud Hosting & Security",
      "cardText": "Reliable cloud hosting and security solutions for optimal performance and safety."
    },
    {
      "imgUrl": "https://img.freepik.com/free-vector/flat-d-isometric-web-development-infographics-concept_126523-1540.jpg?ga=GA1.1.1536213168.1739519685&semt=ais_hybrid",
      "CardTitle": "Full-Stack Development",
      "cardText": "Build dynamic and scalable web apps with modern full-stack development tools."
    }
  ];

  return (
    <>
      <Row className="justify-content-center m-5">
        <h1 className="text-center fw-bold">Technologies</h1>
        {cardData.map((card) => (
          <Col key={card.CardTitle} xs={12} sm={6} md={4} lg={4} className="mb-4 d-flex justify-content-center">
            <Card className="shadow-lg h-100 d-flex flex-column" style={{ minWidth: "18rem", maxWidth: "22rem" }}>
              <Card.Img variant="top" style={{ height: "10rem", objectFit: "cover" }} src={card.imgUrl} />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center fw-semibold">{card.CardTitle}</Card.Title>
                <Card.Text className="text-muted text-center flex-grow-1">{card.cardText}</Card.Text>
                <Button variant="dark" className="mt-auto">Enroll now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

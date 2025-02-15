import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cards() {
    const cardData = [
        {
          "imgUrl": "https://img.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg?semt=ais_hybrid",
          "CardTitle": "Custom Web Development",
          "cardText": "Build fast, secure, and scalable websites tailored to your business needs."
        },
        {
          "imgUrl": "https://img.freepik.com/free-vector/seo-optimization-banner_33099-1690.jpg?ga=GA1.1.1536213168.1739519685&semt=ais_hybrid",
          "CardTitle": "SEO Optimization",
          "cardText": "Boost your website’s ranking and attract more organic traffic with our expert SEO strategies."
        },
        {
          "imgUrl": "https://img.freepik.com/free-photo/cropped-image-woman-inputting-card-information-key-phone-laptop-while-shopping-online_1423-68.jpg?ga=GA1.1.1536213168.1739519685&semt=ais_hybrid",
          "CardTitle": "E-commerce Solutions",
          "cardText": "Create a seamless shopping experience with  powerful and user-friendly e-commerce platforms."
        },
        {
          "imgUrl": "https://img.freepik.com/free-vector/gradient-ui-ux-landing-page-template_23-2149024126.jpg?ga=GA1.1.1536213168.1739519685&semt=ais_hybrid",
          "CardTitle": "Branding & UI/UX Design",
          "cardText": "Enhance your brand identity with stunning UI/UX design and impactful branding solutions."
        },
        {
          "imgUrl": "https://img.freepik.com/free-photo/server-cloud-data-storage-concept-cloudscape-digital-online-service-global-network-web-database-backup-computer-infrastructure_90220-1318.jpg?ga=GA1.1.1536213168.1739519685&semt=ais_hybrid",
          "CardTitle": "Cloud Hosting & Security",
          "cardText": "Ensure your website runs smoothly with our reliable cloud hosting and security services."
        },
        {
            "imgUrl": "https://img.freepik.com/free-vector/flat-d-isometric-web-development-infographics-concept_126523-1540.jpg?ga=GA1.1.1536213168.1739519685&semt=ais_hybrid",
            "CardTitle": "Full-Stack Development",
            "cardText": "We build powerful and scalable full-stack web applications with modern technologies."
          },
      ]
      


    return (
        <>
        {/* <Container> */}
            <Row>
              <h1 className='text-center mb-0 fw-bold'>Technologies</h1>
            {cardData.map((cardData)=>(
                <Col key={cardData.CardTitle}>
                <Card style={{  minWidth:'15rem', maxWidth:'25rem', maxHeight:'28rem',textWrap:'wrap' }} className='my-3 mr-0'>
                    <Card.Img variant="top" style={{ height: '10rem' }} src={cardData.imgUrl} />
                    <Card.Body>
                        <Card.Title>{cardData.CardTitle}</Card.Title>
                        <Card.Text>
                            {cardData.cardText}
                        </Card.Text>
                        <Button variant="dark form-control">Know More</Button>
                    </Card.Body>
                </Card>
                </Col>
            )
            )
            }
            </Row>
            {/* </Container> */}
        </>
    );
}


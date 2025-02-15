import Carousel from 'react-bootstrap/Carousel';

export default function Slider() {

    const carouselItems = [
        {
            src: "https://cdn.pixabay.com/photo/2024/02/23/16/51/ai-generated-8592394_1280.jpg",
            alt: "First Slide",
            title: "Innovative Web Solutions",
            description: "Empowering businesses with cutting-edge web design and development services."
        },
        {
            src: "https://www.shutterstock.com/shutterstock/photos/2497849833/display_1500/stock-photo-businessman-using-cloud-computing-technology-on-a-mobile-device-with-virtual-icons-representing-2497849833.jpg",
            alt: "Second Slide",
            title: "Scalable & Secure Platforms",
            description: "Building scalable, high-performance websites with robust security and seamless user experience."
        },
        {
            src: "https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061967.jpg?t=st=1739603621~exp=1739607221~hmac=ff3ecbc682fd313d5a0d52dfff95cf5f6db8f1900aa7c19c6230fc57da9f4421&w=740",
            alt: "Third Slide",
            title: "Boost Your Online Presence",
            description: "Enhance brand visibility with SEO-friendly, responsive, and fast-loading websites."
        }
    ];
    

    return (
        <Carousel className="mt-3" fade>
            {carouselItems.map((item, index) => (
                <Carousel.Item key={index}>
                    <img className="d-block w-100" style={{ height: "20rem" }} src={item.src} alt={item.alt} />
                    <Carousel.Caption className='text-light fw-bold d-flex flex-column justify-content-center align-items-center position-absolute top-50 start-50 translate-middle'>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}


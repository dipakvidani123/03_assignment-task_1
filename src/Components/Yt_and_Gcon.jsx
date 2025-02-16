import { Col, Row } from 'react-bootstrap';

export default function Yt_and_Gcon() {

    const growthJourney = [
        { year: "2021", milestone: "Company Founded in Ahmedabad, Gujarat, India" },
        { year: "2022", milestone: "Expanded Team & Onboarded 50+ Clients" },
        { year: "2023", milestone: "Launched AI & Cloud Solutions, Entered Global Market" },
        { year: "2024", milestone: "Achieved 200+ Active Clients, 90% Customer Retention" },
        { year: "2025", milestone: "Expanding into FinTech & Healthcare Sectors " }
    ];

    return (
        <>
            <Row>
                <h1 className='h2 fw-bold text-center'>Our Growth Journey: Scaling Innovation & Excellence</h1>

                <Row className="d-flex align-items-stretch">
                    {/* Video Section */}
                    <Col md={6} className="my-3 d-flex">
                        <div className="ratio ratio-16x9 w-100 shadow rounded-3">
                            <iframe
                                src="https://www.youtube.com/embed/7dXECn3opNU?si=fJWzt15ptd3MALs-"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Col>

                    {/* Table Section */}
                    <Col md={6} className="my-3 d-flex">
                        <div className="table-responsive w-100 overflow-auto shadow rounded-3">
                            <table className='table table-bordered table-hover table-dark mb-0'>
                                <thead>
                                    <tr className='text-center bg-primary table-group-divider'>
                                        <th className='col-3 bg-primary fw-bold text-uppercase text-nowrap'>Year</th>
                                        <th className='bg-primary fw-bold text-uppercase'>Milestone</th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    {growthJourney.map((item, index) => (
                                        <tr key={index}>
                                            <td className='text-center fw-semibold'>{item.year}</td>
                                            <td>{item.milestone}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row>
            </Row>
        </>
    );
}

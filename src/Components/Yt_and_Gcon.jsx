import { Button, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


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
                <h1>Our Growth Journey: Scaling Innovation & Excellence</h1>
                <Col className="col-6  ">
                    <iframe style={{ height: '100%', width: '100%', borderRadius: ".5rem" }} src="https://www.youtube.com/embed/7dXECn3opNU?si=fJWzt15ptd3MALs-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    {/* <iframe style={{ height: '50%', width: '100%', borderRadius: ".5rem" }} src="https://www.youtube.com/embed/7dXECn3opNU?si=fJWzt15ptd3MALs-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                </Col>
                <Col>

                    <table className='table table-bordered table-hover rounded-5 shadow table-dark mb-0 '> 
                        <thead>
                            <tr>
                                {/* <th colSpan='2' className='text-center text-light bg-success fw-bold'>Our Growth Journey: Scaling Innovation & Excellence</th> */}
                            </tr>
                            <tr className=' text-center bg-primary table-group-divider'>
                                <th className='col-3 bg-success'>Year</th>
                                <th className='bg-success'>Milestone</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            {growthJourney.map((item, index) => (
                                <tr key={index}>
                                    <td className='text-center'>{item.year}</td>
                                    <td>{item.milestone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


                </Col>
            </Row>
        </>
    );
}
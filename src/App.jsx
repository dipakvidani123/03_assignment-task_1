import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Cards, Footer, Full_w_cont, My_Navbar, Service_and_compny, Slider, Yt_and_Gcon } from './Components';

function App() {
  return (
    <>
        <My_Navbar />
      <Container>
        <Slider />
        <Cards />
        <Full_w_cont />
        <Yt_and_Gcon />
        <Service_and_compny />
      </Container>
        <Footer />
    </>
  );
}

export default App

import "./App.css";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Technologies from "./components/Technologies";
import { Container } from "./styles";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Presentation />
        <Technologies />
        <Experiences />
      </Container>
      <Footer />
    </>
  );
}

export default App;

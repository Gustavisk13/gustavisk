import "./App.css";
import Experiences from "./components/Experiences";
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
    </>
  );
}

export default App;

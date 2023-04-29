import "./App.css";
import Experiences from "./components/Experiences";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
      <Navbar />
      <Presentation />
      <Technologies />
      <Experiences />
    </>
  );
}

export default App;

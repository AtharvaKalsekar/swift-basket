import "./App.css";
import "./bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Homescreen from "./screens/Homescreen";

function App() {
  return (
    <>
      <Header />
      <Container>
        <div className="main py-3">
          <Homescreen />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default App;

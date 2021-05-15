import "./App.css";
import "./bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <Container>
        <div className="main py-3">
          <h1>Swift Basket</h1>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default App;

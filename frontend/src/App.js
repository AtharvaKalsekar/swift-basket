import "./App.css";
import "./bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
function App() {
  return (
    <Router>
      <Header />
      <Container>
        <div className="main py-3">
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/" component={Homescreen} exact />
        </div>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;

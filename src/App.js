import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/login";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Route exact path="/" component={Login} />
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;

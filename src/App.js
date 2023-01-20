import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Page404 from "./components/Page404";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:id" component={MovieDetail} />
            <Route component={Page404} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
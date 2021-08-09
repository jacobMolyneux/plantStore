import "./App.css";
import { Homepage } from "./components/homepage";
import { Navbar } from "./components/navbar.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Catalog from "./components/catalog";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div id="navContainer">
          <nav>
            <ul id="listContainer">
              <li className="navItem">
                <Link to="/" className="linkText">
                  Home
                </Link>
              </li>
              <li className="navItem">
                <Link to="/about" className="linkText">
                  About
                </Link>
              </li>
              <li className="navItem">
                <Link to="/Catalog" className="linkText">
                  Users
                </Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/users">
              <Catalog />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;

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
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/Catalog">Users</Link>
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

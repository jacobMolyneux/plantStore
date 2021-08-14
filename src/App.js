import "./App.css";
import { Homepage } from "./components/homepage";
import { Navbar } from "./components/navbar.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Catalog from "./components/catalog";
import AboutPage from "./components/AboutPage";
import cartIcon from "./components/plantImages/shopping-cart.png";
import ShoppingCart from "./components/cart.js";

const shoppingCart = [];
function App() {
  return (
    <div className="App">
      <Router>
        <div id="navContainer">
          <h1>Plant Store</h1>
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
              <li className="navItem">
                <div id="cartIcon">
                  <Link to="/Cart" className="linkText">
                    <img id="shoppingCart" src={cartIcon} alt="cart " />
                  </Link>
                </div>
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
            <Route path="/Cart">
              <ShoppingCart />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </div>
      </Router>
      <div id="footer">
        <div id="footerNavDiv">
          <ul className="FooterNavHolder">
            <li className="footerLink" id="footerNavItem">
              Home
            </li>
            <li className="footerLink" id="footerNavItem">
              Catalog
            </li>
            <li className="footerLink" id="footerNavItem">
              About
            </li>
          </ul>
        </div>
        <div id="MyInfoDiv">
          <ul>
            <li className="footerLink" id="myInfoLink">
              Made by Jacob Molyneux
            </li>
            <li className="footerLink" id="myInfoLink">
              Email: Jacobmolyneux2@gmail.com
            </li>
            <li className="footerLink" id="myInfoLink">
              GitHub: www.github.com/jacobMolyneux
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export { shoppingCart };
export default App;

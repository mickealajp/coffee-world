import "./Header.scss";
import logo from "../../assets/coffee-logo.jpeg";

function Header () {
    return (
      <div className="header">
        <div className="coffee">
          <h1 className="coffee-title">Coffee World</h1>
          <img className="coffee-logo" src={logo} alt="coffeebeans"></img>
        </div>
        <div className="menu">
          <ul className="menu-items">
            <li className="menu-select">Coffee</li>
            <li className="menu-select">Bakery</li>
            <li className="menu-select">Merch</li>
          </ul>
        </div>
      </div>
    );
}

export default Header;
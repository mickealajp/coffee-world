import "./Header.scss";
import logo from "../../assets/coffee-logo.jpeg";

function Header () {
    return (
      <section>
        <h1>Coffee World</h1>
        <img src={logo} alt="coffee"></img>
      </section>
    );
}

export default Header;
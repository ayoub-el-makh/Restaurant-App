import { useNavigate } from "react-router-dom";
import avatar from "../../images/avatar.jpg";
import logo from "../../images/logo.png";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [color, setColor] = useState(false);
  const navigate = useNavigate();
  const changeColorHeader = () => {
    if (window.scrollY > 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColorHeader);
    return () => {
      window.removeEventListener("scroll", changeColorHeader);
    };
  }, []);
  return (
    <header className={color ? "header-color" : ""}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <Link
              to="Home"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-90}
              duration={200}
              onSetActive={() => navigate("/")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="About"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-80}
              duration={200}
              onSetActive={() => navigate("About")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="SpecialMenu"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
              onSetActive={() => navigate("Menu/Special-menu")}
            >
              Special
            </Link>
          </li>
          <li>
            <Link
              to="Menu"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={200}
              onSetActive={() => navigate("Menu")}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="Contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={200}
              onSetActive={() => navigate("Contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="profile">
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;

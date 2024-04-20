import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu.jsx";
import SpecialMenu from "./Components/SpecialMenu/SpecialMenu.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

const App = () => {
  const [arrow, setArrow] = useState(false);
  const changeArrow = () => {
    if (window.scrollY > 200) {
      setArrow(true);
    } else {
      setArrow(false);
    }
  };
  const handleClick = () => {
    scroll.scrollToTop({
      duration: 200,
      smooth: true,
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", changeArrow);
    return () => {
      window.removeEventListener("scroll", changeArrow);
    };
  }, []);
  return (
    <>
      <Header />
      <Home />
      <About />
      <SpecialMenu />
      <Menu />
      <Contact />
      {arrow && (
        <IoIosArrowDropupCircle
          onClick={handleClick}
          style={{
            position: "fixed",
            right: "10px",
            bottom: "10px",
            fontSize: "4rem",
            color: "orange",
            cursor: "pointer",
          }}
        />
      )}
    </>
  );
};

export default App;

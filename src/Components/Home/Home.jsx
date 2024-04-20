import "./Home.css";
import { TypeAnimation } from "react-type-animation";


const Home = () => {
  return (
    <div className="hero-section" id="Home">
      <div className="info">
        <span>Dinner with us </span>
        <TypeAnimation
          sequence={["Friends", 1000, "Familly", 1000]}
          wrapper="span"
          speed={10}
          style={{ fontSize: "6em", display: "inline-block" }}
          repeat={Infinity}
        />
        <h2>Accidental appearances</h2>
        <p>
          Here, ancient customs and future trends coexist, and the intricacies
          of African culture blend seamlessly together over an Ethiopian-brewed
          coffee, or a bowl of Senegalese black-eyed pea stew and a side of
          spicy Ghanaian plantains.
        </p>
      </div>
    </div>
  );
};

export default Home;

import "./About.css";
import main from "../../images/about-main.jpg";
import inset from "../../images/about-inset.jpg";

const About = () => {

  
  return (
    <div className="About-section" id="About">
      <div className="info-about">
        <h1>About us</h1>
        <h3>IT STARTED, QUITE SIMPLY, LIKE THIS...</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia,
          nostrud exercitation ullamco.
          <br />
          <br /> Aenean commodo ligula eget dolor aenean massa. Cum sociis nat
          penatibu set magnis dis parturient montes, nascetur ridiculus mus.
          quam felisorat, ultricies nec, Aenean commodo ligula eget dolor
          penatibu set magnis is parturient montes, nascetur ridiculus mus. quam
          felisorat, ultricies nec, pellentesque eu, pretium quis, sem. quat
          massa quis enim. Donec vitae sapien ut libero venenatis fauci Nullam
          quis ante. Etiam sit amet rci eget eros.
          <br />
          <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          venia, nostrud exercitation ullamco.
        </p>
      </div>
      <div className="images">
        <img src={main} alt="" />
        <img src={inset} alt="" />
      </div>
    </div>
  );
};

export default About;

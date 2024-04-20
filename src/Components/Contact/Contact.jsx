import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact-section" id="Contact">
      <div className="info-contact">
        <h1>Newsletter</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit
          at mollitia voluptate .
        </p>
      </div>

      <form>
        <input type="text" placeholder="enter your email" />
        <Button
          variant="contained"
          style={{ padding: "0.73rem 1.5rem" ,background: "rgb(255, 98, 0)"}}
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default Contact;

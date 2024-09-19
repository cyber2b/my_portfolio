import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Balaji J </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
           
           
            I have completed my under Graduate in Information Technology at Rajalakshmi Engineering college , Chennai.
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Self development
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Find the Flow " {" "}
          </p>
          <footer className="blockquote-footer">Hector Garcia</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

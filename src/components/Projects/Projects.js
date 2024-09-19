import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/bus toll.webp";
import diet from "../../Assets/Projects/diet.jpeg";
import REC from "../../Assets/Projects/rec.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Smart Bus Toll System using   QR Scanner(APP)"
              description="A Smart Bus Toll System in colleges is proposed as an efficient and streamlined way to
manage bus transportation and simplify the payment process for students"
              ghLink="https://github.com/cyber2b/Payment_verifier-using-QR.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={REC}
              isBlog={false}
              title="Resource management System for REC"
              description="The Resource Management System for REC optimizes the allocation and utilization of
resources within the institution.This project build using React Frame work."
              ghLink="https://github.com/cyber2b/inventory-management.git"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diet}
              isBlog={false}
              title="Analyzing Dietary Habits and Nutritional Trends in India using Data Analytics"
              description="This analysis explores India's food consumption patterns and nutritional trends to inform public
health policies."
              ghLink="https://github.com/cyber2b"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title=" Color blindness detection using UTLP kit"
              description="This project is used to detecting the color blindness and which color is that person is
blind using UTLP kit( by wipro)."
              ghLink="https://github.com/cyber2b"
                         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Hospital beds allocation system using Data analytics"
              description="This model is used to show the empty beds while searching for the hospital to enrich
faster treatments during emergency"
              ghLink="https://github.com/cyber2b"
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

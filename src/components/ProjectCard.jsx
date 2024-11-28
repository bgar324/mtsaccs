import React from "react";
import "../styles/ProjectCard.css";
import { Col, Card } from "react-bootstrap";

const ProjectCard = ({ name, link, image }) => {
  return (
    <Col md={4} className="mb-4">
      <div className="project-container">
        <Card className="project-card">
          <div className="project-image-wrapper">
            <Card.Img
              variant="top"
              src={image}
              alt={name}
              className="project-image"
            />
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-hover-overlay"
            >
              <span className="view-slides-pill">View Slides</span>
            </a>
          </div>
          <Card.Body className = "blegh">
            <Card.Title className = "text-center boobs">{name}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default ProjectCard;

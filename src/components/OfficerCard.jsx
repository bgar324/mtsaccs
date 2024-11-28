import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/OfficerCard.css';

const OfficerCard = ({ imagesrc, name, position, year }) => {
  return (
    <Card className="officer-card">
      <div className="image-container">
        <Card.Img variant="top" src={imagesrc} alt={typeof name === 'string' ? name : 'Officer Image'} className="profile-pic" />
      </div>
      <Card.Body>
        <Card.Title className="name">
          {name}
        </Card.Title>
        <Card.Text className="position">{position}</Card.Text>
        <Card.Text className="year">{year}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default OfficerCard;

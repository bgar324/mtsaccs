import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/InfoCard.css';

const InfoCard = ({ title, description }) => {
  return (
    <Card className="info-card">
      <Card.Body className="text-center">
        <Card.Title className="info-card-title">{title}</Card.Title>
        <Card.Text className="info-card-description">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InfoCard;

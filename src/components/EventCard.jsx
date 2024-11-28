import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/EventCard.css';

const EventCard = ({ id, imagesrc, alt, eventName, registerLink, date }) => {
  return (
    <Card className="event-card mx-auto">
      <Card.Img variant="top" src={imagesrc} alt={alt} className="event-image" />
      <Card.Body className="event-body">
        <Card.Title className="event-name">{eventName}</Card.Title>
        <Card.Text className = "date">{date}</Card.Text>
        <div className="button-group">
          <Link to={`/events/${id}`} className="btn btn-secondary info-btn">
            More Info
          </Link>
          <Button
            href={registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-warning register-btn"
          >
            Register
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EventCard;

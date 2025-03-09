import React from 'react';
import { Helmet } from 'react-helmet';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import { Container, Row, Col } from 'react-bootstrap';
import Pill from '../components/Pill';
import './Events.css';

const Events = () => {
  const upcomingEvents = [
  {
    id: '8',
    imagesrc: '/static/events/cs mentorship.png',
    alt: 'Virtual Mentorship Mixer',
    eventName: 'Virtual Mentorship Mixer',
    registerLink: 'https://lu.ma/vfidevu9',
    date: 'Mar. 13'
  },
  {
    id: '9',
    imagesrc: '/static/events/cs ebcc event.png',
    alt: 'Electrical Bluetooth Car Event',
    eventName: 'EBCC-1 Event',
    registerLink: 'https://forms.gle/RRSre4LhTXs2kPH38',
    date: 'Apr. 25'
  },
  {
    id: '5',
    imagesrc: '/static/events/cs club stem flyer.png',
    alt: 'STEMForOthers Project Opportunity',
    eventName: 'STEMForOthers Project Opportunity',
    registerLink: 'https://docs.google.com/forms/d/1co43OjyqbYITjJ-jFDf5GFe_C-NSr_Cf3WtjOpc9oa0/edit',
    date: 'Fall 2024 to Spring 2025'
  },
  ];

  const pastEvents = [
    {
      id: '6',
      imagesrc: '/static/events/smacs.png',
      alt: 'Hackathon Prep (SMACS)',
      eventName: 'Hackathon Prep (SMACS)',
      registerLink: 'https://smacs.vercel.app/',
      date: 'Oct. 23'
    },
    {
      id: '3',
      imagesrc: '/static/events/Women_of_Color_in_STEM.png',
      alt: 'Women of Color in STEM',
      eventName: 'Women of Color in STEM',
      registerLink: 'https://example.com/register/hackathon',
      date: 'Oct. 29'
    },
    {
      id: '2',
      imagesrc: '/static/events/cscclubgameflyerv2.png',
      alt: 'Game Night',
      eventName: 'Game Night',
      registerLink: 'https://example.com/register/hackathon',
      date: 'Oct. 30'
    },
    {
      id: '4',
      imagesrc: '/static/events/Nov_2024_MESA_Guest_Speaker_Jim_Herold.jpg',
      alt: 'Jim Herold Guest Speaker',
      eventName: 'Jim Herold Guest Speaker',
      registerLink: 'https://forms.office.com/pages/responsepage.aspx?id=8ktNzJ4KQEKu3qfR1oj5NfaMcBznXHtFpUoFBwrvxcZURDZDNkdOSFlWSzRSVFVJQTFNTzY3TEJaSy4u&origin=QRCode&route=shorturl',
      date: 'Nov. 1'
    },
    {
      id: '1',
      imagesrc: '/static/events/cs_food_bank_flyer.png',
      alt: 'Food Bank',
      eventName: 'Food Bank',
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdlxrm0XRRa4iipwRsZ5by0ySOy65Rgiccym5OW-ndXoI-H8w/viewform',
      date: 'Nov. 2'
    },
    {
      id: '7',
      imagesrc: '/static/events/mtysacuclav932.png',
      alt: 'UCLA + Break Through Tech Flyer',
      eventName: 'UCLA + Break Through Tech AI Program Info Session',
      registerLink: 'https://smacs.vercel.app/',
      date: 'Dec. 3'
    }
  ];  

  return (
    <div className="app-container">
      <Helmet>
        <title>Events | CS Club at Mt. SAC</title>
      </Helmet>
      <MyNavbar />
      <div className="content econtent">
        <Container fluid className="econtainer">
          <h2 className="text-center team-header">Upcoming Events</h2>
          <Pill />
          <Row className="event-list g-4">
            {upcomingEvents.map((event) => (
              <Col key={event.id} xs={12} md={6} lg={4} className="d-flex justify-content-center">
                <EventCard
                  id={event.id}
                  imagesrc={event.imagesrc}
                  alt={event.alt}
                  eventName={event.eventName}
                  registerLink={event.registerLink}
                  date={event.date}
                />
              </Col>
            ))}
          </Row>

        </Container>
      </div>

      <div className="past-events-section">
        <Container fluid className="econtainer">
          <h2 className="text-center team-header">Fall 2024 Events</h2>
          <Pill />
          <Row className="event-list g-4">
            {pastEvents.map((event) => (
              <Col key={event.id} sm={12} md={6} lg={4} className="d-flex justify-content-center">
                <EventCard
                  id={event.id}
                  imagesrc={event.imagesrc}
                  alt={event.alt}
                  eventName={event.eventName}
                  registerLink={event.registerLink}
                  date={event.date}
                />
              </Col>
            ))}
          </Row>

        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default Events;

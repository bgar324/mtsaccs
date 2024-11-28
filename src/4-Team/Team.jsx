import React from 'react'
import { Helmet } from 'react-helmet'
import MyNavbar from '../components/MyNavbar'
import Footer from '../components/Footer'
import './Team.css'
import { Container, Row, Col } from 'react-bootstrap'
import OfficerCard from '../components/OfficerCard'
import Pill from '../components/Pill'

const Team = () => {
  const teamMembers = [
    {
      imagesrc: '/static/people/bowen.png',
      alt: 'Person 1',
      name: 'Bowen Wu',
      position: 'President',
      year: 'Class of 2027',
    },
    {
      imagesrc: '/static/people/siwoo.png',
      alt: 'Person 2',
      name: 'Siwoo Chung',
      position: 'Vice-President',
      year: 'Class of ????',
    },
    {
      imagesrc: '/static/people/jessica.png',
      alt: 'Person 3',
      name: 'Jessica Chen',
      position: 'Secretary',
      year: 'Class of ????',
    },
    {
      imagesrc: '/static/people/van.png',
      alt: 'Person 3',
      name: 'Van Lai Sy',
      position: 'Treasurer',
      year: 'Class of ????',
    },
    {
      imagesrc: '/static/people/josh.png',
      alt: 'Person 3',
      name: 'Joshua-Jaye Chan',
      position: 'ICC Representative',
      year: 'Class of ????',
    },
    {
      imagesrc: '/static/people/ben.png',
      alt: 'Person 3',
      name: 'Benjamin Garcia',
      position: 'Outreach Officer',
      year: 'Class of ????',
    },
    {
      imagesrc: '/static/people/natalie.png',
      alt: 'Person 3',
      name: 'Natalie Guillen',
      position: 'Workshop Officer',
      year: 'Class of ????',
    },
    {
      imagesrc: '/static/people/amanda.png',
      alt: 'Person 3',
      name: 'Amanda Chang',
      position: 'Workshop Officer',
      year: 'Class of ????',
    },
    {
      imagesrc: '/static/people/chris.png',
      alt: 'Person 3',
      name: 'Chris Theung',
      position: 'Workshop Officer',
      year: 'Class of ????',
    },
  ];

  return (
    <div className="app-container">
      <Helmet>
        <title>Team | CS Club at Mt. SAC</title>
      </Helmet>

      <MyNavbar />

      <div className="content tcontent">
        <h2 className = "team-header">Our Team</h2>
        <Pill />
        <p className = "team-p">Our officers are the heart of our events and projects, making everything we do possible. <br />This page recognizes their hard work—feel free to reach out to them anytime!</p>
        <Container className="team-container gy-4">
          <Row className="justify-content-center">
            {teamMembers.map((member, index) => (
              <Col 
              key={index} 
              xs={12} 
              sm={6} 
              md={4}  
              className="officerRow">
                <OfficerCard 
                  imagesrc={member.imagesrc} 
                  alt={member.alt} 
                  name={member.name} 
                  position={member.position} 
                  year={member.year} 
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

export default Team;
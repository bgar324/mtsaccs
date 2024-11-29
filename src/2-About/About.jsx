import React from 'react';
import { Helmet } from 'react-helmet';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer';
import OfficerCard from '../components/OfficerCard';
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap';
import './About.css';
import Pill from '../components/Pill';

const About = () => {
  return (
    <div className="app-container">
      <Helmet>
        <title>About | CS Club at Mt. SAC</title>
      </Helmet>
      <MyNavbar />
      <div className="content acontent">
        <Container fluid="md" className="about-container">
          {/* About Us Section */}
          <h2 className="text-center team-header">About Us</h2>
          <Pill />
          <Row className="about-row1 align-items-center">
            {/* Text Column */}
            <Col xs={12} md={6} className="mb-4 mb-md-0 order-lg-1 order-1">
              <h2 className="text-center mb-4">What is the Computer Science Club?</h2>
              <Pill />
                <p>
                  The Computer Science Club at Mt. San Antonio College is a welcoming that fosters growth and collaboration in technology. Our mission is to make computer science fun and accessible while helping students develop technical and leadership skills.
                </p>
                <p>
                  We host workshops, tutoring sessions, and hands-on activities to
                  complement coursework and encourage innovation. Members also gain
                  access to networking opportunities with peers and industry professionals.
                </p>
                <p>
                  Open to all Mt. SAC students, the club is inclusive and fee-free, offering
                  a supportive space to explore computer science regardless of experience
                  level.
                </p>
                <p>
                  Above all, we strive to build a sense of community, inspiring a love for
                  learning and a culture of support and innovation among our members.
                </p>
            </Col>

            {/* Carousel Column */}
            <Col xs={12} md={6} className = "order-lg-2 order-2">
              <Carousel className="about-carousel">
                <Carousel.Item>
                  <Image
                    src="static/carousel/PXL_20241102_195123915.jpg"
                    fluid
                    rounded
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src="static/carousel/IMG_5434.jpg" fluid rounded />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src="static/carousel/IMG_4859.jpg" fluid rounded />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="static/carousel/71763995403__FBEFE8F6-4B79-4F6C-A583-3C28F72D087C.jpg"
                    fluid
                    rounded
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>

          {/* Who Section */}
          <Row className="about-row2 align-items-center my-5">
            {/* Image Column */}
            <Col xs={12} md={6} className="mb-4 mb-md-0 order-lg-1 order-2">
              <Image src="static/IMG_5431.jpg" fluid rounded />
            </Col>

            {/* Text Column */}
            <Col xs={12} md={6} className = "order-lg-2 order-1">
              <h2 className="text-center mb-4">
                Who is the Computer Science Club?
              </h2>
              <Pill />
              <p className="text-center">
                Founded in 2019 as a student organization at Mt. San Antonio College,
                the Computer Science Club is run for students by students. We bring our
                passion for technology and education to create engaging and meaningful
                experiences for our peers. We believe that every student should have the
                opportunity to explore, learn, and excel in computer science, regardless
                of their background or experience.
              </p>
            </Col>
          </Row>
        </Container>

        {/* Advisors Section */}
        <div className="advisors-section">
          <Container fluid className="advisors-container">
            <h2 className="text-center team-header">Our Advisors</h2>
            <Pill />
            <p className = "text-center">Meet the mentors who guide and support our journey in Computer Science!</p>
            <Row className="justify-content-center g-4">
              <Col xs={12} sm={6} lg={4} className="d-flex justify-content-center">
                <OfficerCard
                  imagesrc="static/advisors/AtanasioDominick.png"
                  name={
                    <a
                      href="https://www.mtsac.edu/profiles/datanasio.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Dominick Atanasio
                    </a>
                  }
                  position="Professor - Computer Science"
                  year={
                    <a
                      href="mailto:datanasio@mtsac.edu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      datanasio@mtsac.edu
                    </a>
                  }
                />
              </Col>
              <Col xs={12} sm={6} lg={4} className="d-flex justify-content-center">
                <OfficerCard
                  imagesrc="static/advisors/51e5ddb9-fe19-46a9-af78-0a78ad96effc.png"
                  name={
                    <a
                      href="https://www.mtsac.edu/profiles/johannsen.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Jonathan Johannsen
                    </a>
                  }
                  position="Professor - Computer Science"
                  year={
                    <a
                      href="mailto:jjohannsen1@mtsac.edu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      jjohannsen1@mtsac.edu
                    </a>
                  }
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

import React from 'react'
import Helmet from "react-helmet"
import MyNavbar from '../components/MyNavbar'
import Footer from '../components/Footer'
import './App.css'
import MailingList from '../components/MailingList'
import { Button, Col, Row, Container } from 'react-bootstrap'
import Pill from '../components/Pill'

const App = () => {
  return (
    
    <div className="app-container orangebackground">
      <Helmet>
        <title>Home | CS Club at Mt. SAC</title>
      </Helmet>
      <MyNavbar />
      <div className="content">

        <div className="mastertop">
          <img src="static/header.png" alt="Builing 43" className="img-fluid w-100 topbanner"/>    
          <img src = "static/MtSAC (1).png" alt="CS Club Logo" className="img-fluid duck"></img>
        </div>
      </div>

      <Container className = "informationalContainer">
        <Row>
          {/* Text Column */}
          <Col lg={6} className="informationalText">
            <h2>What is Computer Science at Mt. SAC?</h2>
            <Pill />
            <div className="infoTextSuper">
              <p>
                Computer science is the study of computers, computation, information, and automation,
                encompassing their design, development, and practical applications. It includes a focus on
                creating and testing software and systems, from websites (like this one!) to complex, automated solutions.
                Learn more at the <a href="https://www.mtsac.edu/math" target="_blank">Math and Computer Science department</a> for coursework and career paths.
              </p>
              <p>
                To learn our origins and what we're all about, check out the ‎ 
                <a href = "/about">about page <i class="fa-solid fa-circle-arrow-right"></i>.</a>
              </p>
            </div>
            <Container 
            className="buttons">
              <div className="line ls"></div>
              <a href="https://www.instagram.com/cs.mtsac/" target="_blank"><i className="fab fa-instagram"></i></a>
              <a href="https://discord.com/invite/sWpjfHVuuT" target="_blank"><i className="fab fa-discord"></i></a>
              <a href="https://github.com/mtsac-cs" target="_blank"><i className="fab fa-github"></i></a>
              <div className="line ls"></div>
            </Container>
          </Col>

          {/* Image Column */}
          <Col lg={6}>
            <img src="static/IMG_4719.png" alt="Classroom" className = "img-fluid informationalImage"/>
          </Col>
        </Row>
      </Container>

        <div className="banner2">
            <img src="static/banner2.png" alt="Banner 2" className="img-fluid w-100 topbanner special"/>    
        </div>

      <Container className="teamjoin">
        <Row>
          {/* Text and Button Column */}
          <Col lg={6} className="teamjoinText">
            <h2>Looking to get involved or be a part of our team?</h2>
            <Pill />
            <Row>
              <Col md={6}>
                <p>While we are currently not taking applications for cabinet positions, including the roles of president and vice president, be sure to join our mailing list for future updates!</p>
                <a href = "/team">Check out our current team!‎ <i class="fa-solid fa-circle-arrow-right"></i></a>
              </Col>
              <Col md={6}>
                <p>
                Interested in joining? Curious about the benefits of membership and the opportunities available? Looking to understand the duties and expectations of each role?</p>
                <a href = "/join-us">Visit our Join Us page to learn more!‎ <i class="fa-solid fa-circle-arrow-right"></i></a>
              </Col>
            </Row>
            {/* <Row className="button-row">
              <Col md={6}>
                <Button variant="outline-warning" href="/team" className="join-button">
                  team
                </Button>
              </Col>
              <Col md={6}>
                <Button variant="outline-warning" href="/join-us" className="join-button">
                  join us
                </Button>
              </Col>
            </Row> */}
          </Col>

          {/* Image Column */}
          <Col lg={6}>
            <img src="static/11.2 Mt.Sac CS x AGS Club.png" alt="Keyboards" className="img-fluid keyboardImage"/>
          </Col>
        </Row>
      </Container>

      <Container className="teamjoin">
        <Row>
          {/* Image Column */}
          <Col lg={6}>
            <img src="static/IMG_2030.jpg" alt="Event or Project" className="img-fluid keyboardImage"/>
          </Col>

          {/* Text and Button Column */}
          <Col lg={6} className="teamjoinText">
            <h2>Check out our events and projects!</h2>
            <Pill />
            <Row>
              <Col md={6}>
                <p>Curious about our technical projects and past work? Explore our projects page to catch up on all our workshop and meeting slides!</p>
                <a href = "/projects">Visit our Projects page to learn more!‎ <i class="fa-solid fa-circle-arrow-right"></i></a>
              </Col>
              <Col md={6}>
                <p>Curious about what we've been up to? Visit our Events page to explore all the exciting upcoming and past events, and see how you can join in on the action!</p>
                <a href = "/events">Visit our Events page to learn more!‎ <i class="fa-solid fa-circle-arrow-right"></i></a>
              </Col>
            </Row>
            {/* <Row className="button-row">
              <Col md={6}>
                <Button variant="outline-warning" href="/projects" className="join-button">
                  projects
                </Button>
              </Col>
              <Col md={6}>
                <Button variant="outline-warning" href="/events" className="join-button">
                  events
                </Button>
              </Col>
            </Row> */}
          </Col>
        </Row>
      </Container>

      <MailingList />

      <Footer />
    </div>
  )
}

export default App
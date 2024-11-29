import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, Container, Col, Row, Tabs, Tab, Accordion } from 'react-bootstrap';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer';
import InfoCard from '../components/InfoCard';
import MailingList from '../components/MailingList.jsx'
import './JoinUs.css';
import Pill from '../components/Pill.jsx';

const JoinUs = () => {
  return (
    <div className="app-container jcontent">
      <Helmet>
        <title>Join Us | CS Club at Mt. SAC</title>
      </Helmet>

      <MyNavbar />

      <Container fluid className="content jayz">
        <section>
          <h2 className="team-header">Join Us!</h2>
          <Pill />
          <p className="j-p my-3">How do I join?</p>
          <Pill />
        </section>

        <Card className="membership-card">
          <Card.Body className="membership-card-text">
            Membership is open all year round, and all you need to do is join our{' '}
            <a href="https://discord.com/invite/sWpjfHVuuT" target="_blank" rel="noopener noreferrer">
              Discord server.
            </a>{' '}
            Once you're in, you'll have access to all our events, resources, and opportunities. It's that easy—no formal
            sign-up or application required. We can't wait to see you there!
          </Card.Body>
        </Card>

        <p className="j-p mt-5">What's in it for me?</p>
        <Pill />

        <Row className="mt-3 justify-content-center inforow">
          {[
            { title: 'Connect', description: 'with like-minded students who share your passion for computer science and technology.' },
            { title: 'Tutoring', description: 'from our alumni and volunteers to help you succeed in your coursework and projects.' },
            { title: 'Collaborative', description: 'coding opportunities where you can work on exciting projects with fellow members.' },
            { title: 'Participate', description: 'in hackathons, where you can test your skills, solve real-world problems and showcase your talent.' },
            { title: 'Workshops', description: 'and events designed to sharpen your skills and showcase new technologies.' },
          ].map((info, index) => (
            <Col key={index} lg={2} md={4} sm={6} xs={12} className="mb-4 d-flex justify-content-center">
              <InfoCard title={info.title} description={info.description} />
            </Col>
          ))}
        </Row>

        <p className="j-p">You'll have the incredible opportunity to take on a leadership role!</p>
        <Pill />

        <p className="text-center">While we are not currently taking applications, click on each tab to learn what each position does and what may be a good fit for you!</p>

        <div className="d-flex flex-column align-items-center mt-4 rolez">
          <Tabs defaultActiveKey="president" id="leadership-roles-tabs" className="mb-3">
            <Tab eventKey="president" title="President">
              <Card className="custom-card">
                <Card.Body>
                  <Card.Title className="title">The President is responsible for:</Card.Title>
                  <ul>
                    <li>Leading club meetings</li>
                    <li>Overseeing club activities</li>
                    <li>Supporting current officers</li>
                  </ul>
                </Card.Body>
              </Card>
            </Tab>

            <Tab eventKey="vice-president" title="Vice President">
              <Card className="custom-card">
                <Card.Body>
                  <Card.Title>The Vice President is responsible for:</Card.Title>
                  <ul>
                    <li>Assisting the President</li>
                    <li>Assuming duties in case of the absence of the President</li>
                  </ul>
                </Card.Body>
              </Card>
            </Tab>

            <Tab eventKey="secretary" title="Secretary">
              <Card className="custom-card">
                <Card.Body>
                  <Card.Title>The Secretary is responsible for:</Card.Title>
                  <ul>
                    <li>Recordkeeping all activities of the club</li>
                    <li>In charge of all club correspondence</li>
                  </ul>
                </Card.Body>
              </Card>
            </Tab>

            <Tab eventKey="treasurer" title="Treasurer">
              <Card className="custom-card">
                <Card.Body>
                  <Card.Title>The Treasurer is responsible for:</Card.Title>
                  <ul>
                    <li>Managing club funds</li>
                    <li>Preparing budgets</li>
                    <li>Tracking expenses</li>
                  </ul>
                </Card.Body>
              </Card>
            </Tab>

            <Tab eventKey="icc-rep" title="ICC Representative">
              <Card className="custom-card">
                <Card.Body>
                  <Card.Title>The ICC Representative is responsible for:</Card.Title>
                  <ul>
                    <li>Keeping records of all ICC-related activities and policies</li>
                    <li>Dealing with Club Relation or Associate student-related activities</li>
                  </ul>
                </Card.Body>
              </Card>
            </Tab>

            <Tab eventKey="outreach" title="Outreach Officer">
              <Card className="custom-card">
                <Card.Body>
                  <Card.Title>The Outreach Officer is responsible for:</Card.Title>
                  <ul>
                    <li>Club communications through social media platforms</li>
                    <li>Producing relevant marketing materials that help promote the club</li>
                  </ul>
                </Card.Body>
              </Card>
            </Tab>

            <Tab eventKey="workshop-officer" title="Workshop Officer">
              <Card className="custom-card">
                <Card.Body>
                  <Card.Title>The Workshop Officer is responsible for:</Card.Title>
                  <ul>
                    <li>Planning, coordinating, and scheduling workshops on relevant topics</li>
                    <li>Work with instructors, guest speakers, and advanced club members to lead workshops</li>
                    <li>Advertise and promote workshops</li>
                  </ul>
                </Card.Body>
              </Card>
            </Tab>
          </Tabs>
        </div>

        <p className="j-p mt-5">Frequently Asked Questions</p>
        <Pill />

        <div className="acrdn">
        <Accordion defaultActiveKey={['0']} alwaysOpen>

          <Accordion.Item eventKey="0">
            <Accordion.Header>Do I need programming experience to join?</Accordion.Header>
            <Accordion.Body>
              Not at all! We welcome individuals of all skill levels, whether you’re just starting out or an experienced coder looking to share your expertise.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>What are the benefits of becoming a member?</Accordion.Header>
            <Accordion.Body>
              As a member, you'll gain access to exclusive events, hands-on workshops, personalized tutoring, networking opportunities, and the chance to collaborate on innovative projects.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Is the club open to all majors?</Accordion.Header>
            <Accordion.Body>
              Absolutely! Our club is open to students from all majors, not just Computer Science. If you’re passionate about technology or curious to learn, you’re welcome here.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Is there a membership fee?</Accordion.Header>
            <Accordion.Body>
              No fees are required! Becoming a member is as simple as joining our Discord community.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>When do leadership applications open?</Accordion.Header>
            <Accordion.Body>
              Applications for officer and leadership roles usually open a week or two before each semester begins. Stay updated by joining our Discord server and subscribing to our mailing list!
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>Who are the club's partners and collaborators?</Accordion.Header>
            <Accordion.Body>
                Our club works closely with a variety of groups, including SWE, SMACS, ENGR Club, GAIN, AGS, PTK, Webshare, and more. We also partner with organizations like STEM for Others, Break Through Tech, and MLH to expand opportunities for our members.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>What if I have more questions?</Accordion.Header>
            <Accordion.Body>
              Feel free to reach out! You can message us directly on Discord, contact an officer personally, or get in touch with our club advisors. Visit the Team page for their contact details.
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
        </div>

      </Container>

      <MailingList />

      <Footer />
    </div>
  );
};

export default JoinUs;

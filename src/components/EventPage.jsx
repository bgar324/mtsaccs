import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import MyNavbar from './MyNavbar';
import Footer from './Footer';
import '../styles/EventPage.css';

const EventPage = () => {
  const { id } = useParams();

  const events = [
    {
      id: '1',
      title: 'LA Food Bank',
      date: 'November 2, 2024',
      time: '9 AM - 1 PM',
      location: 'Los Angeles Regional Food Bank, 2300 Pellissier Place, City of Industry, CA 90601',
      description: (
        <div>
          <p>Join us in making a difference with hands-on volunteer tasks, including:</p>
          <ul>
            <li>📦 Sorting, inspecting, cleaning, and repackaging donated food items from local food drives</li>
            <li>🤝 Working together to prepare essential food packages</li>
            <li>✨ Making a positive impact while earning volunteer hours!</li>
          </ul>
        </div>
      ),
      signup: 'Fill out the registration form BEFORE Friday, October 25th 11:59PM:',
      organizer: 'MESA & Mt. SAC CS Club',
      registerLink: 'https://example.com/register/stemguest',
      imagesrc: '/static/events/cs_food_bank_flyer.png',
    },
    {
      id: '2',
      title: 'Game Night',
      date: 'October 30, 2024',
      time: '4 PM - 7 PM',
      location: 'Founders Hall Conference Center, 10 Conference',
      description: (
        <div>
          <p>Get ready for a fun-filled night with exciting activities, including:</p>
          <ul>
            <li>🎮 Challenge your friends to classic video games or team up for multiplayer fun</li>
            <li>🧩 Test your strategy skills with an array of exciting board games and puzzles</li>
            <li>👾 Enjoy a variety of video and board games for a full night of entertainment!</li>
          </ul>
        </div>
      ),      
      registerLink: 'https://discord.com/invite/sWpjfHVuuT',
      imagesrc: '/static/events/cscclubgameflyerv2.png',
      organizer: 'Computer Science Club',
      signup: 'NOTE: This event is open to the public, no registration needed.'
    },
    {
      id: '3',
      title: 'Women of Color in STEM',
      date: 'October 29, 2024',
      time: '2:30 PM : Check in & Refreshments | 3 PM - 5 PM : Main Event',
      location: 'The Summit, Student Center 410 3rd Floor',
      description: (
        <div>
          <p>
            Come and celebrate the achievements of incredible women of color in STEM! We'll have an awesome lineup of speakers, including:
          </p>
          <ul>
            <li>👩‍🔬 Dr. Janel L. Ortiz, Assistant Professor, Mathematics & Science at Cal Poly Pomona</li>
            <li>📊 Grace Kassebaum, Applied Mathematics, UCLA</li>
            <li>🥗 Miriam Abundez-Guerra, Food Scientist, Beyond Meat</li>
            <li>💻 Chelsea Amihere, Software Engineer at Northrop Grumman</li>
          </ul>
        </div>
      ),
      registerLink: 'https://discord.com/invite/sWpjfHVuuT',
      imagesrc: '/static/events/Women_of_Color_in_STEM.png',
      organizer: 'The Equity Center',
      signup: 'NOTE: This event is open to the public, no registration needed.'
    },
    {
      id: '4',
      title: 'STEM Guest Speaker: Jim Herold',
      date: 'October 29, 2024',
      time: '10AM',
      location: 'The Summit, Student Center 410 3rd Floor',
      description: 'Don’t miss this opportunity to learn from Dr. Jim Herold, Senior Software Engineer at Google! He’ll be sharing his journey through Computer Science at CPP and UCR, and offering invaluable advice for aspiring software engineers.',
      registerLink: 'https://forms.office.com/pages/responsepage.aspx?id=8ktNzJ4KQEKu3qfR1oj5NfaMcBznXHtFpUoFBwrvxcZURDZDNkdOSFlWSzRSVFVJQTFNTzY3TEJaSy4u&origin=QRCode&route=shorturl',
      imagesrc: '/static/events/Nov_2024_MESA_Guest_Speaker_Jim_Herold.jpg',
      organizer: 'MESA',
      signup: 'Make sure to mark your calendars and RSVP for the MESA event. These are great opportunities to network, learn, and get inspired by professionals in the field. Let us know if you plan on attending!'
    },
    {
      id: '5',
      title: 'STEMForOthers Projects',
      date: 'Cohort runs from Fall to Spring',
      time: 'Online',
      location: 'Asynchronous',
      description: (
        <ul>
          <p style={{marginBottom: 5}}>Check out the three groups to gain hands on coding experience!</p>
          <li>Frontend Development Group: Update or build the frontend for the STEMplore website.</li>
          <li>Curriculum Group: Design 4-5 weeks of content for the Intermediate Java course.</li>
          <li>Translation Group: Translate the existing Java course into C++ and/or Python.</li>
        </ul>
      ),
      registerLink: 'https://docs.google.com/forms/u/1/d/1co43OjyqbYITjJ-jFDf5GFe_C-NSr_Cf3WtjOpc9oa0/edit',
      imagesrc: '/static/events/cs club stem flyer.png',
      organizer: 'Computer Science Club',
      signup: "Register via the Google Form below. This opportunity is expected to run through Spring 2025, and we do have limited availability. So don't hesitate to register soon!"
    },
    {
      id: '6',
      title: 'Hackathon Prep',
      date: 'October 23, 2024',
      time: '5PM - 6PM',
      location: 'Building 60 - 1605',
      description: (
        <ul>
          <li>🔎 Explore project ideas that suit your interests.</li>
          <li>💻 Group discussions to brainstorm and refine your ideas.</li>
          <li> 📚 Tech advice on resources and tools to help you succeed.</li>
          <li>🙌 Mentorship and support from our talented club members.</li>
        </ul>
      ),
      registerLink: 'https://smacs.vercel.app/',
      imagesrc: '/static/events/smacs.png',
      organizer: 'SMACS',
      signup: 'Fill out the registration form BEFORE Wednesday, October 23th 11:59PM'
    },
    {
      id: '7',
      title: 'UCLA + Break Through Tech AI Program Info Session',
      date: 'December 3, 2024',
      time: '4:30 PM - 6 PM',
      location: 'Founders Hall',
      description: 'Learn about the AI Program in collaboration with UCLA and Break Through Tech, guided by the Assistant Director of Recruitment and Placement. Discover exciting opportunities in Artificial Intelligence, mentorship, and career development!',
      registerLink: 'https://bit.ly/break-through-tech-ai-interest?r=qr',
      imagesrc: '/static/events/mtysacuclav932.png',
      organizer: 'Computer Science Club',
      signup: 'Fill out the registration form BEFORE Tuesday, December 3rd 11:59PM'
    },
    {
      id: '8',
      title: 'Virtual Mentorship Mixer',
      date: 'March 13, 2025',
      time: '6:00 - 8:00 PM',
      location: 'This event is FULLY remote and on Zoom! Make sure you have a version 5.3.0 or higher.',
      description: 'Meet and connect with mentors from top tech companies and industry leaders! Gain valuable information and insight regarding Career Growth & Readiness as well as the Tech Industry and Deep Dives.',
      registerLink : 'https://lu.ma/vfidevu9',
      imagesrc: '/static/events/cs mentorship.png',
      organizer: 'Computer Science Club',
      signup: 'Fill out the registration BEFORE Thursday, March 12 11:59PM'
    },
    {
      id: '9',
      title: (
        <span> Electrical Bluetooth Circuit Car <i>(EBCC-1)</i> Event</span>
      ),
      date: 'April 25, 2025',
      time: '3:00 - 7:00 PM',
      location: 'Building 60, Rm. TBA',
      description: 'TBA! Check back soon for more details.',
      registerLink : 'https://forms.gle/RRSre4LhTXs2kPH38',
      imagesrc: '/static/events/cs ebcc event.png',
      organizer: 'Computer Science Club',
      signup: 'Fill out the registration BEFORE Thursday, April 24 11:59PM'
    }
  ];

  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="app-container">
        <MyNavbar />
        <div className="content">
          <Container className="align-items-center">
            <img src="/static/404.png" alt="404" className="img-fluid" />
            <p>Uh-oh, Looks like this duck lost its way!</p>
            <p>
              Back to <Nav.Link href="/">safety</Nav.Link>
            </p>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app-container">
      <MyNavbar />
      <div className="content epcontent">
        <h1 className="team-header">Join us at the {event.title}!</h1>
        <Container fluid className="net-event-container">
          <Row className="align-items-center">
            {/* Image Section */}
            <Col xs={12} md={6} className="mb-4">
              <img
                src={event.imagesrc}
                alt="event"
                className="img-fluid eventpage-img"
              />
            </Col>

            {/* Card Section */}
            <Col xs={12} md={6}>
              <Card className="eventpage-card">
                <Card.Body>
                  <Card.Title>
                    <h1 className="event-title">{event.title}</h1>
                  </Card.Title>
                  <Card.Text className="pevent-card-text">
                    <h3>Event Overview</h3>
                    <p>🗓️ Date: {event.date}</p>
                    <p>⏰ Time: {event.time}</p>
                    <p>📍 Location: {event.location}</p>
                    <p>🎯 Organizer: {event.organizer}</p>
                    <h3 className="mt-5">What to expect:</h3>
                    <p>{event.description}</p>
                    <h3 className="mt-5">How to sign up:</h3>
                    <p>{event.signup}</p>
                    <a
                      href={event.registerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn kobe"
                    >
                      Register
                    </a>
                    <h3 className="mt-5 text-center">
                      For any questions and concerns, contact us via:
                    </h3>
                    <a
                      href="mailto:mtsac.csclub@gmail.com"
                      className="mail"
                    >
                      📧 mtsac.csclub@gmail.com
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default EventPage;
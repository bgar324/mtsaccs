import React from 'react'
import { Helmet } from 'react-helmet'
import MyNavbar from '../components/MyNavbar'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import { Container, Row } from "react-bootstrap";
import Pill from '../components/Pill'
import './Projects.css'

const Projects = () => {
  return (
    <div className="app-container">
      <Helmet>
        <title>Projects | CS Club at Mt. SAC</title>
      </Helmet>
      <MyNavbar />
      <div className="content pcontent">
        <Container fluid="lg shd">
        <h2 className="text-center team-header">Past Projects</h2>
        <Pill />
        <p className="text-center mb-5 team-p">
          Check out the previous projects and workshops made by our past officers!
        </p>
          <Row className =  "gx-5 gy-4 rowz">
          <h3 className="section-heading text-center mt-2 mb-4">Intro Workshops</h3>
            <ProjectCard
              name="Intro to Arduino"
              link="https://docs.google.com/presentation/d/1ibq6mKTArqkUY7aMJD_wPrBJIE6gd7xQx00o1-9ZVcc/edit#slide=id.p"
              image="static/project/Intro to arduino_ projects.png" 
            />
            <ProjectCard
              name="Intro to Computer Science"
              link="https://docs.google.com/presentation/d/1qVwx4yZ5tW8dbVJDzh1pRuDjeKLZZMLt0PGaoFUd-n0/edit#slide=id.g20f7af2584a_0_14"
              image="static/project/Introduction to Computer Science.png" 
            />
            <ProjectCard
              name="Intro to Java"
              link="https://docs.google.com/presentation/d/1mkV-e8Umj3ohlOdyqsSIXpQAvhg5J3osSbl5Z_efK3c/edit#slide=id.p"
              image="static/project/Intro to Java.png" 
            />
            <ProjectCard
              name="Intro to Git and Github"
              link="https://docs.google.com/presentation/d/1xuTi38wjr2_dkuBIDsY_mwUNmLzFm_gIkvDvZDcVCEQ/edit#slide=id.g647bcbd391_0_19"
              image="static/project/Intro to arduino_ projects.png" 
            />
            <ProjectCard
              name="Intro to Web Dev"
              link="https://docs.google.com/presentation/d/1JWuLIgnXQyr_Ez8E3F6-4owPj42K8vZ3UtO_nMp2J3A/edit#slide=id.g20f7af2584a_0_14"
              image="static/project/Web Development Presentation.png" 
            />
            <h3 className="section-heading text-center mt-5 mb-4">Hackathons</h3>
            <ProjectCard
              name="Citrus Hack 2019"
              link="https://docs.google.com/presentation/d/1kvQQ9zwFHZ3iwAoByCs4mibPTC9Upagi8DU0oIBx3RY/edit#slide=id.p"
              image="static/project/Citrus Hack 2019 Opening Ceremony.png" 
            />
           <ProjectCard
              name="Mt. Hacks 2019"
              link="https://docs.google.com/presentation/d/16CZ6Xkcd68mVwhtWgw9XtgK--Ar2U6PZ1aphV6WcviA/edit#slide=id.p"
              image="static/project/Mt. Hacks Opening Ceremony.png" 
            />
            <h3 className="section-heading text-center mt-5 mb-4">Informational Meetings</h3>
            <ProjectCard
              name="Resume Workshop"
              link="https://docs.google.com/presentation/d/1K-zcJryfaTtuF6QDq6YsgikRWzYZ_2L1UAnH8GG_WBc/edit#slide=id.g35f391192_00"
              image="static/project/Resume Workshop Slideshow.png" 
            />
            <ProjectCard
              name="App building with Mendix"
              link="https://docs.google.com/presentation/d/1TDU9_XIL-FdNbVrhpzmsge8rzIhpQ-2KUVmxTZprgBQ/edit#slide=id.g3f0b50a039_0_0"
              image="static/project/MLH Localhost - No-Code App Building with Mendix - Workshop Slides With Video (v0.0.1).png" 
            />
            <ProjectCard
              name="AI Briefing"
              link="https://docs.google.com/presentation/d/19D-eFgYFcaV79_DuUVP9HVPauB9pX6LQ6jmz-KFvQpE/edit#slide=id.g2629d10e862_0_79"
              image="static/project/AI.png" 
            />
            <ProjectCard
              name="Web Development"
              link="https://docs.google.com/presentation/d/1n_b8fKJWwiZZnUXX9GhMSezJvULtRHDlOmDYwAMhOrw/edit#slide=id.g6514918931_0_22"
              image="static/project/Web Development Presentation.png" 
            />
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Projects
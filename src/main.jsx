import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './1-Home/App'; 
import About from './2-About/About';
import Events from './3-Events/Events';
import EventPage from './components/EventPage';
import Team from './4-Team/Team';
import Projects from './5-Projects/Projects';
import JoinUs from './6-Join-Us/JoinUs';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/join-us" element={<JoinUs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

import React from 'react';
import './page.css';

function VolunteerMissionaryWorkPage() {
  return (
    <div className="card">
      <div className="container">
        <h1><strong>Project: Volunteer Missionary Work</strong></h1><br/>
        <p className="description">
          <span className="highlight"><strong>Description:</strong></span><br/> Served as a missionary, engaging with diverse communities and providing support through motivational training and strategic life planning.
        </p><br/>

        <div className="achievements">
          <h2><strong>Key Achievements:</strong></h2>
          <ul>
            <li>Conducted motivational training sessions for groups, inspiring individuals to set and achieve goals.</li>
            <li>Engaged with diverse communities, fostering self-reliance and personal development.</li>
            <li>Planned and monitored personal goals, providing guidance for short, medium, and long-term objectives.</li>
          </ul>
        </div><br/>

        <div className="skills">
          <h2><strong>Skills Utilized:</strong></h2>
          <ul>
            <li>Interpersonal communication</li>
            <li>Leadership</li>
            <li>Goal setting and monitoring</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default VolunteerMissionaryWorkPage;

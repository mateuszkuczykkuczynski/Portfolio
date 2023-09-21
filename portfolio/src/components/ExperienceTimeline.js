import React from 'react';

const ExperienceTimeline = ({ experiences }) => {
  return (
    <div className="experience-timeline">
      <h2>Experience Timeline</h2>
      <ul>
        {experiences.map((experience, index) => (
          <li key={index}>
            <span className="date">{experience.startDate} - {experience.endDate}</span>
            <span className="job-title">{experience.jobTitle}</span>
            <span className="company">{experience.company}</span>
            <p>{experience.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceTimeline;

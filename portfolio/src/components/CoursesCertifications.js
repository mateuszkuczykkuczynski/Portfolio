import React from 'react';

const CoursesCertifications = ({ courses, certifications }) => {
  return (
    <div className="courses-certifications">
      <section className="courses">
        <h2>Recommended Courses</h2>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>
              <a href={course.link} target="_blank" rel="noopener noreferrer">
                {course.name}
              </a>
              <p>{course.provider}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="certifications">
        <h2>My Certifications</h2>
        <ul>
          {certifications.map((certification, index) => (
            <li key={index}>
              <a href={certification.link} target="_blank" rel="noopener noreferrer">
                {certification.name}
              </a>
              <p>{certification.issuingOrganization}</p>
              <p>{certification.date}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CoursesCertifications;

import React, { useState } from 'react';
import title from './images/titleImage.png';
import GradeLevelDropdown from '../GradeLevelDropdown';

const teacherData = {
  // ... (Teacher data remains unchanged)
};

function Header({ currentPage, handlePageChange }) {
  const [selectedGrade, setSelectedGrade] = useState('Kindergarten');

  const handleGradeChange = (event) => {
    setSelectedGrade(event.target.value);
  };

  const teachersByGrade = teacherData[selectedGrade] || [];

  return (
    <header className="App-header">
      <img src={title} className="App-title" alt="title" />
      <div className="header-container">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#announcements"
              onClick={() => handlePageChange('announcements')}
              className={currentPage === 'announcements' ? 'nav-link active' : 'nav-link'}
            >
              🧡Announcements
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#assignments"
              onClick={() => handlePageChange('assignments')}
              className={currentPage === 'assignments' ? 'nav-link active' : 'nav-link'}
            >
              🧐Assignments
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resources"
              onClick={() => handlePageChange('resources')}
              className={currentPage === 'resources' ? 'nav-link active' : 'nav-link'}
            >
              🐶Resources
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#teachers"
              onClick={() => handlePageChange('teachers')}
              className={currentPage === 'teachers' ? 'nav-link active' : 'nav-link'}
            >
              🌞Teachers
            </a>
          </li>
        </ul>

        {/* Show the GradeLevelDropdown in the header */}
        <GradeLevelDropdown selectedGrade={selectedGrade} handleGradeChange={handleGradeChange} />

        {/* Show teachers and resources based on selected grade only in the "Teachers" section */}
        {currentPage === 'teachers' && (
          <div>
            <h2>Teachers for {selectedGrade}:</h2>
            <ul>
              {teachersByGrade.map((teacher) => (
                <li key={teacher.id}>{teacher.name}</li>
              ))}
            </ul>

            <h2>Resources for {selectedGrade} Teachers:</h2>
            <ul>
              {teachersByGrade.map((teacher) => (
                <div key={teacher.id}>
                  <h3>{teacher.name}</h3>
                  <ul>
                    {teacher.resources.map((resource, index) => (
                      <li key={index}>
                        <a href={resource.link} target="_blank" rel="noopener noreferrer">
                          {resource.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

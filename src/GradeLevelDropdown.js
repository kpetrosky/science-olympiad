import React, { useState } from 'react';

const GradeLevelDropdown = ({ selectedGrade, handleGradeChange }) => {
  // Define grade levels and teachers
  const gradeLevels = [
    'Kindergarten',
    '1st Grade',
    '2nd Grade',
    '3rd Grade',
    '4th Grade',
    '5th Grade',
    '6th Grade',
    '7th Grade',
    '8th Grade',
  ];

  const teachersByGrade = {
    'Kindergarten': [
      {
        id: 1,
        name: '🌞Teacher A',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
      {
        id: 2,
        name: '🐟Teacher B',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
      {
        id: 3,
        name: '🐞Teacher C',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
    ],
    '1st Grade': [
      {
        id: 1,
        name: '🍩Teacher D',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
      {
        id: 2,
        name: '🦄Teacher E',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
      {
        id: 3,
        name: '🌟Teacher F',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
    ],
    // Continue adding resources for other grade levels...
    '2nd Grade': [
      {
        id: 1,
        name: '🍩Teacher G',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
      {
        id: 2,
        name: '🦄Teacher H',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
      {
        id: 3,
        name: '🌟Teacher I',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
    ],
    '3rd Grade': [
      {
        id: 1,
        name: '🍩Teacher J',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
      {
        id: 2,
        name: '🦄Teacher K',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
      {
        id: 3,
        name: '🌟Teacher L',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
    ],
    '4th Grade': [
      {
        id: 1,
        name: '🍩Teacher M',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
      {
        id: 2,
        name: '🦄Teacher N',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
      {
        id: 3,
        name: '🌟Teacher O',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
    ],
    '5th Grade': [
      {
        id: 1,
        name: '🍩Teacher P',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
      {
        id: 2,
        name: '🦄Teacher Q',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
      {
        id: 3,
        name: '🌟Teacher R',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
    ],
    '6th Grade': [
      {
        id: 1,
        name: '🍩Teacher S',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
      {
        id: 2,
        name: '🦄Teacher T',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
      {
        id: 3,
        name: '🌟Teacher U',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
    ],
    '7th Grade': [
      {
        id: 1,
        name: '🍩Teacher V',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
      {
        id: 2,
        name: '🦄Teacher X',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
      {
        id: 3,
        name: '🌟Teacher Y',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
    ],
    '8th Grade': [
      {
        id: 1,
        name: '🍩Teacher Z',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
      {
        id: 2,
        name: '🦄Teacher AA',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
      {
        id: 3,
        name: '🌟Teacher AB',
        resources: [
          { name: 'Typing Club', link: 'https://www.typingclub.com' },
          { name: 'HP Computer Skills Games', link: 'https://www.hp.com/computer-skills-games' },
          { name: 'Google Classroom', link: 'https://classroom.google.com' },
          { name: 'iReady', link: 'https://www.iready.com' }
        ]
      },
    ],
  };
  

  // Get the selected teachers based on the selected grade
  const selectedTeachers = teachersByGrade[selectedGrade] || [];
  const [selectedTeacher, setSelectedTeacher] = useState('Select Teacher');

  const handleTeacherChange = (event) => {
    setSelectedTeacher(event.target.value);
  };

  return (
    <div>
      <h2>Select Grade Level:</h2>
      <select value={selectedGrade} onChange={handleGradeChange}>
        <option value="Select Grade">Select Grade</option>
        {gradeLevels.map((grade) => (
          <option key={grade} value={grade}>
            {grade}
          </option>
        ))}
      </select>
      {selectedGrade !== 'Select Grade' && (
        <>
          <h2>Select Teacher:</h2>
          <select value={selectedTeacher} onChange={handleTeacherChange}>
            <option value="Select Teacher">Select Teacher</option>
            {selectedTeachers.map((teacher) => (
              <option key={teacher.id} value={teacher.name}>
                {teacher.name}
              </option>
            ))}
          </select>
          {selectedTeacher !== 'Select Teacher' && selectedTeachers.length > 0 ? (
            <div>
              <h2>Resources for {selectedTeacher}:</h2>
              <ul>
                {selectedTeachers.map((teacher) =>
                  teacher.name === selectedTeacher ? (
                    teacher.resources.map((resource, index) => (
                      <li key={index}>
                        <a href={resource.link} target="_blank" rel="noopener noreferrer">
                          {resource.name}
                        </a>
                      </li>
                    ))
                  ) : null
                )}
              </ul>
            </div>
          ) : (
            <p>Please select a teacher.</p>
          )}
        </>
      )}
    </div>
  );
};

export default GradeLevelDropdown;

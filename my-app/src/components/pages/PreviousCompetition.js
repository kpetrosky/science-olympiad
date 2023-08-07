// TeacherPage.js

import React, { useState } from 'react';
import GradeLevelDropdown from './GradeLevelDropdown';
import { teacherData } from './data'; // Import the teacher data from a separate file or wherever it's located

const TeacherPage = () => {
  const allGrades = Object.keys(teacherData);
  const [selectedGrade, setSelectedGrade] = useState('Kindergarten');

  const handleGradeChange = (event) => {
    setSelectedGrade(event.target.value);
  };

  const teachersByGrade = teacherData[selectedGrade] || [];
  const selectedTeachers = teachersByGrade.slice(0, 3); // Get the first 3 teachers for the selected grade

  return (
    <div>
      <h1>Teacher Page</h1>
      <GradeLevelDropdown
        availableGrades={allGrades}
        selectedGrade={selectedGrade}
        handleGradeChange={handleGradeChange}
      />

      <h2>Teachers for {selectedGrade}:</h2>
      <ul>
        {selectedTeachers.map((teacher) => (
          <li key={teacher.id}>{teacher.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherPage;

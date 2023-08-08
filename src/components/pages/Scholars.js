import React from 'react';

function Scholars() {
  const studentList = [
    'John Doe',
    'Jane Smith',
    'Michael Johnson',
    'Emily Brown',
    'William Davis',
    // Add more student names here
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul>
          {studentList.map((student, index) => (
            <li key={index}>{student}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Scholars;

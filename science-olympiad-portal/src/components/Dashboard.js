// Dashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [children, setChildren] = useState([]);

  // Simulated data for demonstration purposes
  const sampleChildrenData = [
    {
      id: 1,
      name: 'Child 1',
      events: [
        { id: 'event1', name: 'Science Fair', date: '2023-09-15' },
        { id: 'event2', name: 'Robotics Competition', date: '2023-10-10' },
      ],
    },
    {
      id: 2,
      name: 'Child 2',
      events: [
        { id: 'event2', name: 'Robotics Competition', date: '2023-10-10' },
        { id: 'event3', name: 'Chemistry Olympiad', date: '2023-11-05' },
      ],
    },
    // ...more child data
  ];

  useEffect(() => {
    // Fetch children data from the database
    // For demonstration, we'll use the sample data
    setChildren(sampleChildrenData);
  }, []);

  return (
    <div>
      <h2>Parent Dashboard</h2>

      {/* Events Section */}
      <section>
        <h3>Events</h3>
        {children.map((child) => (
          <div key={child.id}>
            <h4>Child: {child.name}</h4>
            <ul>
              {child.events.map((event) => (
                <li key={event.id}>
                  <Link to={`/event/${event.id}`}>
                    {event.name} - {event.date}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Competition Dates Section */}
      <section>
        <h3>Competition Dates</h3>
        <div>
      {/* ...other sections */}
      
      {/* Competition Dates Section */}
      <section>
        <h3>Competition Dates</h3>
        <Link to="/competition-dates">View Competition Dates</Link>
      </section>
      
      {/* ...other sections */}
    </div>
      </section>

      {/* Previous Competitions Section */}
      <section>
        <h3>Previous Competitions</h3>
        {/* Display list of previous competitions */}
      </section>

      {/* How to Contribute Section */}
      <section>
        <h3>How to Contribute</h3>
        {/* Display information on how parents can contribute */}
      </section>
    </div>
  );
}

export default Dashboard;

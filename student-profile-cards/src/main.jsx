import React from 'react';
import { createRoot } from 'react-dom/client';
import StudentProfileCard from './StudentProfileCard.jsx';
import '../../lab.css';
import './style.css';

function App() {
  return (
    <main>
      <nav aria-label="Lab activities">
        <a href="../">Activities</a>
        <a href="../student-attendance/">Student Attendance</a>
      </nav>

      <h1>Student Profiles</h1>
      <div className="profiles">
        <StudentProfileCard name="John Pork" course="BS Information Technology" section="2A" />
        <StudentProfileCard name="Jonathan Swine" course="BS Computer Science" section="2B" />
        <StudentProfileCard name="Juan Baboy" course="BS Information Systems" section="2C" />
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);

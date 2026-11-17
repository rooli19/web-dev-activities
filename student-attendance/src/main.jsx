import React from "react";
import { createRoot } from "react-dom/client";
import "../../lab.css";
import "./style.css";

const students = [
  { id: 1, name: "John Pork", present: true },
  { id: 2, name: "Jonathan Swine", present: false },
  { id: 3, name: "Juan Baboy", present: true },
  { id: 4, name: "Mike Hawk", present: false },
  { id: 5, name: "Ben Dover", present: true },
];

function App() {
  return (
    <main>
      <nav aria-label="Lab activities">
        <a href="../">Activities</a>
        <a href="../student-profile-cards/">Student Profile Cards</a>
      </nav>

      <h1>Student Attendance</h1>
      <ul className="attendance-list">
        {students.map((student) => (
          <li key={student.id}>
            <span>{student.name}</span>
            {student.present ? (
              <span className="status present">Present</span>
            ) : (
              <span className="status absent">Absent</span>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);

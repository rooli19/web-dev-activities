import React from 'react';

export default function StudentProfileCard({ name, course, section }) {
  return (
    <article className="profile-card">
      <h2>{name}</h2>
      <p>Course: {course}</p>
      <p>Section: {section}</p>
    </article>
  );
}

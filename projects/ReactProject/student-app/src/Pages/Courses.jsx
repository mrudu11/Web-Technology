import React, { useState } from "react";

export default function Courses({ onSelectCourse }) {
  const [courses] = useState([
    {
      id: 1,
      name: "Web Development",
      description: "Learn HTML, CSS, JavaScript",
      fees: 5000,
      duration: "8 weeks",
    },
    {
      id: 2,
      name: "Data Structures",
      description: "Learn DSA concepts",
      fees: 6000,
      duration: "10 weeks",
    },
    {
      id: 3,
      name: "Python Programming",
      description: "Learn Python from basics",
      fees: 4500,
      duration: "6 weeks",
    },
  ]);

  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>Available Courses</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px" }}>
        {courses.map((course) => (
          <div
            key={course.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <p><strong>Fees:</strong> ₹{course.fees}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <button
              onClick={() => onSelectCourse(course)}
              style={{
                width: "100%",
                padding: "8px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
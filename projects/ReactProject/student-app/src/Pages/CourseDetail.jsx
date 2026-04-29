import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";

function CourseDetail({ course, onBack, onRegister }) {
  const [showForm, setShowForm] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistrationSubmit = (formData) => {
    setIsRegistered(true);
    if (onRegister) {
      onRegister({ ...course, studentName: formData.name, studentEmail: formData.email });
    }
    setTimeout(() => {
      setShowForm(false);
      onBack();
    }, 1000);
  };

  if (showForm) {
    return (
      <RegistrationForm
        course={course}
        onBack={() => setShowForm(false)}
        onSubmit={handleRegistrationSubmit}
      />
    );
  }

  return (
    <div>
      <button
        onClick={onBack}
        style={{
          padding: "8px 16px",
          backgroundColor: "#6c757d",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "15px",
        }}
      >
        ← Back
      </button>

      <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "5px" }}>
        <h1>{course.name}</h1>
        <p>{course.description}</p>

        <div style={{ margin: "20px 0" }}>
          <h3>Course Details</h3>
          <p><strong>Fees:</strong> ₹{course.fees}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
        </div>

        <button
          onClick={() => setShowForm(true)}
          disabled={isRegistered}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: isRegistered ? "#ccc" : "#28a745",
            color: isRegistered ? "#666" : "white",
            border: "none",
            borderRadius: "4px",
            cursor: isRegistered ? "not-allowed" : "pointer",
            fontSize: "16px",
          }}
        >
          {isRegistered ? "✓ Registration Complete" : "Proceed to Registration"}
        </button>
      </div>
    </div>
  );
}

export default CourseDetail;
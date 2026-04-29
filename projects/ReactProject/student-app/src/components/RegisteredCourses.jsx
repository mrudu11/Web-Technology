import React from "react";

function RegisteredCourses({ registered, onRemove }) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Your Registered Courses</h2>
      {registered.length === 0 ? (
        <p>No courses registered yet.</p>
      ) : (
        <div>
          {registered.map((course) => (
            <div
              key={course.id}
              style={{
                border: "1px solid #28a745",
                padding: "15px",
                marginBottom: "10px",
                borderRadius: "5px",
                backgroundColor: "#f0f9f0",
              }}
            >
              <h3>{course.name}</h3>
              <p><strong>Fees:</strong> ₹{course.fees}</p>
              <p><strong>Duration:</strong> {course.duration}</p>
              {course.studentName && <p><strong>Registered as:</strong> {course.studentName}</p>}
              {course.studentEmail && <p><strong>Email:</strong> {course.studentEmail}</p>}
              <button
                onClick={() => onRemove(course.id)}
                style={{
                  padding: "6px 12px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}
          <p><strong>Total: {registered.length} course(s)</strong></p>
        </div>
      )}
    </div>
  );
}

export default RegisteredCourses;

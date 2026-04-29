import React, { useState } from "react";

function RegistrationForm({ course, onBack, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert(
      `Registration Successful!\n\nName: ${formData.name}\nEmail: ${formData.email}\nCourse: ${course.name}`
    );

    if (onSubmit) {
      onSubmit(formData);
    }

    setFormData({ name: "", email: "" });
  };

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

      <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "5px", maxWidth: "400px" }}>
        <h2>Registration Form</h2>
        <p><strong>Course:</strong> {course.name} - ₹{course.fees}</p>

        <form onSubmit={handleSubmit} style={{ marginTop: "15px" }}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              style={{
                width: "100%",
                padding: "8px",
                border: errors.name ? "2px solid red" : "1px solid #ccc",
                borderRadius: "4px",
                boxSizing: "border-box",
              }}
            />
            {errors.name && <p style={{ color: "red", fontSize: "12px", marginTop: "3px" }}>{errors.name}</p>}
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "8px",
                border: errors.email ? "2px solid red" : "1px solid #ccc",
                borderRadius: "4px",
                boxSizing: "border-box",
              }}
            />
            {errors.email && <p style={{ color: "red", fontSize: "12px", marginTop: "3px" }}>{errors.email}</p>}
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Complete Registration
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  const [courseId, setCourseId] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mob, setMob] = useState("");

  const navigate = useNavigate();

  const signup = (event) => {
    event.preventDefault();

    // Validation
    if (courseId === "") {
      toast.warn("Enter Course ID");
      return;
    }
    if (email === "") {
      toast.warn("Enter Email");
      return;
    }
    if (name === "") {
      toast.warn("Enter Name");
      return;
    }
    if (mob === "") {
      toast.warn("Enter Mobile Number");
      return;
    }

    // Store in localStorage (no backend)
    const userData = {
      courseId,
      email,
      name,
      mob,
    };

    localStorage.setItem("student", JSON.stringify(userData));

    toast.success("Registration Successful ");

    navigate("/");
  };

  return (
    <div className="container w-50">
      <h2 className="mt-3">Register</h2>

      <div className="mb-3">
        <label className="form-label">Course ID</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Course ID"
          onChange={(e) => setCourseId(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Mobile Number</label>
        <input
          type="tel"
          className="form-control"
          placeholder="Enter Mobile Number"
          onChange={(e) => setMob(e.target.value)}
        />
      </div>

      <button className="btn btn-success" onClick={signup}>
        Sign Up
      </button>

      <div className="mt-3">
        Already have account? <Link to="/">Login</Link>
      </div>
    </div>
  );
}
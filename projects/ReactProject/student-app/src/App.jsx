import React, { useState } from "react";
import Courses from "./Pages/Courses";
import CourseDetail from "./Pages/CourseDetail";
import RegisteredCourses from "./components/RegisteredCourses";

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [registered, setRegistered] = useState([]);

  const handleRegister = (course) => {
    if (!registered.find((c) => c.id === course.id)) {
      setRegistered([...registered, course]);
    }
  };

  const handleRemove = (id) => {
    setRegistered(registered.filter((c) => c.id !== id));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>📚 Course Registration System</h1>

      {selectedCourse ? (
        <CourseDetail
          course={selectedCourse}
          onRegister={handleRegister}
          onBack={() => setSelectedCourse(null)}
        />
      ) : (
        <>
          <Courses onSelectCourse={setSelectedCourse} />
          <RegisteredCourses registered={registered} onRemove={handleRemove} />
        </>
      )}
    </div>
  );
}


export default App;
import { useState } from 'react'
import './App.css'
import StudentList from './StudentList';
import AddStudent from './AddStudent';

function App() {
  const [view, setView] = useState('student')
  const [students, setStudents] = useState([
    { name: "mrudula", age: 21, id: 137 },
    { name: "vaishnavi", age: 21, id: 129 },
    { name: "samruddhi", age: 21, id: 126 }
  ])

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent])
    setView('student')
  }

  return (
    <>
      <h1>Student Information</h1>
      <div>
        <button onClick={() => setView('student')}>Student</button>
        <button onClick={() => setView('addstudent')}>Add Student</button>
      </div>
      
      {view === 'student' ? (
        <StudentList students={students} />
      ) : (
        <AddStudent onAddStudent={addStudent} />
      )}
    </>
  )
}

export default App;
import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import AddStudent from './Components/AddStudent'
import Student from './Components/Student'
import Navbar from './Components/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() { 
  const [students, setStudents] = useState([
    { name: "mrudula", id: 137 },
    { name: "vaishnavi", id: 129 },
    { name: "samruddhi", id: 126 }
  ])

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent])
  }

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id))
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/student' element={<AddStudent onAddStudent={addStudent} />} />
        <Route path='/addstudent' element={<Student students={students} onDelete={deleteStudent} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
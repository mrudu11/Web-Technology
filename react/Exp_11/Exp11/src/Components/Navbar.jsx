import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/student'>Student</Link>
      <Link to='/addstudent'>Add Student</Link>
    </nav>
  )
}

export default Navbar
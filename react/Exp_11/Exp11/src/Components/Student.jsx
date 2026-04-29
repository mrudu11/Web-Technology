import React from 'react'

function Student({ students = [], onDelete }) {
  return (
    <div>
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students found</p>
      ) : (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.name} - ID: {student.id}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Student
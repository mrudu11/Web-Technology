import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddStudent({ onAddStudent }) {
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (name === '' || id === '') {
      alert('Please fill all fields')
      return
    }

    onAddStudent({ name, id: parseInt(id) })
    setName('')
    setId('')
    navigate('/student')
  }

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>
        <div>
          <label>ID: </label>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter ID"
          />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  )
}

export default AddStudent
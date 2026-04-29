import React, { useState } from 'react'

function AddStudent({ onAddStudent }) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [id, setId] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (name === '' || age === '' || id === '') {
      alert('Please fill all fields')
      return
    }

    onAddStudent({ name, age: parseInt(age), id: parseInt(id) })
    setName('')
    setAge('')
    setId('')
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
          <label>Age: </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter age"
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

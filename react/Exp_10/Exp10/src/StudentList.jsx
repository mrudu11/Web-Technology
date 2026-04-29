function StudentList(Props){
    const students=Props.students;
    return(
        <div>
        <h2>Student List</h2>
        {students.length === 0 ? (
          <p>No students found</p>
        ) : (
          <ul>
            {students.map((student) => (
              <li key={student.id}>
                {student.name} - Age: {student.age} - ID: {student.id}
              </li>
            ))}
          </ul>
        )}
        </div>
    )

}

export default StudentList;
let students = [];

document.getElementById("addBtn").addEventListener("click", addStudent);
document.getElementById("displayStudent").addEventListener("click", displayStudents);

function addStudent() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let nameError = document.getElementById("nameError");
    let ageError = document.getElementById("ageError");

    nameError.innerHTML=""
    ageError.innerHTML=""
    let isValid=true;

    if(name === "" ){
        nameError.innerHTML="enter name";
        nameError.style.color="red"
        isValid=false;
    }

    if(age === "" ){
        ageError.innerHTML="enter age";
        ageError.style.color="red"
        isValid=false;
    }

    let student = {
        name: name,
        age: age
    };

    students.push(student);
    if(isValid)
     alert("Student added successfully");
}

function displayStudents() {

    let section = document.getElementById("studentSection");
    section.style.display = "block";

    let list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach(function(student){
        let li = document.createElement("li");
        li.textContent = "Name: " + student.name + " | Age: " + student.age;
        list.appendChild(li);
    });
}
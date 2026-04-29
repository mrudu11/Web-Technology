const courses = [
    {
        id: 1,
        name: "Artificial Intelligence and Machine Learning",
        dept: "AIML",
        fees: "₹1,20,000",
        details: "Learn AI, Machine Learning, Python, Data Science."
    },
    {
        id: 2,
        name: "Computer Science",
        dept: "CSE",
        fees: "₹1,00,000",
        details: "Programming, Web Dev, DBMS, Operating Systems."
    },
    {
        id: 3,
        name: "Mechanical Engineering",
        dept: "MECH",
        fees: "₹90,000",
        details: "Thermodynamics, Machines, Design."
    }
];
const container = document.getElementById("courses");

courses.forEach(function(course) {

    const div = document.createElement("div");

    div.className = "course";

    div.innerHTML =
        "<h3>" + course.name + "</h3>" +
        "<p>" + course.dept + "</p>";

    
    div.onclick = function() {
        localStorage.setItem("course", JSON.stringify(course));
        window.location.href = "courses.html";
    };

    container.appendChild(div);
});
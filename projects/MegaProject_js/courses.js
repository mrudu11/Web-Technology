const course = JSON.parse(localStorage.getItem("course"));

const detailsDiv = document.getElementById("details");

if (course) {
    detailsDiv.innerHTML = `
        <h2>${course.name}</h2>
        <p><strong>Department:</strong> ${course.dept}</p>
        <p><strong>Details:</strong> ${course.details}</p>
        <p><strong>Fees:</strong> ${course.fees}</p>
    `;
} else {
    detailsDiv.innerHTML = "<p>No course selected</p>";
}

document.getElementById("registerBtn").onclick = function() {
    window.location.href = "register.html";
};

function goBack() {
    window.location.href = "home.html"; 
}
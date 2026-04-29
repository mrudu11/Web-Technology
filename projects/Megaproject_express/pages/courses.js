const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("/api/courses/" + id)
    .then(res => res.json())
    .then(course => {

        document.getElementById("details").innerHTML = `
            <h2>${course.name}</h2>
            <p><strong>Department:</strong> ${course.dept}</p>
            <p>${course.details}</p>
            <p><strong>Fees:</strong> ${course.fees}</p>
        `;
    });

document.getElementById("registerBtn").onclick = function () {
    window.location.href = "register.html";
};

function goBack() {
    window.location.href = "index.html";
}
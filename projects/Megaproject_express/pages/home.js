const container = document.getElementById("courses");

fetch("/api/courses")
    .then(res => res.json())
    .then(courses => {
        courses.forEach(course => {

            const div = document.createElement("div");
            div.className = "course";

            div.innerHTML = `
                <h3>${course.name}</h3>
                <p>${course.dept}</p>
            `;

            div.onclick = function () {
                window.location.href = "courses.html?id=" + course.id;
            };

            container.appendChild(div);
        });
    });
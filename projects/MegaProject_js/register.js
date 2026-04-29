document.getElementById("form").onsubmit = function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const error = document.getElementById("error");
    const msg = document.getElementById("msg");

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name.trim() === "") {
        error.innerText = "Name is required!";
        return;
    }

    if (!email.match(emailPattern)) {
        error.innerText = " Please enter a valid email!";
        return;
    }

    alert("Registration Successful!");
};

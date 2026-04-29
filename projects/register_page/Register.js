document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");

    
    nameError.innerText = "";
    emailError.innerText = "";
    phoneError.innerText = "";

    let isValid = true;

   
    let namePattern = /^[A-Za-z\s]{3,}$/;
    if (name === "") {
        nameError.innerText = "Enter your name";
        isValid = false;
    }
    else if (!namePattern.test(name)) {
        nameError.innerText = "Name should contain only letters";
        isValid = false;
    }

  
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        emailError.innerText = "Enter email";
        isValid = false;
    }
    else if (!emailPattern.test(email)) {
        emailError.innerText = "Invalid email";
        isValid = false;
    }


    let phonePattern = /^[0-9]{10}$/;
    if (phone === "") {
        phoneError.innerText = "Enter phone number";
        isValid = false;
    }
    else if (!phonePattern.test(phone)) {
        phoneError.innerText = "Phone number must be 10 digits";
        isValid = false;
    }

    if (isValid) {
        phoneError.style.color = "green";
        phoneError.innerText = "Registration Successful!";
    }
});

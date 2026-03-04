document.getElementById("Loginform").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let emailError= document.getElementById("emailerror")
    let passwordError = document.getElementById("passworderror")
    

    emailError.innerText=""
    passwordError.innerText =""

    let isValid = true;
    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email==="") {
        emailError.innerText="enter email"
        isValid =false;  
    }
    else if(!emailPattern.test(email)) {
        emailError.innerText="invalid email"
        isValid =false
    }
    
    let passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(password===""){
        passwordError.innerText="enter strong password";
        isValid = false;
    }
    else if (!passwordPattern.test(password)) {
        passwordError.innerText="password should at least 6 character long"
        isValid = false;
    }

   if(isValid){
    passwordError.style.color ="green";
    passwordError.innerText="login successfully";
   }
});

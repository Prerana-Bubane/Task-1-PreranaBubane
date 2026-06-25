const registerForm =
document.getElementById("registerForm");

registerForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const mobile =
document.getElementById("mobile").value;

const dob =
document.getElementById("dob").value;

const gender =
document.querySelector(
'input[name="gender"]:checked'
);

const password =
document.getElementById("password").value;

const confirmPassword =
document.getElementById("confirmPassword").value;

const terms =
document.getElementById("terms").checked;

if(
!name ||
!email ||
!mobile ||
!dob ||
!gender ||
!password ||
!confirmPassword
){
alert("Please fill all fields");
return;
}

if(password !== confirmPassword){
alert("Passwords do not match");
return;
}

if(!terms){
alert("Accept Terms");
return;
}

const user = {
name,
email,
mobile,
dob,
gender: gender.value,
password
};

localStorage.setItem(
"user",
JSON.stringify(user)
);

alert("Registration Successful");

window.location.href="login.html";

});
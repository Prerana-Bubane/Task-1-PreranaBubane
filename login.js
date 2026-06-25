const loginForm =
document.getElementById("loginForm");

loginForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const email =
document.getElementById("loginEmail").value;

const password =
document.getElementById("loginPassword").value;

const user =
JSON.parse(
localStorage.getItem("user")
);

if(!user){
alert("No registered user found");
return;
}

if(
email === user.email &&
password === user.password
){
localStorage.setItem(
"isLoggedIn",
true
);

window.location.href =
"dashboard.html";
}
else{
alert("Invalid Credentials");
}

});
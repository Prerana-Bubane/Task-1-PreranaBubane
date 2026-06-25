const isLoggedIn =
localStorage.getItem("isLoggedIn");

if(!isLoggedIn){
window.location.href =
"login.html";
}

const user =
JSON.parse(
localStorage.getItem("user")
);

document.getElementById("welcome")
.innerText =
`Welcome ${user.name}`;

document.getElementById("email")
.innerText =
`Email: ${user.email}`;

document.getElementById("mobile")
.innerText =
`Mobile: ${user.mobile}`;

document.getElementById("gender")
.innerText =
`Gender: ${user.gender}`;

document.getElementById("dob")
.innerText =
`DOB: ${user.dob}`;

function logout(){

localStorage.removeItem(
"isLoggedIn"
);

window.location.href =
"login.html";
}
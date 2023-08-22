
let userLogin = JSON.parse(localStorage.getItem("usernameLogin"));

if (userLogin && userLogin.role == "ADMIN") {
    console.log(userLogin);
    document.getElementById("username").innerHTML = userLogin.email;
}
// } else {
//     // nếu không có quyền
//     location.href = "/403.html"
// }
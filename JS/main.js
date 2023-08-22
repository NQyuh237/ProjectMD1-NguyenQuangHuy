

let userLogin = JSON.parse(localStorage.getItem("usernameLogin"));
if (userLogin) {
    document.getElementById("userName").innerText = userLogin.full_name;
    document.getElementById("avatar").src = `./Img/${userLogin.avatar}`;

} else {
    // nếu không có quyền
    location.href = "/403.html"
}



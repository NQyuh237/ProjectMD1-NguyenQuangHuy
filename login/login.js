
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});



let users = JSON.parse(localStorage.getItem('users')) || [];

const handleSigUp = () => {
    // let username = document.getElementById('username').value;
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPass = document.getElementById('confirmPass').value;

    // fullname
    if (fullName.trim() === "") {
        document.getElementById("fullNameError").innerText = "You must not leave it blank.";
        return;
    } else {
        document.getElementById("fullNameError").innerText = "";
    }
    // email
    if (email.trim() === "") {
        document.getElementById("emailError").innerText = "You must not leave it blank.";
        return;
    } else if (!validateEmail(email)) {
        document.getElementById("emailError").innerText = "Incorrect email format.";
        return;
    } else {
        document.getElementById("emailError").innerText = "";
    }
    // password
    if (password.trim() === "") {
        document.getElementById("passwordError").innerText = "You must not leave it blank.";
        return;
    } else if (!validatePassword(password)) {
        document.getElementById("passwordError").innerText = "Incorrect password format.";
        return;
    } else {
        document.getElementById("passwordError").innerText = "";
    }
    // confirm password
    if (password !== confirmPass) {
        document.getElementById("confirmPassError").innerText = " The password does not match, please enter it again.";
        return;
    } else {
        document.getElementById("confirmPassError").innerText = " You have successfully created an account.";
    }
    let newUser = {
        user_id: getNewId(),
        email,
        full_name: fullName,
        password,
        role: "USER",
        avatar: "avatar.jpg",
        cart: []
    }
    users = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(users));
    location.reload();
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

const validatePassword = (pass) => {
    return String(pass)
        .toLowerCase()
        .match(/^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/);
}

const getNewId = () => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let iMax = 0;
    for (let i = 0; i < users.length; i++) {
        const element = users[i];
        console.log("-->", element);
        if (element.user_id > iMax) {
            iMax = element.user_id;
        }
    }
    return iMax + 1;
}


let user = JSON.parse(localStorage.getItem('users')) || [];

const handleLogIn = () => {
    let loginUsername = document.getElementById('loginUsername').value;
    let passLogin = document.getElementById('passLogin').value;
    if (loginUsername.trim() === "" || passLogin.trim() === "") {
        document.getElementById("error").innerText = "You must not leave it blank.";
        return;
    }

    let usernameLogin = checkLogin(loginUsername, passLogin);
    if (usernameLogin == null) {
        document.getElementById("error").innerText = "Incorrect email or password, please re-enter.";
        return;
    }

    localStorage.setItem("usernameLogin", JSON.stringify(usernameLogin));

    if (usernameLogin.role === "ADMIN") {
        location.href = "../admin/index.html";
    } else {
        location.href = "/index.html"
    }
}

const checkLogin = (email, password) => {
    let check = JSON.parse(localStorage.getItem('users'));

    for (let i = 0; i < check.length; i++) {
        const user = check[i];
        if (user.email == email && user.password == password) {
            return user;
        }
    }
    return null;
}
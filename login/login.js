
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

// // lấy ra danh sách user
// let users = JSON.parse(localStorage.getItem('users')) || [];

// const handleRegister = () => {
//     // lấy ra toàn bộ thông tin ô input
//     let fullName = document.getElementById('fullName').value;
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;
//     let passwordConfirm = document.getElementById('repassword').value;
//     // console.log(fullName, email, password, passwordConfirm);



//     // Xác thực dữ liệu
//     // full name  : không để trống
//     if (fullName.trim() === "") {
//         document.getElementById("fullNameError").innerText = "Không được để trống";
//         return;
//     } else {
//         document.getElementById("fullNameError").innerText = "";
//     }
//     // email
//     if (email.trim() === "") {
//         document.getElementById("emailError").innerText = "Không được để trống";
//         return;
//     } else if (!validateEmail(email)) {
//         document.getElementById("emailError").innerText = "Không đúng định dạng email";
//         return;
//     } else {
//         document.getElementById("emailError").innerText = "";
//     }
//     //password
//     if (password.trim() === "") {
//         document.getElementById("passwordError").innerText = "Không được để trống";
//         return;
//     } else if (!validatePassword(password)) {
//         document.getElementById("passwordError").innerText = "Mật khẩu phải ít nhất 6 kí tự bao gồm 1 chữ số, 1 kí tự đặc biệt";
//         return;
//     } else {
//         document.getElementById("passwordError").innerText = "";
//     }
//     // kiểm tra xác nhận mật khẩu
//     if (password !== passwordConfirm) {
//         document.getElementById("repasswordError").innerText = "Mật khẩu không trùng khớp";
//         return;
//     }
//     // thực hiện đăng kí : tạo đối tượng user
//     let newUser = {
//         user_id: getNewId(),
//         email,
//         full_name: fullName,
//         password,
//         role: "USER",
//         avatar: "avatar.jpg",
//         cart: []
//     }
//     // thêm newUser vào mảng
//     users = [...users, newUser];
//     // lưu lên local
//     localStorage.setItem("users", JSON.stringify(users));
//     // chuyển trang tự động
//     // location.href = "/login.html";
// }
// // hàm validate email
// const validateEmail = (email) => {
//     return String(email)
//         .toLowerCase()
//         .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
// }
// // hàm validate pass
// const validatePassword = (pass) => {
//     return String(pass)
//         .toLowerCase()
//         .match(/^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/);
// }
// // hàm tự tăng id
// const getNewId = () => {
//     let idMax = 0;
//     for (let i = 0; i < users.length; i++) {
//         const u = users[i];
//         if (u.user_id > idMax) {
//             idMax = u.user_id;
//         }
//     }
//     return idMax + 1;
// }

// // localStorage.setItem("users", JSON.stringify(users));


// const handleLogin = () => {
//     //lấy ra dữ liệu
//      let username = document.getElementById('username').value;
//     let passLogin = document.getElementById('passLogin').value;

//     // xác thực dữ liệu
//     if (username.trim() === "" || passLogin.trim() === "") {
//         document.getElementById("error").innerText = "Tên đăng nhập hoặc mật khẩu không đc để trống";
//         return;
//     }

//     // kiểm tra tồn tại
//     let userLogin = checkLogin(username, passLogin)
//     if (userLogin == null) {
//         document.getElementById("error").innerText = "Tên đăng nhập hoặc mật khẩu không chính xác , vui lòng thử lại";
//         return;
//     }

//     // đăng nhập thành công
//     sessionStorage.setItem("userlogin", JSON.stringify(userLogin))
//     localStorage.setItem("users", JSON.stringify(users));
//     // kiểm tra quyền
//     if (userLogin.role === "ADMIN") {
//         // đièu hướng về admin/index
//         location.href = "../admin/market.html"
//     } else {
//         // điều hướng trang về home
//         location.href = "/index.html"
//         localStorage.setItem("users", JSON.stringify(users));
//     }

// }

// const checkLogin = (username, passLogin) => {
//     let users = JSON.parse(localStorage.getItem('users')) || [];
//     for (let i = 0; i < users.length; i++) {
//         const user = users[i];
//         console.log(user);
//         if (user.email == username && user.password == passLogin) {
//             localStorage.setItem("users", JSON.stringify(users));
//             return user;
//         }
//     }
//     // không ìm thấy
//     return null;
// }


// // let admin = {
// //     user_id: 0,
// //     email: "admin123@gmail.com",
// //     full_name: null,
// //     password: "Admin123!",
// //     role: "ADMIN",
// //     avatar: "avatar.jpg",
// //     cart: null,
// //     cart: []
// // }

// // localStorage.setItem("userLogin", JSON.stringify(users));


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

    // // username
    // if (username.trim() === "") {
    //     document.getElementById("usernameError").innerText = "You must not leave it blank.";
    //     return;
    // } else if (users.findIndex((value) => value.username === username) > -1) {
    //     document.getElementById("usernameError").innerText = "This account already exists, please enter another account.";
    //     return;
    // } else {
    //     document.getElementById("usernameError").innerText = "";
    // }
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
        location.href = "../index.html"
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
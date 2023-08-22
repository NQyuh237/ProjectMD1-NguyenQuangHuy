// thêm sản phẩm vào giỏ hàng
const addToCart = (idPro) => {
  let usernameLogin = JSON.parse(sessionStorage.getItem("usernameLogin"));
  if (usernameLogin == null) {
    alert("Vui lòng đăng nhập đề xem giở hàng");
    location.href="/user/login.html";
  }
  // lấy ra số lượng mua
  let quantity = +document.querySelector(".pro-qty > input").value;

  // nếu sp đã tồn tại trong giỏ hàng thì tăng số lượng
  let indexCartItem = usernameLogin.cart.findIndex(
    (cartIt) => cartIt.idProduct == idPro
  );
  if (indexCartItem > -1) {
    // đã tồn tại
    usernameLogin.cart[indexCartItem].quantity += quantity;
  } else {
    // chưa tồn tại , thêm mới
    let products = JSON.parse(localStorage.getItem("products"));
    let cartItem = {
      idProduct: idPro,
      quantity,
      price: products.unit_price
    };
    usernameLogin.cart.push(cartItem);
  }
  sessionStorage.setItem("usernameLogin",JSON.stringify(usernameLogin));
};

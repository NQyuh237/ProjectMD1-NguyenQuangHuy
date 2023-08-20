

function showInfoProduct() {
    const productDetail = JSON.parse(localStorage.getItem('product_detail'));

    document.getElementById("name").innerHTML = productDetail.name
    document.getElementById("description").innerHTML = productDetail.description
    document.getElementById("image").src = `${productDetail.image[0]}`
}

showInfoProduct()

function addToCart() {
    const userLogin = JSON.parse(localStorage.getItem('usernameLogin'))
    const productDetail = JSON.parse(localStorage.getItem('product_detail'))

    const index = userLogin.cart.findIndex(e => e.idProduct == productDetail.product_id)

    if (index == -1) {
        userLogin.cart.push({
            idProduct: productDetail.product_id,
            quantity: 1
        })

        localStorage.setItem("usernameLogin", JSON.stringify(userLogin))

    } else {
        alert("Da them sp nay roi !")
    }
}
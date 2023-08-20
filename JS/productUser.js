
function drawProduct() {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let stringHTML = "";

    products.forEach(element => {
        stringHTML +=
            `
            <div onclick="saveInfoProduct(${element.product_id})" class="item_product" style="max-width: 300px; overflow: hidden;">
                <img width="300px" src="${element.image[0]}" class="selectImg" alt="img">
                <p style="max-width: 300px">${element.name}</p>
                <p>${element.unit_price}</p>
                <p>${element.product_id}</p>
            </div>
            `
    });

    document.getElementById("product_list").innerHTML = stringHTML
}

drawProduct()

function saveInfoProduct(id) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let index = products.findIndex(product => product.product_id == id);

    localStorage.setItem("product_detail", JSON.stringify(products[index]))
    location.href = "./accessory.html"
}
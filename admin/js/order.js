// hiển thị trạng thái theo mã trậng thái
const handleStatusCodeOrder = (statusCode) => {
  switch (statusCode) {
    case 1:
      return `<button type="button" class="btn btn-secondary">Wait for Confirmation...</button>`;
    case 2:
      return `<button type="button" class="btn btn-success">Confirmed.</button>`;
    case 3:
      return `<button type="button" class="btn btn-danger">Refused.</button>`;
  }
};
const showOrders = () => {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  list = orders
  const products = JSON.parse(localStorage.getItem("products"));
  let string = list.reduce(
    (str, value) => {
      let stringDetail = ""
      value.cart.forEach(element => {
        const product = products.find(e => e.product_id == element.idProduct)
        console.log("==> product: ", product);
        stringDetail +=
          `
            <li>
              <img width="50px" src="${product.image[0]}" alt="img">;
              <span>price: ${product.unit_price} $</span>;
              <span> quantity: ${element.quantity} </span>;
            </li>
          `
      });
      return str +
        `<tr>
          <td>${value.id}</td>
          <td>${value.createAt}</td>
          <td>
            <ul style="list-style: none">${stringDetail}</ul>
          </td>
          <td>${value.total} $</td>
          <td>${handleStatusCodeOrder(value.status)}</td>
          <td>
              <button class="btn btn-success" onclick="accept(${value.id})">Confirm</button>
              <button class="btn btn-danger" onclick="refuse(${value.id})">Refuse</button>
          </td>  
        </tr>`
    }
    ,
    ""
  );
  document.getElementById("orders").innerHTML = string;
};
showOrders();

function accept(id) {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  const index = orders.findIndex(e => e.id === id);
  orders[index].status = 2
  localStorage.setItem("orders", JSON.stringify(orders))
  showOrders()
}
function refuse(id) {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  const index = orders.findIndex(e => e.id === id);
  orders[index].status = 3
  localStorage.setItem("orders", JSON.stringify(orders))
  showOrders()
}


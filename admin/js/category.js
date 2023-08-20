// code logic của trang category

// let date = new Date();
// console.log(date.toLocaleDateString());

let categories1 = JSON.parse(localStorage.getItem("categories")) || [];



// let categories = [
  // {
  //   id: 1,
  //   name: "KEYCAP HELLO WINTER",
  //   descriptions:
  //     "Màu xanh chiếm tông màu chủ đạo tạo cảm giác mát lạnh, xen kẽ là những phím màu đỏ cùng icon tuyết trắng khiến chiếc bàn phím của bạn nổi bật hơn mọi ngày. Chỉ là keycap, không bao gồm bàn phím.",
  //   createdDate: "21/08/2023",
  // },
  // {
  //   id: 2,
  //   name: "KEYCAP VIRTUAL WAR",
  //   descriptions:
  //     "Đối nghịch với tông màu tối của set Virtual war Black, bản này có màu chủ đạo là trắng orage xen kẽ những phím đen nhám và cam tạo điểm nhấn cho bàn phím cơ của bạn. Thực khó để tìm kiếm một bộ keycap mạnh mẽ hơn với mức giá chỉ 25$.",
  //   createdDate: "21/08/2023",
  // },
  // {
  //   id: 3,
  //   name: "KEYCAP XDA HOA ANH ĐÀO",
  //   descriptions:
  //     "Chỉ là keycap, không bao gồm bàn phím.",
  //   createdDate: "21/08/2023",
  // },
  // {
  //   id: 4,
  //   name: "KEYCAP MATCHA XDA ANH",
  //   descriptions:
  //     "Một trong những bộ keycap có tông màu đặc biệt nhất, Matcha đem đến cảm giác thoải mái khi nhìn và trải nghiệm. Những người đã gõ quen XDA thì chắc chắn không thể bỏ qua bộ keycap này. Chỉ là keycap, không bao gồm bàn phím.",
  //   createdDate: "21/08/2023",
  // },
  // {
  //   id: 5,
  //   name: "KEYCAP GIT BLACK",
  //   descriptions:
  //     "Set keycap mang thiên hướng cho dân coder với những phím tắt gắn liền với công cụ GIT nổi tiếng.",
  //   createdDate: "21/08/2023",
  // },
// ];

// chức năng hiển thị ra giao diện (READ)
function showListCategories() {
  let string = "";
  for (let i = 0; i < categories1.length; i++) {
    const element = categories1[i];
    string = string + `<tr>
        <td>${i + 1}</td>
        <td>${element.name}</td>
        <td>${element.descriptions}
        </td>
        <td>${element.createdDate}</td>
        <td>
            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editModal"  onclick="getCategoryByid(${element.id})">Edit</button>
        </td>
        <td>
            <button type="button" class="btn btn-danger" onclick="deleteCategory(${element.id})">Delete</button>
        </td>
    </tr>`
  }

  // chèn vào trang html 
  document.getElementById("categories").innerHTML = string;
}

showListCategories();

// chức năng thêm mới (Create)
function addNewCategory() {
  // lấy được nội dung ô input 
  let newName = document.getElementById("category_name").value;
  let descriptions = document.getElementById("description").value;
  // console.log(newName, descriptions);
  // tạo 1 đối tượng danh mục mới có 4 thuộc tính
  let newId = getNewId();
  let createdDate = new Date().toLocaleDateString();
  let newCategory = {
    id: newId,
    name: newName,
    descriptions: descriptions,
    createdDate: createdDate
  }
  // thêm mới vào mảng
  categories1.push(newCategory);
  // xáo dữ liệu 2 ô nhập vào
  document.getElementById("category_name").value = "";
  document.getElementById("description").value = "";
  // cập nhật lại giao diện
  localStorage.setItem("categories1", JSON.stringify(categories));

  showListCategories();

}


// chức năng xóa (Delete)
function deleteCategory(idDelete) {
  if (confirm("Bạn có chắc chắn muốn xóa không")) {
    // lấy ra đc id cần xóa 
    let indexDelete = categories1.findIndex((category) => category1.id == idDelete)
    // xóa theo splice
    categories1.splice(indexDelete, 1);
    // cập nhật giao diện
    localStorage.setItem("categories1", JSON.stringify(categories));
    showListCategories();
  }
}

//Chức năng sửa (Update)
// phần 1 : lấy toàn bộ thông tin của danh mục cần sửa 
function getCategoryByid(id) {
  // lấy ra id 
  let indexEdit = categories1.findIndex((cat) => cat.id == id);
  // lấy đối tượng cần sửa
  let categoryEdit = categories1[indexEdit];
  // đổ dũ liệu cuar đối tượng cần sửa ra form
  document.getElementById("category_id").value = categoryEdit.id;
  document.getElementById("category_name_edit").value = categoryEdit.name;
  document.getElementById("description_edit").value = categoryEdit.descriptions;
  document.getElementById("createdDate").value = categoryEdit.createdDate;

}

// phần 2  : cập nhật lại thong tin sau khi chỉnh sửa
function updateCategory() {
  // lấy được nội dung ô input 
  let updateName = document.getElementById("category_name_edit").value;
  let updateDescriptions = document.getElementById("description_edit").value;
  let idEdit = document.getElementById("category_id").value;
  let createdDate = new Date().toLocaleDateString();
  //  lấy ra vị trí cần sửa
  let updateIndex = categories.findIndex((cat) => cat.id == idEdit);
  // tiến hành sửa
  categories[updateIndex] = {
    id: idEdit,
    name: updateName,
    descriptions: updateDescriptions,
    createdDate: createdDate
  }
  // cập nhật lại giao diện
  localStorage.setItem("categories1", JSON.stringify(categories));
  showListCategories();
}

// logic id tự tăng
function getNewId() {
  let idMax = 0;
  for (let i = 0; i < categories1.length; i++) {
    const element = categories1[i];
    if (idMax < element.id) {
      idMax = element.id
    }
  }
  return idMax + 1;
}
// Lắng nghe sự kiện submit của form đăng ký
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  // Ngăn chặn hành vi submit mặc định của trình duyệt
  // Giữ nguyên trang hiện tại để xử lý dữ liệu
  e.preventDefault();

  // Lấy giá trị được nhập vào từ các trường trong form
  // Lưu trữ vào các biến tương ứng để sử dụng sau
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var rewritePassword = document.getElementById("rewrite_password").value;

  // Kiểm tra tính hợp lệ của dữ liệu nhập vào
  // Hiển thị thông báo lỗi và dừng thực hiện nếu có lỗi
  // Sử dụng các câu lệnh if để kiểm tra từng trường hợp
  if (
    // Kiểm tra trường "Tên"
    name === "" ||
    // Kiểm tra trường "Tuổi"
    age === "" ||
    // Kiểm tra trường "Email"
    email === "" ||
    // Kiểm tra trường "Mật khẩu"
    password === "" ||
    // Kiểm tra trường "Xác nhận mật khẩu"
    rewritePassword === ""
  ) {
    // Hiển thị thông báo lỗi nếu một trong các trường rỗng
    alert("Vui lòng điền đầy đủ tất cả các trường.");
    // Dừng thực hiện các bước tiếp theo
    return;
  }

  // Kiểm tra định dạng của "Tên"
  // Chỉ cho phép nhập các chữ cái
  if (!/^[a-zA-Z]+$/.test(name)) {
    // Hiển thị thông báo lỗi nếu tên không hợp lệ
    alert("Tên chỉ được bao gồm các chữ cái.");
    // Dừng thực hiện các bước tiếp theo
    return;
  }

  // Kiểm tra tính hợp lệ của "Tuổi"
  // Phải là số nguyên dương
  if (age <= 0 || !Number.isInteger(Number(age))) {
    // Hiển thị thông báo lỗi nếu tuổi không hợp lệ
    alert("Tuổi phải là một số nguyên dương.");
    // Dừng thực hiện các bước tiếp theo
    return;
  }

  // Kiểm tra định dạng của "Email"
  // Phải bao gồm ký tự "@"
  if (!email.includes("@")) {
    // Hiển thị thông báo lỗi nếu email không hợp lệ
    alert("Định dạng email không hợp lệ.");
    // Dừng thực hiện các bước tiếp theo
    return;
  }

  // So sánh "Mật khẩu" và "Xác nhận mật khẩu"
  // Phải trùng khớp
  if (password !== rewritePassword) {
    // Hiển thị thông báo lỗi nếu mật khẩu không khớp
    alert("Mật khẩu không khớp.");
    // Dừng thực hiện các bước tiếp theo
    return;
  }

  // Tạo đối tượng "user" để lưu trữ thông tin người dùng
  // Bao gồm các thuộc tính như tên, tuổi, email, mật khẩu
  var user = {
    name: name,
    age: age,
    email: email,
    password: password,
  };

  // Lưu trữ thông tin người dùng vào localStorage
  // Sử dụng JSON để chuyển đổi object sang chuỗi
  // localStorage.setItem("key", "value")
  localStorage.setItem("user", JSON.stringify(user));

  // Chuyển hướng đến trang "home.html"
  // Sử dụng window.location.href để thay đổi URL
  window.location.href = "home.html";
});
// Lấy dữ liệu từ localStorage
// JSON.parse("string") để chuyển đổi chuỗi JSON sang object
function getdata() {
  var data = JSON.parse(localStorage.getItem("data"));

  // Kiểm tra xem dữ liệu có tồn tại hay không
  // Hiển thị thông tin nếu có
  if (data) {
    // Lấy element "user" để hiển thị thông tin
    var show = document.getElementById("user");

    // Tạo nội dung HTML với các thông tin của người dùng
    // Sử dụng template string để định dạng dễ dàng
    show.innerHTML = `
      <li>ten: ${data[0].ten}</li>
      <li>email: ${data[0].email}</li>
      <li>pass: ${data[0].mk}</li>
    `;
  } else {
    // Hiển thị thông báo nếu không có dữ liệu
    console.log("Không có dữ liệu người dùng!");
  }
}
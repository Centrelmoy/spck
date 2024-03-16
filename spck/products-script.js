// Lấy element container chứa danh sách sản phẩm
const productContainer = document.querySelector(".product-list");

// Định nghĩa URL API lấy dữ liệu giày
const url = "https://shoes-collections.p.rapidapi.com/shoes";

// Thiết lập các tùy chọn cho request fetch
const options = {
  method: "GET", // Sử dụng phương thức GET để lấy dữ liệu
  headers: {
    "X-RapidAPI-Key": "3dfa1a0dc4mshc4c705f8f82848dp1c28ffjsn76b6e1ca1d8c", // Khóa API (thay thế bằng khóa của bạn)
    "X-RapidAPI-Host": "shoes-collections.p.rapidapi.com", // Host của API
  },
};

// Hàm bất đồng bộ để lấy dữ liệu sản phẩm
async function getData() {
  try {
    // Thực hiện request fetch với URL và tùy chọn đã định nghĩa
    const response = await fetch(url, options);

    // Kiểm tra response.ok để đảm bảo request thành công
    if (!response.ok) {
      throw new Error(`Lỗi request: ${response.status}`);
    }

    // Chuyển đổi response sang dạng text
    const result = await response.text();

    // **Bổ sung phần thiếu:**
    // Chuyển đổi chuỗi JSON result thành object data
    const data = JSON.parse(result);

    // Lặp qua từng sản phẩm trong data
    data.forEach((product) => {
      // Tạo element div đại diện cho một sản phẩm
      const productCard = document.createElement("div");
      productCard.classList.add("product-card"); // Thêm class "product-card"

      // Tạo nội dung HTML cho thẻ productCard
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="width: 200px; height: 200px;">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button>Add to Cart</button>
      `;

      // Thêm productCard vào element container
      productContainer.appendChild(productCard);
    });
  } catch (error) {
    console.error("Lỗi:", error); // Hiển thị lỗi ra console
  }
}

// Gọi hàm getData() để bắt đầu lấy dữ liệu
getData();

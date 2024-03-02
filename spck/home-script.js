// const url = "https://shoes-collections.p.rapidapi.com/shoes/3";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "e1d828bb89msh47065dee2fd07c1p1f02a8jsn6f88fafa163c",
//     "X-RapidAPI-Host": "shoes-collections.p.rapidapi.com",
//   },
// };

// async function fetchProducts() {
//   try {
//     const response = await fetch("https://shoes-collections.p.rapidapi.com/shoes/3", {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "e1d828bb89msh47065dee2fd07c1p1f02a8jsn6f88fafa163c",
//         "X-RapidAPI-Host": "shoes-collections.p.rapidapi.com",
//       }
//     });

//     const data = await response.json();

//     // Process the data and generate product listing HTML
//     data.forEach(product => {
//       const productCard = document.createElement('div');
//       productCard.classList.add('product-card');
//       productCard.innerHTML = `
//         <img src="${product.image}" alt="${product.name}">
//         <h3>${product.name}</h3>
//         <p>${product.price}</p>
//         <button>Add to Cart</button>
//       `;
//       productContainer.appendChild(productCard);
//     });
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }

// fetchProducts();

// const productContainer = document.querySelector(".product-list");
// const url = 'https://shoes-collections.p.rapidapi.com/shoes/3';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'e1d828bb89msh47065dee2fd07c1p1f02a8jsn6f88fafa163c',
// 		'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'
// 	}
// };
// async function getData() {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();

//     //  Em bị quên đoạn này nè
//     data = JSON.parse(result);
//     console.log(data)

//     data.forEach((product) => {
//       const productCard = document.createElement("div");
//       productCard.classList.add("product-card");
//       productCard.innerHTML = `
//         <img src="${product.image}" alt="${product.name}">
//         <h3>${product.name}</h3>
//         <p>${product.price}</p>
//         <button>Add to Cart</button>
//       `;
//       productContainer.appendChild(productCard);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }
// getData();

const productContainer = document.querySelector(".product-list");
const url = 'https://shoes-collections.p.rapidapi.com/shoes/3';
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2ed44d2b6cmshb036950fae6b16ep1d9cf2jsn11d3ea6c1eab",
    "X-RapidAPI-Host": "shoes-collections.p.rapidapi.com",
  },
};
async function getData() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();

    //  Em bị quên đoạn này nè
    data = JSON.parse(result);
    //

    data.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="width: 200px; height: 200px;">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button>Add to Cart</button>
      `;
      productContainer.appendChild(productCard);
    });
  } catch (error) {
    console.error(error);
  }
}
getData();

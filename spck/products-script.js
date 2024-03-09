
// const productContainer = document.querySelector(".product-list");
// const url = 'https://shoes-collections.p.rapidapi.com/shoes/3';
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "2ed44d2b6cmshb036950fae6b16ep1d9cf2jsn11d3ea6c1eab",
//     "X-RapidAPI-Host": "shoes-collections.p.rapidapi.com",
//   },
// };
// async function getData() {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();

//     //  Em bị quên đoạn này nè
//     data = JSON.parse(result);
//     //

//     data.forEach((product) => {
//       const productCard = document.createElement("div");
//       productCard.classList.add("product-card");
//       productCard.innerHTML = `
//         <img src="${product.image}" alt="${product.name}" style="width: 200px; height: 200px;">
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

// const url = "https://shoes-collections.p.rapidapi.com/shoes/3";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "2ed44d2b6cmshb036950fae6b16ep1d9cf2jsn11d3ea6c1eab",
//     "X-RapidAPI-Host": "shoes-collections.p.rapidapi.com",
//   },
// };

// async function getData() {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     data = JSON.parse(result);
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };
// getData();


const productContainer = document.querySelector(".product-list");
const url = "https://shoes-collections.p.rapidapi.com/shoes";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3dfa1a0dc4mshc4c705f8f82848dp1c28ffjsn76b6e1ca1d8c",
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
        <img src="${product.image}" alt="${product.name} style="width: 1000px; height: 200px;">
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

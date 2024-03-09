for (let i of products.data) {

    let card = document.createElement("div")
    card.classList.add("card")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", i.image)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);

}

document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value.toUpperCase()
    let cards = document.querySelectorAll(".card")
    let productsName = document.querySelectorAll(".product-name")
    let prices = document.querySelectorAll('h6')

    productsName.forEach((items, index) => {
        if (items.innerText.includes(searchInput)){
            cards[index].classList.remove("hide")
        } else{
            cards[index].classList.add("hide")
        }
    })
})
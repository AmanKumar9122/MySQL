let cart = [];
let totalPrice = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartDiv = document.getElementById("cart");
    const totalDiv = document.getElementById("total");

    cartDiv.innerHTML = "";
    cart.forEach((item, index) => {
        cartDiv.innerHTML += `<p>${item.product} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button></p>`;
    });

    totalDiv.textContent = `Total: $${totalPrice}`;
}

function removeFromCart(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

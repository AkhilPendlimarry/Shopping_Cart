document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartTableBody = document.querySelector("#cartTable tbody");

    

    cartTableBody.innerHTML = cart.map((product) => {
        return `
            <tr>
                <td>${product.Id}</td>
                <td><img src="${product.imageurl}" alt="${product.product_title}" ></td>
                <td>${product.product_title}</td>
                <td>${product.description}</td>
                <td>${product.quantity}</td>
                <td>${product.ratings}</td>
                <td>${product.price}</td>
            </tr>
        `;
    
    }).join('');
});

 document.addEventListener('DOMContentLoaded', () => {               
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const cartTableBody = document.querySelector('#cartTable tbody');
        const totalPriceElement = document.getElementById('totalPrice');
        const discountedPriceElement = document.getElementById('discounted-price');
        const discountRate = 0.10;
        let discountApplied = false;
    
        // Function to render cart items
        function renderCartItems() {
            cartTableBody.innerHTML = ''; // Clear existing content
    
            cart.forEach((product, index) => {
                const row = document.createElement('tr');
    
                row.innerHTML = `
                     <td>${product.Id}</td>
                     <td><img class="image-box" src="${product.imageurl}" alt="${product.product_title}"></td>
                     <td>${product.product_title}</td>
                     <td>${product.description}</td>
                     <td>${product.quantity}</td>
                     <td>${product.ratings}</td>
                    <td>$${product.price}</td>
                    <td><button class="remove-btn" data-index="${index}">Remove</button></td>
                    <td>${(product.price * product.quantity).toFixed(2)}</td>
                `;
    
                cartTableBody.appendChild(row);
            });
    
            calculateTotal();
        }
    
        // Function to calculate total price of the cart
        function calculateTotal(cart) {
            return cart.reduce((sum, product) => sum + (product.price * product.quantity), 0);
           
        }
    
        // Function to apply discount
            function applyDiscount(totalPrice) {
                return discountApplied ? totalPrice * (1-discountRate) : totalPrice;
            }

        // function to update prices
        function updatePrice() {
            const totalPrice = calculateTotal(cart);
            const discountedPrice = applyDiscount(totalPrice);
            
          //  console.log('Total price before discount:', totalPrice); // debug purpose
          //  console.log('Discounted price:', discountedPrice);
    
            totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
            discountedPriceElement.textContent = `$${discountedPrice.toFixed(2)}`;
            generateOrderSummary(totalPrice, discountedPrice);
        }
        
        // function to generate order summary
        function generateOrderSummary(totalPrice, discountedPrice) {
            const orderDetails = document.getElementById('order-details');
            orderDetails.innerHTML = ''; // Clear existing content and populate with new entries
    
            cart.forEach(product => {
                const productDetails = document.createElement('div');
                productDetails.innerHTML = `
                    <p><strong>${product.product_title}</strong></p>
                    <p>Quantity: ${product.quantity}</p>
                    <p>Price: $${product.price}</p>
                    <p>Total: $${(product.price * product.quantity).toFixed(2)}</p>
                `;
                orderDetails.appendChild(productDetails);
            });
    
            const totalDetails = document.createElement('div');
            totalDetails.innerHTML = `
              <p><strong>Total Price Before Discount:</strong> $${totalPrice.toFixed(2)}</p>
              <p><strong>Price After Discount:</strong> $${discountedPrice.toFixed(2)}</p>
              <p><strong>Discount Applied:</strong> ${discountRate * 100}%</p>
             `;
             orderDetails.appendChild(totalDetails);
         }
            
            
        // Event for removing buttons
        cartTableBody.addEventListener('click', (event) => {        // removes items based on clicks
            if (event.target.classList.contains('remove-btn')) {
                const index = event.target.getAttribute('data-index');
                removeItem(index);
            }
        });
    
        // Remove item function to delete an item from the cart page
        function removeItem(index) {
            cart.splice(index, 1); // Remove item from cart array
            localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
            renderCartItems(); // Re-render cart items
        }

        // Apply discount btn event listener
        document.getElementById('apply-Discount').addEventListener('click', () => {
            discountApplied = true;
            updatePrice();
        })
    
        // Initial render
        renderCartItems();
     });
    
     
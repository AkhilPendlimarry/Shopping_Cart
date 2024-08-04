
const products = [
    {   
        
        "Id": 1,
        "category": "Electronics",
        "product_title": "Smartphone",
        "description": "Latest model with advanced features",
        "imageurl": "assets/phone.jpg",
        "price": 699,
        "quantity": 1, 
        "ratings": 4.5
    },
    {
        
        "Id": 2,
        "category": "Electronics",
        "product_title": "Laptop ABC",
        "description": "High-performance laptop for professionals",
        "imageurl": "assets/laptop.avif",
        "price":  1299,
        "quantity": 1, 
        "ratings": 4.7
    },
    {
       
        "Id": 3,
        "category": "Home Appliances",
        "product_title": "Vacuum Cleaner 2000",
        "description": "Powerful and efficient vacuum cleaner",
        "imageurl": "assets/vacuum cleaner.jpg",
        "price":  199,
        "quantity": 1, 
        "ratings": 4.2
    },
    {
       
        "Id": 4,
        "category": "Fashion",
        "product_title": "Leather Jacket",
        "description": "Stylish and comfortable leather jacket",
        "imageurl": "assets/jacket.jpg",
        "price":  249.99,
        "quantity": 1, 
        "ratings": 4.8
    },
    {
       
        "Id": 5,
        "category": "Fashion",
        "product_title": "Sneakers",
        "description": "Trendy and comfortable sneakers",
        "imageurl": "assets/shoe kit.jpg",
        "price":  99.99,
        "quantity": 1, 
        "ratings": 4.4
    },
    {
        
        "Id": 6,
        "category": "Beauty",
        "product_title": "Facial Cleanser",
        "description": "Gentle and effective facial cleanser",
        "imageurl": "assets/face.avif",
        "price":  15.49,
        "quantity": 1, 
        "ratings": 4.6
    },
    {
       
        "Id": 7,
        "category": "Beauty",
        "product_title": "Moisturizer",
        "description": "Hydrating and nourishing moisturizer",
        "imageurl": "assets/moist.avif",
        "price":  25.49,
        "quantity": 1, 
        "ratings": 4.5
    },
    {
       
        "Id": 8,
        "category": "Kitchen",
        "product_title": "Blender",
        "description": "High-speed blender for smoothies",
        "imageurl": "assets/blender.jpg",
        "price":  59.99,
        "quantity": 1,
        "ratings": 4.3
    },
    {
        
        "Id": 9,
        "category": "Kitchen",
        "product_title": "Coffee Maker",
        "description": "Programmable coffee maker with timer",
        "imageurl": "assets/coffeemaker.avif",
        "price":  89.9,
        "quantity": 1, 
        "ratings": 4.7
    },
    {
        
        "Id": 10,
        "category": "Books",
        "product_title": "Man's Search for Meaning",
        "description": "Three ways to find meaning in life by Victor Frankl",
        "imageurl": "assets/book.jpg",
        "price":  25.99,
        "quantity": 1, 
        "ratings": 4.4
    },
    {
        
        "Id": 11,
        "category": "Books",
        "product_title": "Why I Am An Atheist",
        "description": "Story of a Brave Young Soldier in Lahore Jail",
        "imageurl": "assets/Why-I-Am-An-Atheist.jpg",
        "price":  79,
        "quantity": 1, 
        "ratings": 4.6
    },
    {
        
        "Id": 12,
        "category": "Electronics",
        "product_title": "Tablet DEF",
        "description": "Portable tablet with high-resolution display",
        "imageurl": "assets/tab.avif",
        "price":  499.79,
        "quantity": 1, 
        "ratings": 4.3
    },
    {
        
        "Id": 13,
        "category": "Electronics",
        "product_title": "Smartwatch GHI",
        "description": "Feature-rich smartwatch with fitness tracking",
        "imageurl": "assets/watch.jpg",
        "price":  199,
        "quantity": 1, 
        "ratings": 4.5
    },
    {
        
        "Id": 14,
        "category": "Home Appliances",
        "product_title": "Air Purifier",
        "description": "HEPA air purifier for clean air",
        "imageurl": "assets/purifier.jpg",
        "price":  149.99,
        "quantity": 1, 
        "ratings": 4.6
    },
    {
        
        "Id": 15,
        "category": "Home Appliances",
        "product_title": "Microwave Oven",
        "description": "Compact microwave oven with multiple settings",
        "imageurl": "assets/owen.avif",
        "price":  129.99,
        "quantity": 1, 
        "ratings": 4.4
    },
    {
        
        "Id": 16,
        "category": "Fashion",
        "product_title": "Wristwatch",
        "description": "Elegant wristwatch with leather strap",
        "imageurl": "assets/watch.jpg",
        "price":  199,
        "quantity": 1, 
        "ratings": 4.8
    },
    {
        
        "Id": 17,
        "category": "Fashion",
        "product_title": "Sunglasses",
        "description": "Stylish sunglasses with UV protection",
        "imageurl": "assets/polarised.webp",
        "price":  75.49,
        "quantity": 1, 
        "ratings": 4.3
    },
    {
        
        "Id": 18,
        "category": "Beauty",
        "product_title": "Lipstick Set",
        "description": "Long-lasting lipstick set with vibrant colors",
        "imageurl": "assets/lipstick.avif",
        "price":  30.59,
        "quantity": 1, 
        "ratings": 4.5
    },
    {
        
        "Id": 19,
        "category": "Beauty",
        "product_title": "Perfume",
        "description": "Luxurious perfume with a long-lasting scent",
        "imageurl": "assets/perfume.avif",
        "price":  120.90,
        "quantity": 1, 
        "ratings": 4.7
    },
    {
        
        "Id": 20,
        "category": "Kitchen",
        "product_title": "Air Fryer",
        "description": "Healthier cooking with an air fryer",
        "imageurl": "assets/airfryer.avif",
        "price":  89.99,
        "quantity": 1,
        "ratings": 4.4
    },
    {
        
        "Id": 21,
        "category": "Kitchen",
        "product_title": "Toaster",
        "description": "4-slice toaster with browning control",
        "imageurl": "assets/toaster.avif",
        "price":  49.49,
        "quantity": 1, 
        "ratings": 4.3
    },
    {
        
        "Id": 22,
        "category": "Books",
        "product_title": "A New Earth",
        "description": "Exploring Spiritual connection between Humans and Nature",
        "imageurl": "assets/A New Earth.jpg",
        "price":  499.39,
        "quantity": 1, 
        "ratings": 4.6
    },
    {
        
        "Id": 23,
        "category": "Books",
        "product_title": "Atomic Habits",
        "description": "Make Tiny Habits for a better tomorrow",
        "imageurl": "assets/AtomicHabits.jpg",
        "price":  59.99,
        "quantity": 1,
        "ratings": 4.4
    },
    {
        
        "Id": 24,
        "category": "Electronics",
        "product_title": "Wireless Earbuds",
        "description": "Noise-cancelling wireless earbuds",
        "imageurl": "assets/boat131-1.png",
        "price":  149,
        "quantity": 1, 
        "ratings": 4.5
    },
    {
        
        "Id": 25,
        "category": "Electronics",
        "product_title": "Gaming Console",
        "description": "Next-gen gaming console with 4K support",
        "imageurl": "assets/console.avif",
        "price":  499,
        "quantity": 1, 
        "ratings": 4.8
    },
    {
        
        "Id": 26,
        "category": "Home Appliances",
        "product_title": "Refrigerator",
        "description": "Energy-efficient refrigerator with freezer",
        "imageurl": "assets/freezer.avif",
        "price":  859.59,
        "quantity": 1, 
        "ratings": 4.7
    },
    {
        
        "Id": 27,
        "category": "Home Appliances",
        "product_title": "Washing Machine",
        "description": "Front-load washing machine with smart features",
        "imageurl": "assets/washing machine.avif",
        "price":  599,
        "quantity": 1, 
        "ratings": 4.6
    },
    {
        
        "Id": 28,
        "category": "Fashion",
        "product_title": "Handbag",
        "description": "Chic handbag with ample storage",
        "imageurl": "assets/handbag.avif",
        "price":  199,
        "quantity": 1, 
        "ratings": 4.5
    },
    {
        
        "Id": 29,
        "category": "Fashion",
        "product_title": "Belt",
        "description": "Genuine leather belt with classic buckle",
        "imageurl": "assets/belt.avif",
        "price":  52.49,
        "quantity": 1, 
        "ratings": 4.4
    },
    {
        
        "Id": 30,
        "category": "Beauty",
        "product_title": "Hair Dryer",
        "description": "Professional hair dryer with multiple settings",
        "imageurl": "assets/hairdryer.avif",
        "price":  79.9,
        "quantity": 1, 
        "ratings": 4.6
    },
    {
        
        "Id": 31,
        "category": "Beauty",
        "product_title": "Makeup Kit",
        "description": "Complete makeup kit with brushes and palettes",
        "imageurl": "assets/makeup.avif",
        "price":  120,
        "quantity": 1, 
        "ratings": 4.7
    },
    {
        
        "Id": 32,
        "category": "Kitchen",
        "product_title": "Cutlery Set",
        "description": "Stainless steel cutlery set for 6",
        "imageurl": "assets/cutlery.avif",
        "price":  49,
        "quantity": 1, 
        "ratings": 4.5
    },
    {
        
        "Id": 33,
        "category": "Kitchen",
        "product_title": "Rice Cooker",
        "description": "Electric rice cooker with steaming basket",
        "imageurl": "assets/cooker.avif",
        "price":  59,
        "quantity": 1, 
        "ratings": 4.4
    },
    {
        
        "Id": 34,
        "category": "Books",
        "product_title": "Alchemist",
        "description": "Follow your dreams.",
        "imageurl": "assets/ALchemist.jpg",
        "price":  20.99,
        "quantity": 1, 
        "ratings": 4.6
    },
    {
        
        "Id": 35,
        "category": "Books",
        "product_title": "Sapiens",
        "description": "A Brief History of Mankind",
        "imageurl": "assets/sapiens.jpg",
        "price":  69.99,
        "quantity": 1, 
        "ratings": 4.5
    },
    {
        
        "Id": 36,
        "category": "Electronics",
        "product_title": "4K TV",
        "description": "Ultra HD 4K TV with smart features",
        "imageurl": "assets/tv.avif",
        "price":  799,
        "quantity": 1, 
        "ratings": 4.7
    },
    {
        
        "Id": 37,
        "category": "Electronics",
        "product_title": "Bluetooth Speaker",
        "description": "Portable Bluetooth speaker with deep bass",
        "imageurl": "assets/blutooth.avif",
        "price":  99,
        "quantity": 1, 
        "ratings": 4.4
    },
    {
        
        "Id": 38,
        "category": "Home Appliances",
        "product_title": "Dishwasher",
        "description": "Quiet and efficient dishwasher with multiple settings",
        "imageurl": "assets/dishwasher.avif",
        "price":  699,
        "quantity": 1, 
        "ratings": 4.6
    },
    {
        
        "Id": 39,
        "category": "Home Appliances",
        "product_title": "Dehumidifier",
        "description": "Compact dehumidifier with automatic shut-off",
        "imageurl": "assets/dehum.avif",
        "price":  199,
        "quantity": 1, 
        "ratings": 4.5
    },
    {
        
        "Id": 40,
        "category": "Fashion",
        "product_title": "Jeans",
        "description": "Comfortable and stylish denim jeans",
        "imageurl": "assets/jeans.avif",
        "price":  49,
        "quantity": 1, 
        "ratings": 4.3
    },
    {
       
        "Id": 41,
        "category": "Fashion",
        "product_title": "T-Shirt",
        "description": "Cotton T-shirt with graphic print",
        "imageurl": "assets/tshirt.avif",
        "price":  25,
        "quantity": 1, 
        "ratings": 4.4
    },
    {
       
        "Id": 42,
        "category": "Beauty",
        "product_title": "Shampoo",
        "description": "Sulfate-free shampoo for all hair types",
        "imageurl": "assets/shampoo.avif",
        "price":  15,
        "quantity": 1, 
        "ratings": 4.5
    },
    {
      
        "Id": 43,
        "category": "Beauty",
        "product_title": "Conditioner",
        "description": "Moisturizing conditioner for dry hair",
        "imageurl": "assets/conditioner.avif",
        "price":  15,
        "quantity": 1, 
        "ratings": 4.6
    },
    {
        
        "Id": 44,
        "category": "Kitchen",
        "product_title": "Knife Set",
        "description": "Professional knife set with block",
        "imageurl": "assets/knife.avif",
        "price":  79,
        "quantity": 1, 
        "ratings": 4.5
    },
    {
       
        "Id": 45,
        "category": "Kitchen",
        "product_title": "Pressure Cooker",
        "description": "Stainless steel pressure cooker with safety features",
        "imageurl": "assets/pressurecooker.jpg",
        "price":  69,
        "quantity": 1, 
        "ratings": 4.4
    },
    {
       
        "Id": 46,
        "category": "Books",
        "product_title": "Bhagavad Geeta",
        "description": "A guide for a way of life",
        "imageurl": "assets/gita.jpg",
        "price":  95,
        "quantity": 1, 
        "ratings": 4.5
    },
    {
       
        "Id": 47,
        "category": "Books",
        "product_title": "The Mountain is You",
        "description": "Face your Inner Challenges",
        "imageurl": "assets/mtisYou.jpg",
        "price":  25,
        "quantity": 1, 
        "ratings": 4.4
    },
    {
       
        "Id": 48,
        "category": "Electronics",
        "product_title": "Drone",
        "description": "Quadcopter drone with HD camera",
        "imageurl": "assets/drone.avif",
        "price":  299,
        "quantity": 1, 
        "ratings": 4.6
    },
    {
       
        "Id": 49,
        "category": "Electronics",
        "product_title": "VR Headset",
        "description": "Virtual reality headset with immersive experience",
        "imageurl": "assets/vr.avif",
        "price":  199,
        "quantity": 1, 
        "ratings": 4.5
    },
    {
      
        "Id": 50,
        "category": "Home Appliances",
        "product_title": "Home Appliances",
        "description": "Refrigerator",
        "imageurl": "assets/freezer.avif",
        "price":  49,
        "quantity": 1, 
        "ratings": 4.4
      }  
];


// Creating an array of unique categories
const categories = [];

products.forEach((item) => {
    if (!categories.some((cat) => cat.category === item.category)){
        categories.push({category: item.category});
    }
});

// Rendering product container with product cards
document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.getElementById("productContainer");
    const cartCount = document.getElementById("cart-count");

    // Updating the cart notification/count from local storage
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem("cart")) || []; // default to empty array instead of null if there's no data in cart storage.
        console.log(cart); // Debugging to check cart contents
        cartCount.textContent = cart.reduce((count, product) => count + (product.quantity || 0), 0); // calculates and displays the cart count by iterating on each item.
    }

    // Function to render products based on category
    function renderProducts(category) {
        const productContainer = document.getElementById("productContainer");
        const fragment = document.createDocumentFragment(); // Create a fragment to batch updates. after this delay in updation reduced.

        productContainer.innerHTML = ''; // hides the existing products
        const filteredProducts = category === 'All' ? products : products.filter(product => product.category === category);
        productContainer.innerHTML = filteredProducts.map(product => {
            return `
                <div class="product-card">
                    <p>${product.Sr_no}</p>
                    <img src="${product.imageurl}" alt="${product.product_title}">
                    <h3>${product.product_title}</h3>
                    <p>${product.category}</p>
                    <p>Price: $${product.price}</p>
                    <p>Quantity: ${product.quantity}</p>
                    <button data-id="${product.Id}">Add to Cart</button>
                </div>
            `;
        }).join('');

        // Add event listeners to the buttons
        const buttons = document.querySelectorAll(".product-card button");
        buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.dataset.id;
                addItem(productId); // Calls the function to add item into the cart
            });
        });
    }

    // Render products initially
    renderProducts('All');

    // Event listener for category filtering
    const categoryList = document.getElementById('category-section');
    categoryList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const category = event.target.getAttribute('data-category');
            renderProducts(category);
        }
    });

    updateCartCount();
});

// Function to add items into the cart
function addItem(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(p => p.Id == productId);
    
    const existingProduct = cart.find(p => p.Id == productId);

    if(existingProduct) {
        existingProduct.quantity += 1; // Increase the quantity if item exists
    } else {
        // spread will allow to copy the cart info into the new object. Push->adds the new object into the array.
        cart.push({ ...product, quantity: 1 }); // Add new item if doesn't exist
    }

    alert("Product added to the cart!!");

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount(); // Update cart count after adding an item
}



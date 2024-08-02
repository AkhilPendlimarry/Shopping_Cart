    const products = [
    {
        "Id": 1,
        "category": "Electronics",
        "product_title": "Smartphone",
        "description": "Latest model with advanced features",
        "imageurl": "assets/phone.jpg",
        "price": "$ 699",
        "quantity": 1, 
        "ratings": 4.5
    },
    {
        "Id": 2,
        "category": "Electronics",
        "product_title": "Laptop ABC",
        "description": "High-performance laptop for professionals",
        "imageurl": "assets/laptop.avif",
        "price": "$ 1299",
        "quantity": 1, 
        "ratings": 4.7
    },
    {
        "Id": 3,
        "category": "Home Appliances",
        "product_title": "Vacuum Cleaner 2000",
        "description": "Powerful and efficient vacuum cleaner",
        "imageurl": "assets/vacuum cleaner.jpg",
        "price": "$ 199",
        "quantity": 1, 
        "ratings": 4.2
    },
    {
        "Id": 4,
        "category": "Fashion",
        "product_title": "Leather Jacket",
        "description": "Stylish and comfortable leather jacket",
        "imageurl": "assets/jacket.jpg",
        "price": "$ 249",
        "quantity": 1, 
        "ratings": 4.8
    },
    {
        "Id": 5,
        "category": "Fashion",
        "product_title": "Sneakers",
        "description": "Trendy and comfortable sneakers",
        "imageurl": "assets/shoe kit.jpg",
        "price": "$ 99",
        "quantity": 1, 
        "ratings": 4.4
    },
    {
        "Id": 6,
        "category": "Beauty",
        "product_title": "Facial Cleanser",
        "description": "Gentle and effective facial cleanser",
        "imageurl": "assets/face.avif",
        "price": "$ 15",
        "quantity": 1, 
        "ratings": 4.6
    },
    {
        "Id": 7,
        "category": "Beauty",
        "product_title": "Moisturizer",
        "description": "Hydrating and nourishing moisturizer",
        "imageurl": "assets/moist.avif",
        "price": "$ 25",
        "quantity": 1, 
        "ratings": 4.5
    },
    {
        "Id": 8,
        "category": "Kitchen",
        "product_title": "Blender",
        "description": "High-speed blender for smoothies",
        "imageurl": "assets/blender.jpg",
        "price": "$ 59",
        "quantity": 1,
        "ratings": 4.3
    },
    {
        "Id": 9,
        "category": "Kitchen",
        "product_title": "Coffee Maker",
        "description": "Programmable coffee maker with timer",
        "imageurl": "assets/coffeemaker.avif",
        "price": "$ 89",
        "quantity": 1, 
        "ratings": 4.7
    },
    {
        "Id": 10,
        "category": "Books",
        "product_title": "Man's Search for Meaning",
        "description": "Three ways to find meaning in life by Victor Frankl",
        "imageurl": "assets/book.jpg",
        "price": "$ 25",
        "quantity": 1, 
        "ratings": 4.4
    },
    {
        "Id": 11,
        "category": "Books",
        "product_title": "Why I Am An Atheist",
        "description": "Story of a Brave Young Soldier in Lahore Jail",
        "imageurl": "assets/Why-I-Am-An-Atheist.jpg",
        "price": "$ 79",
        "quantity": 1, 
        "ratings": 4.6
    },
    {
        "Id": 12,
        "category": "Electronics",
        "product_title": "Tablet DEF",
        "description": "Portable tablet with high-resolution display",
        "imageurl": "assets/tab.avif",
        "price": "$ 499",
        "quantity": 1, 
        "ratings": 4.3
    },
    {
        "Id": 13,
        "category": "Electronics",
        "product_title": "Smartwatch GHI",
        "description": "Feature-rich smartwatch with fitness tracking",
        "imageurl": "assets/watch.jpg",
        "price": "$ 199",
        "quantity": 1, 
        "ratings": 4.5
    },
    {
        "Id": 14,
        "category": "Home Appliances",
        "product_title": "Air Purifier",
        "description": "HEPA air purifier for clean air",
        "imageurl": "assets/purifier.jpg",
        "price": "$ 149",
        "quantity": 1, 
        "ratings": 4.6
    },
    {
        "Id": 15,
        "category": "Home Appliances",
        "product_title": "Microwave Oven",
        "description": "Compact microwave oven with multiple settings",
        "imageurl": "assets/owen.avif",
        "price": "$ 129",
        "quantity": 1, 
        "ratings": 4.4
    },
    {
        "Id": 16,
        "category": "Fashion",
        "product_title": "Wristwatch",
        "description": "Elegant wristwatch with leather strap",
        "imageurl": "assets/vintage.webp",
        "price": "$ 199",
        "quantity": 1, 
        "ratings": 4.8
    },
    {
        "Id": 17,
        "category": "Fashion",
        "product_title": "Sunglasses",
        "description": "Stylish sunglasses with UV protection",
        "imageurl": "assets/polarised.webp",
        "price": "$ 75",
        "quantity": 1, 
        "ratings": 4.3
    },
    {
        "Id": 18,
        "category": "Beauty",
        "product_title": "Lipstick Set",
        "description": "Long-lasting lipstick set with vibrant colors",
        "imageurl": "https://example.com/images/lipstick_set.jpg",
        "price": "$ 30",
        "quantity": 1, 
        "ratings": 4.5
    },
    {
        "Id": 19,
        "category": "Beauty",
        "product_title": "Perfume",
        "description": "Luxurious perfume with a long-lasting scent",
        "imageurl": "https://example.com/images/perfume.jpg",
        "price": "$ 120",
        "quantity": 1, 
        "ratings": 4.7
    },
    {
        "Id": 20,
        "category": "Kitchen",
        "product_title": "Air Fryer",
        "description": "Healthier cooking with an air fryer",
        "imageurl": "https://example.com/images/air_fryer.jpg",
        "price": "$ 89",
        "quantity": 1,
        "ratings": 4.4
    },
    {
        "Id": 21,
        "category": "Kitchen",
        "product_title": "Toaster",
        "description": "4-slice toaster with browning control",
        "imageurl": "https://example.com/images/toaster.jpg",
        "price": "$ 49",
        "quantity": 1, 
        "ratings": 4.3
    },
    {
        "Id": 22,
        "category": "Books",
        "product_title": "A New Earth",
        "description": "Exploring Spiritual connection between Humans and Nature",
        "imageurl": "assets/A New Earth.jpg",
        "price": "$ 499",
        "quantity": 1, 
        "ratings": 4.6
    },
    {
        "Id": 23,
        "category": "Books",
        "product_title": "Atomic Habits",
        "description": "Make Tiny Habits for a better tomorrow",
        "imageurl": "assets/AtomicHabits.jpg",
        "price": "$ 99",
        "quantity": 1,
        "ratings": 4.4
    },
    {
        "Id": 24,
        "category": "Electronics",
        "product_title": "Wireless Earbuds",
        "description": "Noise-cancelling wireless earbuds",
        "imageurl": "https://example.com/images/wireless_earbuds.jpg",
        "price": "$ 149",
        "quantity": 1, 
        "ratings": 4.5
    },
    {
        "Id": 25,
        "category": "Electronics",
        "product_title": "Gaming Console",
        "description": "Next-gen gaming console with 4K support",
        "imageurl": "https://example.com/images/gaming_console.jpg",
        "price": "$ 499",
        "quantity": 1, 
        "ratings": 4.8
    },
    {
        "Id": 26,
        "category": "Home Appliances",
        "product_title": "Refrigerator",
        "description": "Energy-efficient refrigerator with freezer",
        "imageurl": "https://example.com/images/refrigerator.jpg",
        "price": "$ 899",
        "quantity": 1, 
        "ratings": 4.7
    },
    {
        "Id": 27,
        "category": "Home Appliances",
        "product_title": "Washing Machine",
        "description": "Front-load washing machine with smart features",
        "imageurl": "https://example.com/images/washing_machine.jpg",
        "price": "$ 599",
        "quantity": 1, 
        "ratings": 4.6
    },
    {
        "Id": 28,
        "category": "Fashion",
        "product_title": "Handbag",
        "description": "Chic handbag with ample storage",
        "imageurl": "https://example.com/images/handbag.jpg",
        "price": "$ 199",
        "quantity": 1, 
        "ratings": 4.5
    },
    {
        "Id": 29,
        "category": "Fashion",
        "product_title": "Belt",
        "description": "Genuine leather belt with classic buckle",
        "imageurl": "https://example.com/images/belt.jpg",
        "price": "$ 50",
        "quantity": 1, 
        "ratings": 4.4
    },
    {
        "Id": 30,
        "category": "Beauty",
        "product_title": "Hair Dryer",
        "description": "Professional hair dryer with multiple settings",
        "imageurl": "https://example.com/images/hair_dryer.jpg",
        "price": "$ 79",
        "quantity": 1, 
        "ratings": 4.6
    },
    {
        "Id": 31,
        "category": "Beauty",
        "product_title": "Makeup Kit",
        "description": "Complete makeup kit with brushes and palettes",
        "imageurl": "https://example.com/images/makeup_kit.jpg",
        "price": "$ 120",
        "quantity": 1, 
        "ratings": 4.7
    },
    {
        "Id": 32,
        "category": "Kitchen",
        "product_title": "Cutlery Set",
        "description": "Stainless steel cutlery set for 6",
        "imageurl": "https://example.com/images/cutlery_set.jpg",
        "price": "$ 49",
        "quantity": 1, 
        "ratings": 4.5
    },
    {
        "Id": 33,
        "category": "Kitchen",
        "product_title": "Rice Cooker",
        "description": "Electric rice cooker with steaming basket",
        "imageurl": "https://example.com/images/rice_cooker.jpg",
        "price": "$ 59",
        "quantity": 1, 
        "ratings": 4.4
    },
    {
        "Id": 34,
        "category": "Books",
        "product_title": "Alchemist",
        "description": "Follow your dreams.",
        "imageurl": "assets/ALchemist.jpg",
        "price": "$ 25",
        "quantity": 1, 
        "ratings": 4.6
    },
    {
        "Id": 35,
        "category": "Books",
        "product_title": "Sapiens",
        "description": "A Brief History of Mankind",
        "imageurl": "assets/sapiens.jpg",
        "price": "$ 89",
        "quantity": 1, 
        "ratings": 4.5
    },
    {
        "Id": 36,
        "category": "Electronics",
        "product_title": "4K TV",
        "description": "Ultra HD 4K TV with smart features",
        "imageurl": "https://example.com/images/4k_tv.jpg",
        "price": "$ 799",
        "quantity": 1, 
        "ratings": 4.7
    },
    {
        "Id": 37,
        "category": "Electronics",
        "product_title": "Bluetooth Speaker",
        "description": "Portable Bluetooth speaker with deep bass",
        "imageurl": "https://example.com/images/bluetooth_speaker.jpg",
        "price": "$ 99",
        "quantity": 1, 
        "ratings": 4.4
    },
    {
        "Id": 38,
        "category": "Home Appliances",
        "product_title": "Dishwasher",
        "description": "Quiet and efficient dishwasher with multiple settings",
        "imageurl": "https://example.com/images/dishwasher.jpg",
        "price": "$ 699",
        "quantity": 1, 
        "ratings": 4.6
    },
    {
        "Id": 39,
        "category": "Home Appliances",
        "product_title": "Dehumidifier",
        "description": "Compact dehumidifier with automatic shut-off",
        "imageurl": "https://example.com/images/dehumidifier.jpg",
        "price": "$ 199",
        "quantity": 1, 
        "ratings": 4.5
    },
    {
        "Id": 40,
        "category": "Fashion",
        "product_title": "Jeans",
        "description": "Comfortable and stylish denim jeans",
        "imageurl": "https://example.com/images/jeans.jpg",
        "price": "$ 49",
        "quantity": 1, 
        "ratings": 4.3
    },
    {
        "Id": 41,
        "category": "Fashion",
        "product_title": "T-Shirt",
        "description": "Cotton T-shirt with graphic print",
        "imageurl": "https://example.com/images/tshirt.jpg",
        "price": "$ 25",
        "quantity": 1, 
        "ratings": 4.4
    },
    {
        "Id": 42,
        "category": "Beauty",
        "product_title": "Shampoo",
        "description": "Sulfate-free shampoo for all hair types",
        "imageurl": "https://example.com/images/shampoo.jpg",
        "price": "$ 15",
        "quantity": 1, 
        "ratings": 4.5
    },
    {
        "Id": 43,
        "category": "Beauty",
        "product_title": "Conditioner",
        "description": "Moisturizing conditioner for dry hair",
        "imageurl": "https://example.com/images/conditioner.jpg",
        "price": "$ 15",
        "quantity": 1, 
        "ratings": 4.6
    },
    {
        "Id": 44,
        "category": "Kitchen",
        "product_title": "Knife Set",
        "description": "Professional knife set with block",
        "imageurl": "https://example.com/images/knife_set.jpg",
        "price": "$ 79",
        "quantity": 1, 
        "ratings": 4.5
    },
    {
        "Id": 45,
        "category": "Kitchen",
        "product_title": "Pressure Cooker",
        "description": "Stainless steel pressure cooker with safety features",
        "imageurl": "https://example.com/images/pressure_cooker.jpg",
        "price": "$ 69",
        "quantity": 1, 
        "ratings": 4.4
    },
    {
        "Id": 46,
        "category": "Books",
        "product_title": "Bhagavad Geeta",
        "description": "A guide for a way of life",
        "imageurl": "assets/geeta.jpg",
        "price": "$ 15",
        "quantity": 1, 
        "ratings": 4.5
    },
    {
        "Id": 47,
        "category": "Books",
        "product_title": "The Mountain is You",
        "description": "Face your Inner Challenges",
        "imageurl": "assets/mtisYou.jpg",
        "price": "$ 25",
        "quantity": 1, 
        "ratings": 4.4
    },
    {
        "Id": 48,
        "category": "Electronics",
        "product_title": "Drone",
        "description": "Quadcopter drone with HD camera",
        "imageurl": "https://example.com/images/drone.jpg",
        "price": "$ 299",
        "quantity": 1, 
        "ratings": 4.6
    },
    {
        "Id": 49,
        "category": "Electronics",
        "product_title": "VR Headset",
        "description": "Virtual reality headset with immersive experience",
        "imageurl": "https://example.com/images/vr_headset.jpg",
        "price": "$ 199",
        "quantity": 1, 
        "ratings": 4.5
    },
    {
        "Id": 50,
        "category": "Home Appliances",
        "product_title": "Home Appliances",
        "description": "Refrigerator",
        "imageurl": "freezer.avif",
        "price": "$ 49",
        "quantity": 1, 
        "ratings": 4.4
      }  
];



// Creating an array of unique categories
const categories = [];

products.map((item) => {
    if (!categories.some((cat) => cat.category === item.category)){
        categories.push({category: item.category});
    }
});

// rendering product container with product cards.
const productContainer = document.getElementById("productContainer");
productContainer.innerHTML = products.map((product) => {
    
    return `
        <div class="product-card">
          <img src="${product.imageurl}" alt="${product.product_title}">
          <h3>Category: ${product.category}</h3>
          <h2>${product.product_title}</h2>
          <p>${product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Ratings: ${product.ratings}</p>
          <p>Quantity: ${product.quantity}</p>
          <button class="btn" data-id="${product.Id}">Add to Cart</button>
         </div>
    
    `
}).join('');

let cartCount = 0; // initialising cart count to 0

// Updating the cart notification/count
function updateCartCount() {
    document.getElementById('cart-notification').textContent = cartCount;
};


const buttons = document.querySelectorAll(".product-card button");

buttons.forEach(button => {
    button.addEventListener('click', (event) => {

        const productid = event.target.dataset.id;
        addToCart(productid);
    });
});

function addToCart(productid) {
    const product = products.find(p => p.Id == productid);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProduct = cart.find(p => p.id == productid);

    if(existingProduct) {
        existingProduct.quantity++;
    } else{
        cart.push({ ...product});

    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("product added to the cart!!");
// Navigates to new html page
    window.location.href = 'cartPage.html';
}



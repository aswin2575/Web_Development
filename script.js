document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Adidas Predator', price: 150, img: 'predator.jpg' },
        { id: 2, name: 'Adidas Ball', price: 30, img: 'ball.jpg' },
        { id: 3, name: 'Adidas Jersey', price: 80, img: 'jersey.jpg' },
        { id: 4, name: 'Adidas Nemeziz', price: 170, img: 'nemeziz.jpg' },
        { id: 5, name: 'Adidas Tiro Pants', price: 50, img: 'tiro_pants.jpg' },
        { id: 6, name: 'Adidas X Boots', price: 160, img: 'x_boots.jpg' },
        { id: 7, name: 'Adidas Condivo', price: 35, img: 'condivo_shorts.jpg' },
        { id: 8, name: 'Adidas Gloves', price: 40, img: 'gloves.jpg' },
        { id: 9, name: 'Adidas Shin Guards', price: 25, img: 'shin_guards.jpg' },
        { id: 10, name: 'Adidas Training Top', price: 60, img: 'training_top.jpg' },
        { id: 11, name: 'Adidas Tracksuit', price: 100, img: 'tracksuit.jpg' },
        { id: 12, name: 'Adidas Cap', price: 20, img: 'cap.jpg' },
        { id: 13, name: 'Adidas Socks', price: 15, img: 'socks.jpg' },
        { id: 14, name: 'Adidas Backpack', price: 45, img: 'backpack.jpg' },
        { id: 15, name: 'Adidas Water Bottle', price: 10, img: 'water_bottle.jpg' },
        { id: 16, name: 'Adidas Beanie', price: 25, img: 'beanie.jpg' },
        { id: 17, name: 'Adidas Hoodie', price: 70, img: 'hoodie.jpg' },
        { id: 18, name: 'Adidas Sweatshirt', price: 60, img: 'sweatshirt.jpg' },
        { id: 19, name: 'Adidas Slides', price: 30, img: 'slides.jpg' },
        { id: 20, name: 'Adidas Windbreaker', price: 90, img: 'windbreaker.jpg' }
    ];

    const productList = document.querySelector('.product-list');
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout');

    let cart = [];

    function displayProducts() {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button data-id="${product.id}">Add to Cart</button>
            `;
            productList.appendChild(productDiv);
        });
    }

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            total += item.price;
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
                <button data-id="${item.id}">Remove</button>
            `;
            cartItems.appendChild(cartItemDiv);
        });
        cartTotal.textContent = total.toFixed(2);
    }

    function addToCart(id) {
        const product = products.find(p => p.id === id);
        if (product) {
            cart.push(product);
            updateCart();
        }
    }

    function removeFromCart(id) {
        cart = cart.filter(item => item.id !== id);
        updateCart();
    }

    productList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const id = parseInt(e.target.getAttribute('data-id'));
            addToCart(id);
        }
    });

    cartItems.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const id = parseInt(e.target.getAttribute('data-id'));
            removeFromCart(id);
        }
    });

    checkoutButton.addEventListener('click', () => {
        alert('Checkout is not implemented in this demo.');
    });

    displayProducts();
});

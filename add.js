let cart = [];

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let product = cart.find(item => item.name === name);

    if (product) {
        product.quantity += 1;
    } else {
        cart.push({ name: name, price: price, quantity: 1 });
    }

    let total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('cartTotal', total);

    alert(`${name} added to cart!`);

    // Redirect to payment page
    window.location.href = 'payment.html';
}


function updateCartTotal() {
    let total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    let itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    document.getElementById('cartCount').innerText = itemCount;

    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('cartTotal', total);
    localStorage.setItem('cartItemCount', itemCount);
}

document.addEventListener('DOMContentLoaded', function() {
    let storedCart = localStorage.getItem('cart');
    let total = localStorage.getItem('cartTotal');
    let itemCount = localStorage.getItem('cartItemCount');

    if (storedCart) {
        cart = JSON.parse(storedCart);
    }

    if (total) {
        document.getElementById('total-amount').innerText = total;
    }

    if (itemCount) {
        document.getElementById('cartCount').innerText = itemCount;
    }
});

const express = require('express');
const app = express();
const port = 3000;

// Serve static files (your frontend)
app.use(express.static('public')); // Create a 'public' folder to store HTML, CSS, and JS

// Sample API route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



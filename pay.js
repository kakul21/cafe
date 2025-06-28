document.addEventListener('DOMContentLoaded', function() {
    let storedCart = localStorage.getItem('cart');
    let total = localStorage.getItem('cartTotal');

    if (storedCart) {
        let cart = JSON.parse(storedCart);
        displayCartItems(cart);
    }

    if (total) {
        document.getElementById('total-amount').innerText = total;
    }
});

function displayCartItems(cart) {
    let cartItemsContainer = document.getElementById('cart-items');
    
    cart.forEach(item => {
        let itemElement = document.createElement('div');
        itemElement.innerHTML = `<p>${item.name} - Quantity: ${item.quantity} - Price: ₹${item.price * item.quantity}</p>`;
        cartItemsContainer.appendChild(itemElement);
    });
}

function proceedToPayment() {
    alert('Proceeding to payment');
    // payment processing code is here
    function proceedToPayment() {
        // Optionally, add validation to ensure the cart has items
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length === 0) {
            alert('Your cart is empty. Please add items to the cart before proceeding.');
            return;
        }
        
        // Redirect to the payment page
        window.location.href = 'payment.html';
    }
    
}

// Function to load cart items from localStorage and display them on the payment page
function loadCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = localStorage.getItem('cartTotal') || 0;
    
    if (cart.length > 0) {
        let cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = ''; // Clear any existing content

        cart.forEach((item, index) => {
            let itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <p>${item.name} - ₹${item.price} x ${item.quantity}</p>
                <button onclick="removeItem(${index})">Remove</button>
            `;
            cartItemsContainer.appendChild(itemElement);
        });

        document.getElementById('total-amount').innerText = total;
    } else {
        document.getElementById('cart-items').innerHTML = '<p>Your cart is empty.</p>';
        document.getElementById('total-amount').innerText = 0;
    }
}

// Function to remove an item from the cart
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;
    
    if (cart.length > 0) {
        cart.splice(index, 1); // Remove the item at the specified index
        total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('cartTotal', total);
        loadCartItems(); // Reload the cart items
    }
}

// Function to handle redirection to payment page
function proceedToPayment() {
    // Add any additional validation if needed
    window.location.href = 'payment.html'; // Redirect to the payment page
}

// Call the function when the page loads
window.onload = loadCartItems;

function submitPayment(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    let name = document.querySelector('input[type="text"]').value;
    let email = document.querySelector('input[type="email"]').value;
    let city = document.querySelector('input[type="text"]').value;
    let address = document.querySelector('input[type="text"]').value;
    let pincode = document.querySelector('input[type="number"]').value;
    let cardNumber = document.querySelector('input[type="number"]').value;
    let expiryMonth = document.querySelector('input[type="number"]').value;
    let expiryYear = document.querySelector('input[type="number"]').value;
    let cvv = document.querySelector('input[type="number"]').value;

    // Validate form data (basic example)
    if (!name || !email || !cardNumber || !expiryMonth || !expiryYear || !cvv) {
        alert('Please fill in all required fields.');
        return;
    }

    // Process payment (send data to server or handle payment logic here)
    // For demonstration, we will just clear the cart and redirect to a thank you page
    
    localStorage.removeItem('cart');
    localStorage.removeItem('cartTotal');
    alert('Payment processed successfully!');

    // Redirect to a thank you page or confirmation page
    window.location.href = 'Thankyou.html';
}



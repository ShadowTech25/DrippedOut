
let cart = [];

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartTable = document.querySelector("tbody");
  const cartTotal = document.querySelector("tfoot td:last-child");
  if (!cartTable || !cartTotal) return;

  cartTable.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const row = document.createElement('tr');
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    row.innerHTML = `<td>${item.name}</td><td>${item.qty}</td><td>$${item.price}</td><td>$${itemTotal}</td>`;
    cartTable.appendChild(row);
  });

  cartTotal.textContent = `$${total}`;
}

// Example default cart items for demo
window.onload = () => {
  addToCart('Luxury Hoodie', 80);
  addToCart('Golden Sneakers', 120);
};console.log('Dripped Out Apparel loaded.');


document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
      const productCard = button.closest('.product-card');
      const productId = productCard.querySelector('h3').innerText;
      const productName = productCard.querySelector('h3').innerText;
      const productPrice = productCard.querySelector('.price').innerText;
      const productImage = productCard.querySelector('img').src;

      const product = { id: productId, name: productName, price: productPrice, image: productImage };

      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${productName} has been added to your cart.`);
    });
  });

  const categorySelect = document.getElementById('categorySelect');
  const allSections = document.querySelectorAll('.category-section');

  categorySelect.addEventListener('change', () => {
    const selected = categorySelect.value;
    allSections.forEach(section => {
      section.style.display = section.classList.contains(selected) || selected === 'all' ? 'flex' : 'none';
    });
  });
}

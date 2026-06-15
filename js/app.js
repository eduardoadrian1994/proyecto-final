// Aplicación principal - orquestador
document.addEventListener('DOMContentLoaded', async function() {
  CartManager.init();

  // En página de productos
  const productosContainer = document.getElementById('productos-container');
  if (productosContainer) {
    const productos = await API.fetchProducts();

    if (productos.length > 0) {
      productosContainer.innerHTML = productos
        .map(p => UI.renderProductCard(p))
        .join('');

      // Event listeners para botones "Agregar al carrito"
      document.querySelectorAll('.btn-agregar').forEach(btn => {
        btn.addEventListener('click', function() {
          const producto = {
            id: parseInt(this.dataset.id),
            name: this.dataset.name,
            price: parseFloat(this.dataset.price),
            image: this.dataset.image
          };
          CartManager.add(producto);
          UI.showNotification(`${producto.name} agregado al carrito`);
          UI.updateCartCounter();
        });
      });
    }
  }

  // En página del carrito
  const cartContainer = document.getElementById('cart-items');
  if (cartContainer) {
    const cartItems = CartManager.getAll();

    if (cartItems.length > 0) {
      cartContainer.innerHTML = cartItems
        .map(item => UI.renderCartItem(item))
        .join('');

      // Event listeners para controles del carrito
      document.querySelectorAll('.btn-qty').forEach(btn => {
        btn.addEventListener('click', function() {
          const itemId = parseInt(this.dataset.id);
          const action = this.dataset.action;
          const item = CartManager.getAll().find(i => i.id === itemId);

          if (action === 'increase') {
            CartManager.update(itemId, item.quantity + 1);
          } else if (action === 'decrease') {
            CartManager.update(itemId, item.quantity - 1);
          }
          location.reload();
        });
      });

      document.querySelectorAll('.btn-remove').forEach(btn => {
        btn.addEventListener('click', function() {
          const itemId = parseInt(this.dataset.id);
          CartManager.remove(itemId);
          location.reload();
        });
      });

      // Actualizar total
      const totalElement = document.getElementById('cart-total');
      if (totalElement) {
        totalElement.textContent = CartManager.getTotal().toFixed(2);
      }
    } else {
      cartContainer.innerHTML = '<p style="text-align: center; padding: 2rem;">Tu carrito está vacío</p>';
    }
  }

  // Actualizar contador en navbar
  UI.updateCartCounter();
});

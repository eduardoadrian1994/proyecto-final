// Helpers para manipulación del DOM
const UI = {
  renderProductCard(producto) {
    return `
      <div class="card">
        <img src="${producto.image}" alt="${producto.name}">
        <h3>${producto.name}</h3>
        <p>${producto.description}</p>
        <p style="font-weight: bold; color: #e0c68b;">$${producto.price.toFixed(2)}</p>
        <button class="btn-agregar" data-id="${producto.id}" data-name="${producto.name}" data-price="${producto.price}" data-image="${producto.image}">
          Agregar al carrito
        </button>
      </div>
    `;
  },

  renderCartItem(item) {
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" style="width: 60px; border-radius: 5px;">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
        </div>
        <div class="cart-item-controls">
          <button class="btn-qty" data-id="${item.id}" data-action="decrease">-</button>
          <span>${item.quantity}</span>
          <button class="btn-qty" data-id="${item.id}" data-action="increase">+</button>
          <button class="btn-remove" data-id="${item.id}">🗑</button>
        </div>
        <div class="cart-item-total">
          $${(item.price * item.quantity).toFixed(2)}
        </div>
      </div>
    `;
  },

  updateCartCounter() {
    const counter = document.getElementById('cart-count');
    if (counter) {
      const count = CartManager.getCount();
      counter.textContent = count;
      counter.style.display = count > 0 ? 'inline' : 'none';
    }
  },

  showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: ${type === 'success' ? '#4caf50' : '#f44336'};
      color: white;
      padding: 15px 20px;
      border-radius: 5px;
      z-index: 1000;
      animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  }
};

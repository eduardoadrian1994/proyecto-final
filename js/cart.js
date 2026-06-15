// Lógica del carrito de compras
const CartManager = {
  items: [],

  init() {
    this.items = Storage.load();
  },

  add(producto) {
    const existente = this.items.find(item => item.id === producto.id);
    if (existente) {
      existente.quantity += 1;
    } else {
      this.items.push({
        id: producto.id,
        name: producto.name,
        price: producto.price,
        image: producto.image,
        quantity: 1
      });
    }
    this.save();
  },

  remove(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.save();
  },

  update(productId, quantity) {
    const item = this.items.find(item => item.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.remove(productId);
      } else {
        item.quantity = quantity;
        this.save();
      }
    }
  },

  getTotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  getCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  },

  getAll() {
    return this.items;
  },

  clear() {
    this.items = [];
    this.save();
  },

  save() {
    Storage.save(this.items);
  }
};

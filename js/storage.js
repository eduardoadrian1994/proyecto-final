// Wrapper para localStorage del carrito
const Storage = {
  CART_KEY: 'carrito_whisky',

  save(items) {
    try {
      localStorage.setItem(this.CART_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Error guardando carrito:', error);
    }
  },

  load() {
    try {
      const data = localStorage.getItem(this.CART_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error cargando carrito:', error);
      return [];
    }
  },

  clear() {
    try {
      localStorage.removeItem(this.CART_KEY);
    } catch (error) {
      console.error('Error limpiando carrito:', error);
    }
  }
};

// API wrapper para cargar productos
const API = {
  async fetchProducts() {
    try {
      const response = await fetch('./data/productos.json');
      if (!response.ok) throw new Error('Error cargando productos');
      return await response.json();
    } catch (error) {
      console.error('Error en API.fetchProducts:', error);
      return [];
    }
  }
};

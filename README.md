# Proyecto Final - Whisky Premium 🥃

Una página web elegante e interactiva para una tienda premium de whisky, desarrollada como proyecto final del curso de Frontend con JavaScript.

## 📋 Descripción

Whisky Premium es un sitio web moderno que presenta una colección seleccionada de whiskies de calidad. El proyecto implementa un e-commerce funcional con carrito de compras, catálogo de productos, reseñas de clientes y formulario de contacto. Utiliza JavaScript vanilla para crear una experiencia dinámica y responsiva sin dependencias externas.

### Características principales:
- ✅ Catálogo dinámico de productos
- ✅ Carrito de compras interactivo
- ✅ Sistema de reseñas y valoraciones
- ✅ Formulario de contacto con validación
- ✅ Diseño responsivo
- ✅ Navegación intuitiva
- ✅ Galería de imágenes

## 🛠️ Tecnologías

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| **HTML5** | — | Estructura y semántica |
| **CSS3** | — | Estilos, animaciones y responsive design |
| **JavaScript (Vanilla)** | ES6+ | Lógica interactiva y manejo del DOM |
| **Formspree** | — | Gestión de formularios de contacto |

### Dependencias opcionales:
- `npx serve` - Para servir localmente durante desarrollo

## ⚙️ Instalación

### Requisitos previos:
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor HTTP local (opcional, para desarrollo)

### Pasos:

1. **Descargar el proyecto**
   ```bash
   git clone <URL-del-repositorio>
   cd proyecto-final
   ```

2. **Copiar los assets multimedia** (si no están incluidos)
   ```bash
   cp -r ../proyecto/img ./img
   ```

3. **Opción A: Abrir directamente**
   - Abre `index.html` con doble clic en tu navegador

4. **Opción B: Usar un servidor local (recomendado)**
   ```bash
   # Instalando serve globalmente
   npm install -g serve
   
   # O ejecutando directamente
   npx serve .
   ```
   
   - Abre tu navegador en `http://localhost:3000`

## 📁 Estructura de carpetas

```
proyecto-final/
├── index.html              # Página de portada
├── inicio.html             # Página de inicio
├── productos.html          # Catálogo de productos
├── carrito.html            # Carrito de compras
├── resenas.html            # Reseñas y testimonios
├── contacto.html           # Formulario de contacto
├── gracias.html            # Página de confirmación
├── css/
│   └── styles.css          # Estilos principales
├── js/
│   ├── main.js             # Script principal
│   ├── carrito.js          # Lógica del carrito
│   └── productos.js        # Gestión de productos
├── data/
│   └── productos.json      # Base de datos de productos
└── img/                    # Imágenes y multimedia

```

## 🚀 Uso

1. **Navegar por productos**: Explora el catálogo en la página de productos
2. **Agregar al carrito**: Selecciona productos y ajusta cantidades
3. **Ver reseñas**: Consulta opiniones de otros clientes
4. **Contactar**: Usa el formulario para consultas y sugerencias
5. **Realizar compra**: El carrito está funcional para simular transacciones

## 📝 Notas de desarrollo

- El formulario de contacto usa **Formspree** para recepcionar mensajes (no requiere backend)
- Los datos de productos se cargan desde `data/productos.json`
- El carrito persiste en `localStorage` durante la sesión
- Todas las funcionalidades son responsivas y mobile-friendly
- Se utilizó JavaScript vanilla sin frameworks para mayor compatibilidad

## 📚 Clase 15 - Material de Clase

Este proyecto cumple con los requisitos de la **Clase 15** del curso Frontend JS, incluyendo:
- Estructura HTML semántica
- Estilos CSS avanzados (grid, flexbox, animaciones)
- JavaScript interactivo (DOM manipulation, eventos, localStorage)
- Formularios validados
- Diseño responsive

## ✨ Mejoras futuras

- [ ] Integración con API de pago (Stripe, PayPal)
- [ ] Backend Node.js para persistencia
- [ ] Autenticación de usuarios
- [ ] Sistema de recomendaciones
- [ ] Optimización de imágenes

---

**Desarrollado con 💜 para el curso de Talento Tech - Frontend JavaScript**
**Autor: Eduardo Adrian Lopez Fecha: 15 junio 2026**

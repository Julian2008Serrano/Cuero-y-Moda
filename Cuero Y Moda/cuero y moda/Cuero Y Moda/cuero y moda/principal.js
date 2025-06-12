// 🔹 Sidebar (Menú desplegable)
const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
const sidebarClose = document.getElementById('sidebar-close');

menuIcon.addEventListener('click', () => {
    sidebar.style.left = '0'; // Muestra el sidebar
});

sidebarClose.addEventListener('click', () => {
    sidebar.style.left = '-250px'; // Oculta el sidebar
});

// 🔹 Carrito de compras
const cartIcon = document.getElementById('cart-icon');
const cart = document.getElementById('cart');
const cartClose = document.getElementById('cart-close');

cartIcon.addEventListener('click', () => {
    cart.style.right = '0'; // Muestra el carrito
});

cartClose.addEventListener('click', () => {
    cart.style.right = '-100%'; // Oculta el carrito
});

// 🔹 Añadir productos al carrito (Simulación)
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Producto añadido al carrito'); // Mensaje de confirmación
    });
});

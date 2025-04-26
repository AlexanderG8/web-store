// TechStore - Funcionalidad principal
document.addEventListener('DOMContentLoaded', function() {
    // Base de datos de productos
    const productos = [
        {
            id: 1,
            nombre: "Laptop Gaming Avanzada",
            categoria: "laptops",
            precio: 1299.99,
            descripcion: "Laptop gaming con procesador Intel i7, 16GB RAM, 512GB SSD, NVIDIA RTX 3070.",
            descripcionLarga: "Experimenta el máximo rendimiento en juegos con esta potente laptop gaming. Equipada con un procesador Intel Core i7 de última generación, 16GB de memoria RAM DDR4, almacenamiento SSD de 512GB para cargas rápidas, y una tarjeta gráfica NVIDIA GeForce RTX 3070 para disfrutar de los juegos más exigentes con ray tracing y DLSS. La pantalla de 15.6 pulgadas con tasa de refresco de 144Hz te ofrece una experiencia visual fluida y sin interrupciones.",
            imagen: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
            stock: 15
        },
        {
            id: 2,
            nombre: "Laptop Ultradelgada",
            categoria: "laptops",
            precio: 899.99,
            descripcion: "Laptop ultradelgada con procesador Intel i5, 8GB RAM, 256GB SSD, ideal para trabajo.",
            descripcionLarga: "Diseñada para profesionales en movimiento, esta laptop ultradelgada combina potencia y portabilidad. Con un peso de solo 1.2kg y 14mm de grosor, incluye un procesador Intel Core i5, 8GB de RAM y un SSD de 256GB. La batería de larga duración te permite trabajar hasta 12 horas continuas. Su pantalla de 13.3 pulgadas con tecnología IPS ofrece colores vivos y ángulos de visión amplios, perfecta para presentaciones y trabajo creativo.",
            imagen: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
            stock: 20
        },
        {
            id: 3,
            nombre: "Teclado Mecánico RGB",
            categoria: "perifericos",
            precio: 89.99,
            descripcion: "Teclado mecánico con switches Cherry MX, retroiluminación RGB y teclas programables.",
            descripcionLarga: "Mejora tu experiencia de escritura y gaming con este teclado mecánico premium. Equipado con switches Cherry MX Brown que ofrecen una respuesta táctil satisfactoria sin ser demasiado ruidosos. La retroiluminación RGB personalizable te permite crear perfiles de iluminación únicos para diferentes juegos o aplicaciones. Incluye software para programar macros y personalizar cada tecla. Su construcción en aluminio garantiza durabilidad y estabilidad durante el uso intensivo.",
            imagen: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
            stock: 50
        },
        {
            id: 4,
            nombre: "Mouse Gaming",
            categoria: "perifericos",
            precio: 59.99,
            descripcion: "Mouse gaming con sensor óptico de 16000 DPI, 8 botones programables y RGB.",
            descripcionLarga: "Domina tus juegos favoritos con este mouse gaming de alto rendimiento. Su sensor óptico de 16000 DPI ajustable te ofrece precisión milimétrica, mientras que sus 8 botones programables te permiten ejecutar comandos complejos con un solo clic. El diseño ergonómico se adapta perfectamente a tu mano para sesiones de juego prolongadas sin fatiga. La iluminación RGB sincronizable con otros dispositivos añade un toque personal a tu setup gaming.",
            imagen: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1128&q=80",
            stock: 45
        },
        {
            id: 5,
            nombre: "Monitor Gaming 27\"",
            categoria: "perifericos",
            precio: 349.99,
            descripcion: "Monitor gaming de 27 pulgadas, 1440p, 165Hz, 1ms, compatible con G-Sync y FreeSync.",
            descripcionLarga: "Lleva tu experiencia visual al siguiente nivel con este monitor gaming de 27 pulgadas. La resolución QHD (2560x1440) ofrece imágenes nítidas y detalladas, mientras que la tasa de refresco de 165Hz y el tiempo de respuesta de 1ms eliminan el desenfoque de movimiento y el tearing. Compatible tanto con NVIDIA G-Sync como con AMD FreeSync para una experiencia de juego fluida sin importar tu tarjeta gráfica. El panel IPS garantiza colores precisos y ángulos de visión amplios, ideal tanto para gaming como para trabajo creativo.",
            imagen: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            stock: 10
        },
        {
            id: 6,
            nombre: "Tarjeta Gráfica RTX 3080",
            categoria: "componentes",
            precio: 799.99,
            descripcion: "Tarjeta gráfica NVIDIA RTX 3080, 10GB GDDR6X, ray tracing y DLSS para gaming 4K.",
            descripcionLarga: "Potencia tus juegos y aplicaciones creativas con la RTX 3080. Basada en la arquitectura Ampere de NVIDIA, ofrece 10GB de memoria GDDR6X ultrarrápida y soporte para ray tracing en tiempo real para gráficos fotorrealistas. La tecnología DLSS impulsada por IA aumenta el rendimiento sin sacrificar calidad visual. Con esta tarjeta podrás disfrutar de gaming en 4K a más de 60 FPS en los títulos más exigentes, o acelerar tus flujos de trabajo en aplicaciones de renderizado y edición de video.",
            imagen: "https://images.unsplash.com/photo-1591405351990-4726e331f141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            stock: 5
        },
        {
            id: 7,
            nombre: "Procesador Intel i9",
            categoria: "componentes",
            precio: 529.99,
            descripcion: "Procesador Intel Core i9 de 12ª generación, 16 núcleos, hasta 5.2GHz para gaming y creación de contenido.",
            descripcionLarga: "El Intel Core i9 de 12ª generación representa lo último en rendimiento para entusiastas. Con 16 núcleos (8 de rendimiento + 8 eficientes) y 24 hilos, este procesador maneja fácilmente las cargas de trabajo más exigentes. Alcanza velocidades de hasta 5.2GHz en modo turbo para un rendimiento excepcional en juegos y aplicaciones de creación de contenido. Compatible con memoria DDR5 y PCIe 5.0 para aprovechar las tecnologías más recientes. Su arquitectura híbrida optimiza el consumo de energía sin comprometer el rendimiento.",
            imagen: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
            stock: 12
        },
        {
            id: 8,
            nombre: "Memoria RAM 32GB",
            categoria: "componentes",
            precio: 149.99,
            descripcion: "Kit de memoria RAM DDR4 de 32GB (2x16GB), 3600MHz, CL16, con iluminación RGB.",
            descripcionLarga: "Maximiza el rendimiento de tu sistema con este kit de memoria RAM de alta velocidad. Con 32GB (2 módulos de 16GB) a 3600MHz y latencias CL16, ofrece la velocidad y capacidad necesarias para multitarea exigente, gaming y aplicaciones profesionales. Los disipadores de aluminio garantizan una refrigeración óptima incluso en condiciones de uso intensivo. La iluminación RGB sincronizable con las principales placas base añade un toque visual personalizado a tu equipo.",
            imagen: "https://images.unsplash.com/photo-1562976540-1502c2145186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1039&q=80",
            stock: 30
        }
    ];

    // Elementos del DOM
    const productsContainer = document.getElementById('products-container');
    const cartButton = document.getElementById('cart-button');
    const closeCartButton = document.getElementById('close-cart');
    const shoppingCart = document.getElementById('shopping-cart');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const checkoutBtn = document.getElementById('checkout-btn');
    const productModal = document.getElementById('product-modal');
    const modalContent = document.getElementById('modal-content');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const searchInputs = document.querySelectorAll('input[type="text"]');
    const productSearch = document.getElementById('product-search'); // Añadir esta línea

    // Estado de la aplicación
    let cart = [];
    let currentFilter = 'todos';

    // Cargar carrito desde localStorage si existe
    function loadCart() {
        const savedCart = localStorage.getItem('techstore-cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            updateCartUI();
        }
    }

    // Guardar carrito en localStorage
    function saveCart() {
        localStorage.setItem('techstore-cart', JSON.stringify(cart));
    }

    // Renderizar productos en el contenedor
    function renderProducts() {
        productsContainer.innerHTML = '';
        
        const filteredProducts = currentFilter === 'todos' 
            ? productos 
            : productos.filter(product => product.categoria === currentFilter);
        
        if (filteredProducts.length === 0) {
            productsContainer.innerHTML = `
                <div class="col-span-full text-center py-8">
                    <p class="text-gray-500 text-lg">No se encontraron productos en esta categoría.</p>
                </div>
            `;
            return;
        }
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'bg-white rounded-lg shadow-md overflow-hidden product-card hover-scale';
            productCard.innerHTML = `
                <div class="product-img-container h-48">
                    <img src="${product.imagen}" alt="${product.nombre}" class="w-full h-full object-cover product-img">
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2">${product.nombre}</h3>
                    <p class="text-gray-600 mb-4 h-12 overflow-hidden">${product.descripcion}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-primary font-bold text-xl">S/${product.precio.toFixed(2)}</span>
                        <button class="add-to-cart-btn bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition duration-300" 
                            data-id="${product.id}">
                            <i class="fas fa-shopping-cart mr-2"></i>Agregar
                        </button>
                    </div>
                </div>
            `;
            
            // Evento para mostrar el modal al hacer clic en la tarjeta
            productCard.querySelector('.product-img-container, h3').addEventListener('click', () => {
                showProductModal(product);
            });
            
            // Evento para agregar al carrito
            productCard.querySelector('.add-to-cart-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(product);
                showNotification(`${product.nombre} añadido al carrito`);
            });
            
            productsContainer.appendChild(productCard);
        });
    }

    // Mostrar modal de producto
    function showProductModal(product) {
        modalContent.innerHTML = `
            <div class="flex flex-col md:flex-row gap-6">
                <div class="md:w-1/2">
                    <img src="${product.imagen}" alt="${product.nombre}" class="w-full h-auto rounded-lg">
                </div>
                <div class="md:w-1/2">
                    <div class="flex justify-between items-start">
                        <h2 class="text-2xl font-bold mb-4">${product.nombre}</h2>
                        <button class="text-gray-500 hover:text-gray-700 close-modal">
                            <i class="fas fa-times text-xl"></i>
                        </button>
                    </div>
                    <div class="bg-gray-100 text-primary font-bold text-xl px-4 py-2 rounded-lg inline-block mb-4">
                        S/${product.precio.toFixed(2)}
                    </div>
                    <p class="text-gray-700 mb-6">${product.descripcionLarga}</p>
                    <div class="mb-6">
                        <div class="flex items-center mb-2">
                            <i class="fas fa-check-circle text-green-500 mr-2"></i>
                            <span>Disponible: ${product.stock} unidades</span>
                        </div>
                        <div class="flex items-center mb-2">
                            <i class="fas fa-truck text-primary mr-2"></i>
                            <span>Envío gratis en compras mayores a S/500</span>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-shield-alt text-primary mr-2"></i>
                            <span>Garantía de 1 año</span>
                        </div>
                    </div>
                    <button class="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-secondary transition duration-300 add-to-cart-btn" 
                        data-id="${product.id}">
                        <i class="fas fa-shopping-cart mr-2"></i>Agregar al Carrito
                    </button>
                </div>
            </div>
        `;
        
        // Evento para cerrar el modal
        modalContent.querySelector('.close-modal').addEventListener('click', () => {
            productModal.classList.add('hidden');
            document.body.classList.remove('modal-open');
        });
        
        // Evento para agregar al carrito desde el modal
        modalContent.querySelector('.add-to-cart-btn').addEventListener('click', () => {
            addToCart(product);
            showNotification(`${product.nombre} añadido al carrito`);
        });
        
        // Mostrar el modal
        productModal.classList.remove('hidden');
        document.body.classList.add('modal-open');
    }

    // Agregar producto al carrito
    function addToCart(product) {
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.cantidad += 1;
        } else {
            cart.push({
                id: product.id,
                nombre: product.nombre,
                precio: product.precio,
                imagen: product.imagen,
                cantidad: 1
            });
        }
        
        updateCartUI();
        saveCart();
    }

    // Eliminar producto del carrito
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCartUI();
        saveCart();
    }

    // Actualizar cantidad de un producto en el carrito
    function updateQuantity(productId, newQuantity) {
        const item = cart.find(item => item.id === productId);
        
        if (item) {
            if (newQuantity <= 0) {
                removeFromCart(productId);
            } else {
                item.cantidad = newQuantity;
                updateCartUI();
                saveCart();
            }
        }
    }

    // Actualizar la interfaz del carrito
    function updateCartUI() {
        // Actualizar contador del carrito
        const totalItems = cart.reduce((total, item) => total + item.cantidad, 0);
        cartCount.textContent = totalItems;
        
        // Mostrar/ocultar mensaje de carrito vacío
        if (cart.length === 0) {
            emptyCartMessage.classList.remove('hidden');
            cartItems.innerHTML = '';
        } else {
            emptyCartMessage.classList.add('hidden');
            
            // Renderizar items del carrito
            cartItems.innerHTML = '';
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'flex items-center border-b py-4 cart-item';
                cartItem.innerHTML = `
                    <img src="${item.imagen}" alt="${item.nombre}" class="w-16 h-16 object-cover rounded">
                    <div class="ml-4 flex-grow">
                        <h4 class="font-bold">${item.nombre}</h4>
                        <div class="flex justify-between items-center mt-2">
                            <div class="flex items-center border rounded">
                                <button class="quantity-btn px-3 py-1" data-action="decrease" data-id="${item.id}">-</button>
                                <span class="px-3">${item.cantidad}</span>
                                <button class="quantity-btn px-3 py-1" data-action="increase" data-id="${item.id}">+</button>
                            </div>
                            <span class="font-bold">S/${(item.precio * item.cantidad).toFixed(2)}</span>
                        </div>
                    </div>
                    <button class="ml-4 text-gray-500 hover:text-red-500 remove-item" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                `;
                
                cartItems.appendChild(cartItem);
            });
            
            // Agregar eventos a los botones de cantidad y eliminar
            cartItems.querySelectorAll('.quantity-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation(); // Detener la propagación del evento
                    const productId = parseInt(e.target.dataset.id);
                    const action = e.target.dataset.action;
                    const item = cart.find(item => item.id === productId);
                    
                    if (item) {
                        if (action === 'increase') {
                            updateQuantity(productId, item.cantidad + 1);
                        } else if (action === 'decrease') {
                            updateQuantity(productId, item.cantidad - 1);
                        }
                    }
                });
            });
            
            cartItems.querySelectorAll('.remove-item').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation(); // Detener la propagación del evento
                    const productId = parseInt(e.target.closest('.remove-item').dataset.id);
                    removeFromCart(productId);
                });
            });
        }
        
        // Actualizar total del carrito
        const total = cart.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
        cartTotal.textContent = `S/${total.toFixed(2)}`;
    }

    // Mostrar notificación
    function showNotification(message) {
        // Eliminar notificaciones existentes
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Crear nueva notificación
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <div class="flex items-center">
                <i class="fas fa-check-circle mr-2"></i>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Mostrar con animación
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Ocultar después de 3 segundos
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
    }

    // Filtrar productos por categoría
    function filterProducts(category) {
        currentFilter = category;
        
        // Actualizar estado visual de los botones
        filterButtons.forEach(btn => {
            if (btn.dataset.filter === category) {
                btn.classList.add('active', 'bg-primary', 'text-white');
                btn.classList.remove('bg-white', 'text-dark');
            } else {
                btn.classList.remove('active', 'bg-primary', 'text-white');
                btn.classList.add('bg-white', 'text-dark');
            }
        });
        
        renderProducts();
    }

    // Buscar productos
    function searchProducts(query) {
        if (!query.trim()) {
            filterProducts(currentFilter);
            return;
        }
        
        query = query.toLowerCase();
        
        productsContainer.innerHTML = '';
        
        const results = productos.filter(product => 
            product.nombre.toLowerCase().includes(query) || 
            product.descripcion.toLowerCase().includes(query)
        );
        
        if (results.length === 0) {
            productsContainer.innerHTML = `
                <div class="col-span-full text-center py-8">
                    <p class="text-gray-500 text-lg">No se encontraron productos que coincidan con "${query}".</p>
                </div>
            `;
            return;
        }
        
        results.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'bg-white rounded-lg shadow-md overflow-hidden product-card hover-scale';
            
            // Resaltar coincidencias en el nombre y descripción
            const highlightedName = product.nombre.replace(
                new RegExp(query, 'gi'),
                match => `<span class="search-highlight">${match}</span>`
            );
            
            const highlightedDesc = product.descripcion.replace(
                new RegExp(query, 'gi'),
                match => `<span class="search-highlight">${match}</span>`
            );
            
            productCard.innerHTML = `
                <div class="product-img-container h-48">
                    <img src="${product.imagen}" alt="${product.nombre}" class="w-full h-full object-cover product-img">
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2">${highlightedName}</h3>
                    <p class="text-gray-600 mb-4 h-12 overflow-hidden">${highlightedDesc}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-primary font-bold text-xl">$${product.precio.toFixed(2)}</span>
                        <button class="add-to-cart-btn bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition duration-300" 
                            data-id="${product.id}">
                            <i class="fas fa-shopping-cart mr-2"></i>Agregar
                        </button>
                    </div>
                </div>
            `;
            
            // Evento para mostrar el modal al hacer clic en la tarjeta
            productCard.querySelector('.product-img-container, h3').addEventListener('click', () => {
                showProductModal(product);
            });
            
            // Evento para agregar al carrito
            productCard.querySelector('.add-to-cart-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(product);
                showNotification(`${product.nombre} añadido al carrito`);
            });
            
            productsContainer.appendChild(productCard);
        });
    }

    // Simular proceso de compra
    function checkout() {
        if (cart.length === 0) {
            showNotification('El carrito está vacío');
            return;
        }
        
        // Mostrar mensaje de carga
        const loadingEl = document.createElement('div');
        loadingEl.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center';
        loadingEl.innerHTML = `
            <div class="bg-white p-6 rounded-lg text-center">
                <div class="loading mb-4">
                    <div></div><div></div><div></div><div></div>
                </div>
                <p class="text-lg">Procesando tu compra...</p>
            </div>
        `;
        document.body.appendChild(loadingEl);
        
        // Simular proceso de compra (3 segundos)
        setTimeout(() => {
            // Eliminar mensaje de carga
            loadingEl.remove();
            
            // Mostrar mensaje de éxito
            const successEl = document.createElement('div');
            successEl.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center';
            successEl.innerHTML = `
                <div class="bg-white p-8 rounded-lg text-center max-w-md">
                    <div class="text-green-500 text-6xl mb-4">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-2">¡Compra Exitosa!</h3>
                    <p class="text-gray-600 mb-6">Tu pedido ha sido procesado correctamente. Recibirás un correo con los detalles de tu compra.</p>
                    <button id="continue-shopping" class="bg-primary text-white py-3 px-6 rounded-lg font-bold hover:bg-secondary transition duration-300">
                        Continuar Comprando
                    </button>
                </div>
            `;
            document.body.appendChild(successEl);
            
            // Evento para cerrar el mensaje
            successEl.querySelector('#continue-shopping').addEventListener('click', () => {
                successEl.remove();
                shoppingCart.classList.remove('open');
                
                // Limpiar carrito
                cart = [];
                saveCart();
                updateCartUI();
            });
            
        }, 3000);
    }

    // Función para redireccionar a WhatsApp con los productos del carrito
    function redirectToWhatsApp() {
        if (cart.length === 0) {
            showNotification('El carrito está vacío');
            return;
        }
        
        // Crear mensaje con los productos del carrito
        let message = "Hola, quiero información de los siguientes productos: \n\n";
        
        cart.forEach(item => {
            message += `• ${item.nombre} - Cantidad: ${item.cantidad} - Precio: S/${(item.precio * item.cantidad).toFixed(2)}\n`;
        });
        
        // Agregar el total al mensaje
        const total = cart.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
        message += `\nTotal: S/${total.toFixed(2)}`;
        
        // Codificar el mensaje para URL
        const encodedMessage = encodeURIComponent(message);
        
        // Número de WhatsApp (reemplaza con tu número real)
        const phoneNumber = "+51989006831"; // Cambia este número por el número de WhatsApp de tu tienda
        
        // Crear URL de WhatsApp
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // Abrir WhatsApp en una nueva pestaña
        window.open(whatsappURL, '_blank');
    }

    // Inicializar eventos
    function initEvents() {
        // Evento para abrir/cerrar carrito
        cartButton.addEventListener('click', () => {
            shoppingCart.classList.add('open');
        });
        
        closeCartButton.addEventListener('click', () => {
            shoppingCart.classList.remove('open');
        });
        
        // Evento para cerrar modal al hacer clic fuera
        productModal.addEventListener('click', (e) => {
            if (e.target === productModal) {
                productModal.classList.add('hidden');
                document.body.classList.remove('modal-open');
            }
        });
        
        // Eventos para filtrar productos
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.dataset.filter;
                filterProducts(category);
            });
        });
        
        // Eventos para filtrar por categoría desde secciones principales
        categoryButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.dataset.category;
                filterProducts(category);
                
                // Actualizar botones de filtro
                filterButtons.forEach(filterBtn => {
                    if (filterBtn.dataset.filter === category) {
                        filterBtn.click();
                    }
                });
            });
        });
        
        // Evento para procesar compra
        checkoutBtn.addEventListener('click', redirectToWhatsApp);
        
        // Evento para menú móvil
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Eventos para búsqueda
        searchInputs.forEach(input => {
            input.addEventListener('input', (e) => {
                searchProducts(e.target.value);
            });
            
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    searchProducts(e.target.value);
                }
            });
        });
        
        // Evento específico para el buscador de productos
        if (productSearch) {
            productSearch.addEventListener('input', (e) => {
                searchProducts(e.target.value);
            });
        }
        
        // Cerrar carrito al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (shoppingCart.classList.contains('open') && 
                !shoppingCart.contains(e.target) && 
                e.target !== cartButton && 
                !cartButton.contains(e.target) &&
                !e.target.closest('.quantity-btn') && // Ignorar clics en botones de cantidad
                !e.target.closest('.remove-item')) {  // Ignorar clics en botones de eliminar
                shoppingCart.classList.remove('open');
            }
        });
        
        // Tecla ESC para cerrar modales
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (!productModal.classList.contains('hidden')) {
                    productModal.classList.add('hidden');
                    document.body.classList.remove('modal-open');
                }
                
                if (shoppingCart.classList.contains('open')) {
                    shoppingCart.classList.remove('open');
                }
            }
        });
    }

    // Inicializar la aplicación
    function init() {
        renderProducts();
        loadCart();
        initEvents();
    }

    // Iniciar la aplicación
    init();
});

// Evitar que el formulario de suscripción recargue la página
document.addEventListener('submit', function(e) {
    if (e.target.querySelector('input[type="email"]')) {
        e.preventDefault();
        const emailInput = e.target.querySelector('input[type="email"]');
        
        if (emailInput.value.trim()) {
            // Mostrar mensaje de éxito
            const successMessage = document.createElement('div');
            successMessage.className = 'mt-4 p-3 bg-green-100 text-green-700 rounded-lg';
            successMessage.innerHTML = `
                <div class="flex items-center">
                    <i class="fas fa-check-circle mr-2"></i>
                    <span>¡Gracias por suscribirte! Hemos enviado un cupón de descuento a ${emailInput.value}</span>
                </div>
            `;
            
            // Limpiar input y mostrar mensaje
            emailInput.value = '';
            e.target.appendChild(successMessage);
            
            // Eliminar mensaje después de 5 segundos
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        }
    }
});
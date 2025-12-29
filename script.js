// script.js - VERSI LENGKAP untuk Teras Kaca Cafe

// =============================
// DATA STORAGE (LocalStorage)
// =============================
const STORAGE_KEYS = {
    MENU: 'teraskaca_menu_data',
    ORDERS: 'teraskaca_order_data',
    USERS: 'teraskaca_user_data',
    CART: 'teraskaca_cart_data',
    SETTINGS: 'teraskaca_settings_data'
};

// Inisialisasi data default jika kosong
function initializeData() {
    // Data Menu Default
    if (!localStorage.getItem(STORAGE_KEYS.MENU)) {
        const defaultMenu = [
            {
                id: 'M001',
                name: 'Glass Latte Art',
                category: 'minuman',
                price: 35000,
                description: 'Espresso dengan susu steamed creamy disajikan dalam gelas kaca dengan latte art khusus.',
                image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
                stock: 50,
                isActive: true,
                createdAt: new Date().toISOString()
            },
            {
                id: 'M002',
                name: 'Glass View Burger',
                category: 'makanan',
                price: 65000,
                description: 'Burger premium dengan daging wagyu, keju melted, dan sayuran segar dalam sajian glass plate.',
                image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80',
                stock: 30,
                isActive: true,
                createdAt: new Date().toISOString()
            },
            {
                id: 'M003',
                name: 'Matcha Latte Glass',
                category: 'minuman',
                price: 32000,
                description: 'Matcha premium dari Jepang dicampur dengan susu steamed, disajikan dalam gelas kaca yang elegan.',
                image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
                stock: 40,
                isActive: true,
                createdAt: new Date().toISOString()
            },
            {
                id: 'M004',
                name: 'Transparent Salad Bowl',
                category: 'makanan',
                price: 42000,
                description: 'Salad segar dalam mangkuk kaca dengan dressing khusus dan edible flowers.',
                image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
                stock: 25,
                isActive: true,
                createdAt: new Date().toISOString()
            },
            {
                id: 'M005',
                name: 'Iced Caramel Macchiato',
                category: 'minuman',
                price: 38000,
                description: 'Espresso dengan susu, es, dan sirup karamel dalam gelas kaca tinggi. Sempurna untuk hari panas.',
                image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
                stock: 35,
                isActive: true,
                createdAt: new Date().toISOString()
            },
            {
                id: 'M006',
                name: 'Glass Tiramisu',
                category: 'snack',
                price: 28000,
                description: 'Tiramisu klasik Italia disajikan dalam gelas kaca individu dengan taburan coklat bubuk.',
                image: 'https://images.unsplash.com/photo-1559620192-032c64bc86af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
                stock: 20,
                isActive: true,
                createdAt: new Date().toISOString()
            }
        ];
        localStorage.setItem(STORAGE_KEYS.MENU, JSON.stringify(defaultMenu));
    }

    // Data User Default (Admin & Kasir)
    if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
        const defaultUsers = [
            {
                id: 'U001',
                username: 'admin',
                password: 'admin123',
                name: 'Administrator',
                email: 'admin@teraskaca.com',
                role: 'admin',
                phone: '081234567890',
                isActive: true,
                createdAt: new Date().toISOString()
            },
            {
                id: 'U002',
                username: 'kasir',
                password: 'kasir123',
                name: 'Kasir Utama',
                email: 'kasir@teraskaca.com',
                role: 'kasir',
                phone: '081234567891',
                isActive: true,
                createdAt: new Date().toISOString()
            }
        ];
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(defaultUsers));
    }

    // Data Orders Default
    if (!localStorage.getItem(STORAGE_KEYS.ORDERS)) {
        const defaultOrders = [
            {
                id: 'TK-2024-0015',
                customerName: 'Budi Santoso',
                customerPhone: '081234567892',
                tableNumber: 'Takeaway',
                orderType: 'takeaway',
                items: [
                    { menuId: 'M001', name: 'Glass Latte Art', price: 35000, quantity: 2 },
                    { menuId: 'M006', name: 'Glass Tiramisu', price: 28000, quantity: 1 }
                ],
                subtotal: 98000,
                tax: 9800,
                serviceCharge: 4900,
                total: 112700,
                status: 'completed',
                paymentMethod: 'cash',
                paymentStatus: 'paid',
                orderDate: '2024-01-15T14:30:00',
                completedDate: '2024-01-15T15:00:00',
                kasirId: 'U002'
            },
            {
                id: 'TK-2024-0014',
                customerName: 'Sari Dewi',
                customerPhone: '081234567893',
                tableNumber: 'Meja 05',
                orderType: 'dine-in',
                items: [
                    { menuId: 'M002', name: 'Glass View Burger', price: 65000, quantity: 1 },
                    { menuId: 'M003', name: 'Matcha Latte Glass', price: 32000, quantity: 1 }
                ],
                subtotal: 97000,
                tax: 9700,
                serviceCharge: 4850,
                total: 111550,
                status: 'processing',
                paymentMethod: 'cash',
                paymentStatus: 'paid',
                orderDate: '2024-01-15T13:15:00',
                kasirId: 'U002'
            }
        ];
        localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(defaultOrders));
    }

    // Data Settings Default
    if (!localStorage.getItem(STORAGE_KEYS.SETTINGS)) {
        const defaultSettings = {
            cafeName: 'Teras Kaca Cafe',
            address: 'Gedung Skyline Tower Lt. 25, Jl. Panorama Indah No. 88, Jakarta',
            phone: '(021) 888-1234',
            email: 'hello@teraskaca.com',
            whatsapp: '081234567890',
            openingHour: '08:00',
            closingHour: '23:00',
            taxRate: 10,
            serviceChargeRate: 5,
            receiptHeader: 'TERAS KACA CAFE',
            receiptFooter: 'Terima kasih telah berkunjung!'
        };
        localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(defaultSettings));
    }
}

// =============================
// HELPER FUNCTIONS
// =============================
function formatCurrency(amount) {
    return 'Rp ' + amount.toLocaleString('id-ID');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function generateOrderId() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const orders = JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS)) || [];
    const todayOrders = orders.filter(order => order.id.includes(`${year}${month}${day}`));
    const orderNumber = String(todayOrders.length + 1).padStart(3, '0');
    return `TK-${year}${month}${day}-${orderNumber}`;
}

function generateMenuId() {
    const menus = JSON.parse(localStorage.getItem(STORAGE_KEYS.MENU)) || [];
    const lastMenu = menus[menus.length - 1];
    if (!lastMenu) return 'M001';
    
    const lastId = parseInt(lastMenu.id.substring(1));
    return 'M' + String(lastId + 1).padStart(3, '0');
}

function generateUserId() {
    const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];
    const lastUser = users[users.length - 1];
    if (!lastUser) return 'U001';
    
    const lastId = parseInt(lastUser.id.substring(1));
    return 'U' + String(lastId + 1).padStart(3, '0');
}

// =============================
// MENU MANAGEMENT
// =============================
function getAllMenus() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.MENU)) || [];
}

function getMenuById(menuId) {
    const menus = getAllMenus();
    return menus.find(menu => menu.id === menuId);
}

function getMenusByCategory(category) {
    const menus = getAllMenus();
    if (category === 'all') return menus;
    return menus.filter(menu => menu.category === category && menu.isActive);
}

function saveMenu(menuData) {
    const menus = getAllMenus();
    if (menuData.id) {
        // Update existing menu
        const index = menus.findIndex(m => m.id === menuData.id);
        if (index !== -1) {
            menus[index] = { ...menus[index], ...menuData, updatedAt: new Date().toISOString() };
        }
    } else {
        // Add new menu
        menuData.id = generateMenuId();
        menuData.createdAt = new Date().toISOString();
        menuData.isActive = true;
        menus.push(menuData);
    }
    localStorage.setItem(STORAGE_KEYS.MENU, JSON.stringify(menus));
    return menuData;
}

function deleteMenu(menuId) {
    const menus = getAllMenus();
    const filteredMenus = menus.filter(menu => menu.id !== menuId);
    localStorage.setItem(STORAGE_KEYS.MENU, JSON.stringify(filteredMenus));
    return true;
}

function updateMenuStock(menuId, quantity) {
    const menus = getAllMenus();
    const menuIndex = menus.findIndex(m => m.id === menuId);
    if (menuIndex !== -1) {
        menus[menuIndex].stock -= quantity;
        localStorage.setItem(STORAGE_KEYS.MENU, JSON.stringify(menus));
        return true;
    }
    return false;
}

// =============================
// ORDER MANAGEMENT
// =============================
function getAllOrders() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS)) || [];
}

function getOrderById(orderId) {
    const orders = getAllOrders();
    return orders.find(order => order.id === orderId);
}

function getOrdersByStatus(status) {
    const orders = getAllOrders();
    if (status === 'all') return orders;
    return orders.filter(order => order.status === status);
}

function getTodayOrders() {
    const orders = getAllOrders();
    const today = new Date().toISOString().split('T')[0];
    return orders.filter(order => order.orderDate.includes(today));
}

function saveOrder(orderData) {
    const orders = getAllOrders();
    
    if (!orderData.id) {
        // New order
        orderData.id = generateOrderId();
        orderData.orderDate = new Date().toISOString();
        orderData.status = 'waiting';
        orderData.paymentStatus = 'unpaid';
        orders.unshift(orderData); // Add to beginning
    } else {
        // Update existing order
        const index = orders.findIndex(o => o.id === orderData.id);
        if (index !== -1) {
            orders[index] = { ...orders[index], ...orderData };
        }
    }
    
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
    return orderData;
}

function updateOrderStatus(orderId, newStatus) {
    const orders = getAllOrders();
    const orderIndex = orders.findIndex(o => o.id === orderId);
    
    if (orderIndex !== -1) {
        orders[orderIndex].status = newStatus;
        
        if (newStatus === 'completed') {
            orders[orderIndex].completedDate = new Date().toISOString();
            
            // Update stock
            orders[orderIndex].items.forEach(item => {
                updateMenuStock(item.menuId, item.quantity);
            });
        }
        
        localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
        return true;
    }
    return false;
}

// =============================
// USER MANAGEMENT
// =============================
function getAllUsers() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];
}

function getUserByUsername(username) {
    const users = getAllUsers();
    return users.find(user => user.username === username);
}

function authenticateUser(username, password) {
    const user = getUserByUsername(username);
    if (user && user.password === password && user.isActive) {
        // Don't store password in session
        const { password, ...userWithoutPassword } = user;
        sessionStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
        return userWithoutPassword;
    }
    return null;
}

function getCurrentUser() {
    return JSON.parse(sessionStorage.getItem('currentUser'));
}

function logoutUser() {
    sessionStorage.removeItem('currentUser');
    localStorage.removeItem(STORAGE_KEYS.CART); // Clear cart on logout
}

function saveUser(userData) {
    const users = getAllUsers();
    
    if (userData.id) {
        // Update existing user
        const index = users.findIndex(u => u.id === userData.id);
        if (index !== -1) {
            // Keep the password if not changing
            if (!userData.password) {
                userData.password = users[index].password;
            }
            users[index] = { ...users[index], ...userData };
        }
    } else {
        // Add new user
        userData.id = generateUserId();
        userData.createdAt = new Date().toISOString();
        userData.isActive = true;
        users.push(userData);
    }
    
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    return userData;
}

function deleteUser(userId) {
    const users = getAllUsers();
    const filteredUsers = users.filter(user => user.id !== userId);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(filteredUsers));
    return true;
}

// =============================
// CART MANAGEMENT
// =============================
function getCart() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.CART)) || [];
}

function addToCart(menuId, quantity = 1) {
    const cart = getCart();
    const menu = getMenuById(menuId);
    
    if (!menu) {
        throw new Error('Menu tidak ditemukan');
    }
    
    if (menu.stock < quantity) {
        throw new Error(`Stok ${menu.name} tidak cukup. Stok tersedia: ${menu.stock}`);
    }
    
    const existingItemIndex = cart.findIndex(item => item.menuId === menuId);
    
    if (existingItemIndex > -1) {
        // Update quantity
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Add new item
        cart.push({
            menuId: menuId,
            name: menu.name,
            price: menu.price,
            quantity: quantity,
            image: menu.image
        });
    }
    
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    return cart;
}

function updateCartItem(menuId, quantity) {
    const cart = getCart();
    const menu = getMenuById(menuId);
    
    if (quantity <= 0) {
        return removeFromCart(menuId);
    }
    
    if (menu.stock < quantity) {
        throw new Error(`Stok ${menu.name} tidak cukup. Stok tersedia: ${menu.stock}`);
    }
    
    const itemIndex = cart.findIndex(item => item.menuId === menuId);
    
    if (itemIndex > -1) {
        cart[itemIndex].quantity = quantity;
        localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    }
    
    return cart;
}

function removeFromCart(menuId) {
    const cart = getCart();
    const filteredCart = cart.filter(item => item.menuId !== menuId);
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(filteredCart));
    return filteredCart;
}

function clearCart() {
    localStorage.removeItem(STORAGE_KEYS.CART);
    return [];
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// =============================
// SETTINGS MANAGEMENT
// =============================
function getSettings() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.SETTINGS)) || {};
}

function saveSettings(settingsData) {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settingsData));
    return settingsData;
}

// =============================
// REPORTS & STATISTICS
// =============================
function getDailyRevenue(date) {
    const orders = getAllOrders();
    const targetDate = date || new Date().toISOString().split('T')[0];
    
    const dailyOrders = orders.filter(order => 
        order.orderDate.includes(targetDate) && 
        order.status === 'completed'
    );
    
    const revenue = dailyOrders.reduce((total, order) => total + order.total, 0);
    const orderCount = dailyOrders.length;
    
    return {
        date: targetDate,
        orderCount,
        revenue,
        averageOrderValue: orderCount > 0 ? revenue / orderCount : 0
    };
}

function getMonthlyRevenue(year, month) {
    const orders = getAllOrders();
    const targetMonth = month || new Date().getMonth() + 1;
    const targetYear = year || new Date().getFullYear();
    
    const monthlyOrders = orders.filter(order => {
        const orderDate = new Date(order.orderDate);
        return orderDate.getFullYear() === targetYear &&
               orderDate.getMonth() + 1 === targetMonth &&
               order.status === 'completed';
    });
    
    const revenue = monthlyOrders.reduce((total, order) => total + order.total, 0);
    const orderCount = monthlyOrders.length;
    
    // Group by day for chart data
    const dailyData = {};
    monthlyOrders.forEach(order => {
        const day = new Date(order.orderDate).getDate();
        if (!dailyData[day]) {
            dailyData[day] = 0;
        }
        dailyData[day] += order.total;
    });
    
    return {
        year: targetYear,
        month: targetMonth,
        orderCount,
        revenue,
        averageOrderValue: orderCount > 0 ? revenue / orderCount : 0,
        dailyData
    };
}

function getPopularMenus(limit = 5) {
    const orders = getAllOrders();
    const menuSales = {};
    
    orders.forEach(order => {
        if (order.status === 'completed') {
            order.items.forEach(item => {
                if (!menuSales[item.menuId]) {
                    menuSales[item.menuId] = {
                        menuId: item.menuId,
                        name: item.name,
                        quantity: 0,
                        revenue: 0
                    };
                }
                menuSales[item.menuId].quantity += item.quantity;
                menuSales[item.menuId].revenue += item.price * item.quantity;
            });
        }
    });
    
    return Object.values(menuSales)
        .sort((a, b) => b.quantity - a.quantity)
        .slice(0, limit);
}

// =============================
// PRINT RECEIPT FUNCTION
// =============================
function printReceipt(orderId) {
    const order = getOrderById(orderId);
    if (!order) {
        alert('Pesanan tidak ditemukan!');
        return;
    }
    
    const settings = getSettings();
    
    // Create receipt content
    let receiptContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Struk ${order.id}</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    font-family: 'Courier New', monospace;
                    width: 80mm;
                    margin: 0;
                    padding: 10px;
                    font-size: 12px;
                }
                .receipt-header {
                    text-align: center;
                    margin-bottom: 15px;
                    border-bottom: 1px dashed #000;
                    padding-bottom: 10px;
                }
                .receipt-header h1 {
                    font-size: 18px;
                    margin: 5px 0;
                    font-weight: bold;
                }
                .receipt-info {
                    margin-bottom: 15px;
                }
                .receipt-info p {
                    margin: 3px 0;
                }
                .items-table {
                    width: 100%;
                    margin-bottom: 15px;
                    border-collapse: collapse;
                }
                .items-table th {
                    text-align: left;
                    border-bottom: 1px solid #000;
                    padding: 5px 0;
                }
                .items-table td {
                    padding: 3px 0;
                    vertical-align: top;
                }
                .items-table .item-name {
                    width: 60%;
                }
                .items-table .item-qty {
                    width: 15%;
                    text-align: center;
                }
                .items-table .item-price {
                    width: 25%;
                    text-align: right;
                }
                .total-section {
                    border-top: 2px solid #000;
                    margin-top: 10px;
                    padding-top: 10px;
                }
                .total-row {
                    display: flex;
                    justify-content: space-between;
                    margin: 3px 0;
                }
                .total-final {
                    font-weight: bold;
                    font-size: 14px;
                }
                .receipt-footer {
                    text-align: center;
                    margin-top: 20px;
                    padding-top: 10px;
                    border-top: 1px dashed #000;
                    font-size: 10px;
                }
                .print-time {
                    font-size: 10px;
                    text-align: center;
                    margin-top: 10px;
                }
                @media print {
                    body {
                        width: 80mm !important;
                    }
                }
            </style>
        </head>
        <body>
            <div class="receipt-header">
                <h1>${settings.cafeName || 'TERAS KACA CAFE'}</h1>
                <p>${settings.address || 'Gedung Skyline Tower Lt. 25, Jakarta'}</p>
                <p>Telp: ${settings.phone || '(021) 888-1234'}</p>
            </div>
            
            <div class="receipt-info">
                <p><strong>No. Pesanan:</strong> ${order.id}</p>
                <p><strong>Tanggal:</strong> ${formatDate(order.orderDate)}</p>
                <p><strong>Pelanggan:</strong> ${order.customerName}</p>
                <p><strong>Tipe:</strong> ${order.orderType === 'dine-in' ? 'Makan di Tempat' : 'Bawa Pulang'}</p>
                ${order.tableNumber ? `<p><strong>Meja:</strong> ${order.tableNumber}</p>` : ''}
            </div>
            
            <table class="items-table">
                <thead>
                    <tr>
                        <th class="item-name">Item</th>
                        <th class="item-qty">Qty</th>
                        <th class="item-price">Harga</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    // Add items
    order.items.forEach(item => {
        const itemTotal = item.price * item.quantity;
        receiptContent += `
            <tr>
                <td class="item-name">${item.name}</td>
                <td class="item-qty">${item.quantity}</td>
                <td class="item-price">${formatCurrency(itemTotal)}</td>
            </tr>
        `;
    });
    
    receiptContent += `
                </tbody>
            </table>
            
            <div class="total-section">
                <div class="total-row">
                    <span>Subtotal:</span>
                    <span>${formatCurrency(order.subtotal)}</span>
                </div>
                <div class="total-row">
                    <span>Pajak (${settings.taxRate || 10}%):</span>
                    <span>${formatCurrency(order.tax)}</span>
                </div>
                <div class="total-row">
                    <span>Layanan (${settings.serviceChargeRate || 5}%):</span>
                    <span>${formatCurrency(order.serviceCharge)}</span>
                </div>
                <div class="total-row total-final">
                    <span>TOTAL:</span>
                    <span>${formatCurrency(order.total)}</span>
                </div>
                <div class="total-row">
                    <span>Pembayaran:</span>
                    <span>${order.paymentMethod === 'cash' ? 'TUNAI' : 'NON-TUNAI'}</span>
                </div>
                <div class="total-row">
                    <span>Status:</span>
                    <span>${order.paymentStatus === 'paid' ? 'LUNAS' : 'BELUM LUNAS'}</span>
                </div>
            </div>
            
            <div class="receipt-footer">
                <p>${settings.receiptFooter || 'Terima kasih telah berkunjung!'}</p>
                <p>*** STRUK INI SAH TANPA TANDA TANGAN ***</p>
            </div>
            
            <div class="print-time">
                Dicetak: ${new Date().toLocaleString('id-ID')}
            </div>
            
            <script>
                window.onload = function() {
                    window.print();
                    setTimeout(function() {
                        window.close();
                    }, 500);
                };
            </script>
        </body>
        </html>
    `;
    
    // Open print window
    const printWindow = window.open('', '_blank', 'width=400,height=600');
    printWindow.document.write(receiptContent);
    printWindow.document.close();
}

// =============================
// INITIALIZATION
// =============================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize data
    initializeData();
    
    // Set current year in footer
    const yearElements = document.querySelectorAll('.current-year');
    yearElements.forEach(el => {
        el.textContent = new Date().getFullYear();
    });
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;
        
        revealElements.forEach(element => {
            const revealTop = element.getBoundingClientRect().top;
            
            if (revealTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    
    // Check authentication for protected pages
    const protectedPages = ['admin.html', 'kasir.html', 'user.html'];
    const currentPage = window.location.pathname.split('/').pop();
    
    if (protectedPages.includes(currentPage)) {
        const currentUser = getCurrentUser();
        
        if (!currentUser) {
            window.location.href = 'login.html';
            return;
        }
        
        // Role-based access control
        if (currentPage === 'admin.html' && currentUser.role !== 'admin') {
            alert('Akses ditolak! Hanya admin yang bisa mengakses halaman ini.');
            window.location.href = 'login.html';
            return;
        }
        
        if (currentPage === 'kasir.html' && currentUser.role !== 'kasir') {
            alert('Akses ditolak! Hanya kasir yang bisa mengakses halaman ini.');
            window.location.href = 'login.html';
            return;
        }
        
        // Display user info if element exists
        const userInfoElements = document.querySelectorAll('.user-info');
        userInfoElements.forEach(el => {
            el.textContent = currentUser.name;
        });
        
        const userRoleElements = document.querySelectorAll('.user-role');
        userRoleElements.forEach(el => {
            el.textContent = currentUser.role === 'admin' ? 'Administrator' : 'Kasir';
        });
    }
    
    // Initialize Leaflet Map
    if (document.getElementById('map')) {
        initMap();
    }
});

// Initialize Map
function initMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;
    
    // Check if Leaflet is loaded
    if (typeof L === 'undefined') {
        console.warn('Leaflet.js not loaded. Loading now...');
        loadLeaflet();
        return;
    }
    
    const jakartaCoords = [-6.2088, 106.8456];
    const map = L.map('map').setView(jakartaCoords, 15);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(map);
    
    L.marker(jakartaCoords).addTo(map)
        .bindPopup('<b>Teras Kaca Cafe</b><br>Gedung Skyline Tower Lt. 25')
        .openPopup();
}

function loadLeaflet() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);
    
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = initMap;
    document.head.appendChild(script);
}



// Export functions for use in HTML files
window.TerasKaca = {
    // Data functions
    initializeData,
    getAllMenus,
    getMenuById,
    getMenusByCategory,
    saveMenu,
    deleteMenu,
    
    // Order functions
    getAllOrders,
    getOrderById,
    getOrdersByStatus,
    getTodayOrders,
    saveOrder,
    updateOrderStatus,
    generateOrderId,
    
    // User functions
    getAllUsers,
    getUserByUsername,
    authenticateUser,
    getCurrentUser,
    logoutUser,
    saveUser,
    deleteUser,
    
    // Cart functions
    getCart,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
    getCartTotal,
    
    // Settings functions
    getSettings,
    saveSettings,
    
    // Report functions
    getDailyRevenue,
    getMonthlyRevenue,
    getPopularMenus,
    
    // Utility functions
    formatCurrency,
    formatDate,
    printReceipt,
    
    // Helper functions
    updateMenuStock
};
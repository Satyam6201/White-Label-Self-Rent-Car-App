// Contact Form Handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('form-message');

    if (!name || !email || !message) {
        showToast('Please fill out all fields.', 'error');
    } else if (!validateEmail(email)) {
        showToast('Invalid email format.', 'error');
    } else {
        showToast('Thank you for your inquiry! We will get back to you soon.', 'success');
        document.getElementById('contact-form').reset();
    }
});

function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function showToast(message, type = 'info') {
    let toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('fadeout');
        setTimeout(() => toast.remove(), 1000);
    }, 3000);
}

// Payment Functionality
function makePayment(method) {
    showToast(`Redirecting to ${method}...`, 'info');
    setTimeout(() => {
        window.location.href = `https://www.example.com/${method.toLowerCase()}`;
    }, 1500);
}

function confirmPayment() {
    const msg = document.getElementById('payment-message');
    msg.textContent = "Payment Confirmed ✅";
    msg.classList.remove('hidden');
    msg.classList.add('confirmed');
}

// FAQ Toggle - Supports multiple items
document.querySelectorAll('.faq-question').forEach((faqBtn) => {
    faqBtn.addEventListener('click', () => {
        const content = faqBtn.nextElementSibling;
        content.classList.toggle('hidden');
    });
});

// Dark Mode Toggle with LocalStorage
const darkModeToggle = document.getElementById('dark-mode-toggle');

function setDarkMode(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('darkMode', isDark);
    darkModeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
}

// Load saved preference
setDarkMode(localStorage.getItem('darkMode') === 'true');

darkModeToggle.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    setDarkMode(isDark);
});

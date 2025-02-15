document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        document.getElementById('form-message').textContent = 'Thank you for your inquiry! We will get back to you soon.';
        document.getElementById('form-message').classList.remove('hidden');
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('form-message').textContent = 'Please fill out all fields.';
        document.getElementById('form-message').classList.remove('hidden');
    }
});
function makePayment(method) {
    alert('Redirecting to ' + method + ' for payment...');
    window.location.href = 'https://www.example.com/' + method.toLowerCase();
}
function confirmPayment() {
    document.getElementById('payment-message').classList.remove('hidden');
}
function toggleFAQ() {
    let faq = document.getElementById('faq-content');
    faq.classList.toggle('hidden');
}

const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});
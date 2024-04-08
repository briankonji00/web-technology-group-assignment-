document.getElementById('forgot-password').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Please contact our support team for password recovery.');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you would typically validate the form and handle the login process
    alert('Login successful!');
    window.location.href = 'home_page.html'; 
});

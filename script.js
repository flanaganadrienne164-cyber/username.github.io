document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Simulate a login process
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Here you can add your actual authentication logic
        if(username && password) { // Dummy check for example
            // Redirect to profile page
            window.location.href = 'profile.html';
        } else {
            alert('Please enter valid credentials.');
        }
    });
});
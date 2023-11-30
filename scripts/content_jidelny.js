emailInput = document.getElementById('email');
passwordInput = document.getElementById('password');
loginButton = document.getElementById('login');

emailInput.focus();

passwordInput.addEventListener('keypress', function(event) {
	if (event.key === 'Enter') {
		loginButton.click();
	}
});
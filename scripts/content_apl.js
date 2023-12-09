userNameInput = document.getElementById('floatingInput');
passwordInput = document.getElementById('floatingPassword');

if (userNameInput !== null && passwordInput !== null) {
	chrome.storage.sync.get(['userName', 'password'], function(login) {
		userNameInput.value = login.userName;
		passwordInput.value = login.password;
		
		submitButton = document.getElementsByClassName('btn btn-primary')[0];
		submitButton.click();
	});
}